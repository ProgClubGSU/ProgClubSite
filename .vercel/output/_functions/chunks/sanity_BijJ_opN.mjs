import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';

const sanityClient = createClient({
  projectId: '44jj75h0', // Your project ID from studio/sanity.config.ts
  dataset: 'production',
  useCdn: false, // Disable CDN for development to get fresh data
  apiVersion: '2023-05-03', // Use current date in YYYY-MM-DD format
});

// Helper function to render Portable Text to HTML
function renderPortableText(blocks) {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks; // Handle old simple text fields
  return toHTML(blocks);
}

// Helper function to normalize event data (handle both old and new schema formats)
function normalizeEventData(event) {
  return {
    ...event,
    // Handle date field - could be string (old) or object (new)
    date: typeof event.date === 'string' 
      ? { isTBD: false, value: event.date }
      : event.date || { isTBD: true, value: null },
    
    // Handle time field - could be string (old) or object (new)
    time: typeof event.time === 'string'
      ? { isTBD: false, value: event.time }
      : event.time || { isTBD: true, value: null },
    
    // Handle location field - could be string (old) or object (new)
    location: typeof event.location === 'string'
      ? { isTBD: false, value: event.location }
      : event.location || { isTBD: true, value: null }
  };
}

// Smart sorting function for events
function sortEvents(events) {
  const now = new Date();
  
  return events.sort((a, b) => {
    // Pinned events always come first
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    
    // Both have confirmed dates
    if (a.date?.value && b.date?.value) {
      const dateA = new Date(a.date.value);
      const dateB = new Date(b.date.value);
      
      // Upcoming events first, then by date
      if (dateA >= now && dateB >= now) {
        return dateA - dateB; // Soonest first
      }
      if (dateA >= now) return -1; // A is upcoming
      if (dateB >= now) return 1;  // B is upcoming
      return dateB - dateA; // Past events: newest first
    }
    
    // One has date, one doesn't
    if (a.date?.value) return -1; // A has date, show first
    if (b.date?.value) return 1;  // B has date, show first
    
    // Both TBD - keep original order
    return 0;
  });
}

// Helper function to fetch all events
async function getEvents() {
  const events = await sanityClient.fetch(`
    *[_type == "event"] | order(date desc) {
      _id,
      title,
      pinned,
      specialTags[]-> {
        _id,
        name,
        slug,
        color,
        isActive
      },
      date,
      time,
      location,
      description,
      post,
      slug,
      gallery[] {
        asset-> {
          url,
          metadata { lqip, dimensions }
        },
        alt
      },
      resources[] {
        type,
        label,
        url
      }
    }
  `);
  
  const normalizedEvents = events.map(normalizeEventData);
  return sortEvents(normalizedEvents);
}

export { getEvents as g, renderPortableText as r };
