import rss from '@astrojs/rss';
import { g as getEvents } from '../chunks/sanity_BijJ_opN.mjs';
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_Db3kfyLr.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const events = await getEvents();
  
  // Helper function to extract plain text from description
  function getPlainTextExcerpt(description) {
    if (typeof description === 'string') return description;
    if (!description || !Array.isArray(description)) return '';
    
    // Extract text from block content
    return description
      .filter(block => block._type === 'block')
      .map(block => 
        block.children
          ?.filter(child => child._type === 'span')
          ?.map(span => span.text)
          ?.join('') || ''
      )
      .join(' ')
      .substring(0, 150) + '...';
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: events.map((event) => ({
      title: event.title,
      description: getPlainTextExcerpt(event.description),
      pubDate: event.date && event.date.value ? new Date(event.date.value) : undefined,
      link: `/events/${event.slug.current}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
