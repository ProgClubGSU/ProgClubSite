# PROGSU Website

Official website for Georgia State University's Programming Club, built with modern web technologies to serve our growing community of developers and programming enthusiasts.

## About PROGSU

progsu is Georgia State University's premier programming club, dedicated to fostering an inclusive and supportive technology community for students at all skill levels. Our mission is to provide learning opportunities, networking events, and practical programming experience to help students grow as developers and professionals.

### What We Offer

- **Workshops and Learning Sessions**: Hands-on coding workshops covering web development, algorithms, AI/ML, and emerging technologies
- **Hackathons and Competitions**: Team-based coding challenges and project-building events
- **Networking Opportunities**: Connect with fellow students, alumni, and industry professionals
- **Project Collaboration**: Contribute to open-source projects and build your portfolio
- **Career Development**: Resume reviews, mock interviews, and internship guidance

## Technology Stack

- **Astro**: Modern static site generator for optimal performance
- **TypeScript**: Type-safe development with enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Sanity CMS**: Headless content management system for events and announcements
- **MDX**: Enhanced Markdown with React component support
- **Vercel**: Fast deployment and hosting platform

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ProgClubGSU/ProgClubSite.git
cd ProgClubSite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Development Commands

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run fmt          # Format code with Prettier
```

## Project Structure

```
ProgClubSite/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.astro     # Site navigation
│   │   ├── Footer.astro     # Site footer
│   │   ├── MemberCard.astro # Member profile display
│   │   └── BlogPostCard.astro # Event card component
│   ├── layouts/             # Page layout templates
│   │   ├── Layout.astro     # Base page layout
│   │   └── BlogPost.astro   # Event detail layout
│   ├── pages/               # Site pages and routing
│   │   ├── index.astro      # Homepage
│   │   ├── members.astro    # Member directory
│   │   ├── history.astro    # Club timeline
│   │   ├── events/          # Event pages
│   │   └── resources.astro  # Learning resources
│   ├── data/                # Static data files
│   │   ├── members.ts       # Member information
│   │   ├── clubHistory.ts   # Historical timeline
│   │   └── README.md        # Data editing guide
│   ├── utils/               # Helper functions
│   │   └── memberUtils.ts   # Member sorting and utilities
│   ├── lib/                 # External integrations
│   │   └── sanity.js        # Sanity CMS client
│   ├── styles/              # Global styles
│   └── consts.ts            # Site configuration
├── studio/                  # Sanity CMS studio
│   ├── schemaTypes/         # Content models
│   └── sanity.config.ts     # CMS configuration
├── public/                  # Static assets
└── astro.config.mjs         # Astro configuration
```

## Contributing

We welcome contributions from all club members, regardless of technical experience. There are multiple ways to contribute to the website, from content updates to code improvements.

### For Non-Technical Contributors

#### Content Management with Sanity CMS

Our website uses Sanity CMS for managing events, announcements, and other dynamic content. This allows non-technical members to update website content without touching code.

**Getting Access:**
1. Contact a club officer on Discord or at club meetings
2. Request access to the Sanity CMS workspace
3. You'll receive an invitation to join the progsuSite project

**Using Sanity Studio:**
1. Navigate to the studio directory: `cd studio`
2. Install dependencies: `npm install`
3. Start the CMS interface: `npm run dev`
4. Open `http://localhost:3333` in your browser
5. Sign in with your Google or GitHub account

**Content Types Available:**
- **Events**: Create workshop announcements, meeting notices, and social events
- **Tags**: Organize content by topics like "Web Development," "AI/ML," or "Beginner-Friendly"

**Adding Events:**
1. Click "Events" in the Sanity Studio sidebar
2. Click "Create new Event"
3. Fill in the required fields (title, description, date)
4. Add optional information (location, registration links, images)
5. Set appropriate tags for categorization
6. Click "Publish" when ready

**Content Guidelines:**
- Use clear, descriptive titles that indicate the event type and target audience
- Include specific dates, times, and locations when available
- Write engaging descriptions that explain what attendees will learn or experience
- Add relevant tags to help users find content
- Include images when possible to make events more appealing
- Proofread content before publishing

#### Editing Static Data Files

Some content is managed through TypeScript files that can be edited directly. These files are well-documented and designed for easy editing by non-technical members.

##### Member Directory (src/data/members.ts)

This file contains information about all club members, organized by academic year.

**Adding New Members:**
1. Open `src/data/members.ts`
2. Find the appropriate academic year section (e.g., "2025-2027")
3. Copy an existing member object and modify it:

```typescript
{
  name: "Your Name",
  role: "Member",  // or "Vice President", "Secretary", etc.
  description: "Brief description of your interests and contributions",
  github: "your-github-username",  // Optional, only if you have one
  linkedin: "your-linkedin-profile",  // Optional
  specialties: ["JavaScript", "React", "Node.js"]  // Optional skills list
}
```

4. Save the file and the website will update automatically

**Adding New Academic Years:**
Add a new section to the `membersByYear` object:

```typescript
"2027-2029": [
  // Add member objects here
]
```

**Special Roles:**
- Presidents receive special visual effects (golden sparkles)
- "Founding President" receives ultra-special effects (violet sparkles)
- "Founding Member" and "Founding Academic Advisor" get priority placement

##### Club History (src/data/clubHistory.ts)

This file contains the club's historical timeline displayed on the `/history` page.

**Adding Timeline Events:**
1. Open `src/data/clubHistory.ts`
2. Find the appropriate timeline section:
   - `founding`: March 2020 - Spring 2021
   - `earlyDevelopment`: 2021-2023
   - `growth`: 2023-2025
   - `currentEra`: 2025+

3. Add new events using this structure:

```typescript
{
  date: "Fall 2025",  // Can be specific date or general period
  title: "Creative Event Title",
  description: "Brief 1-2 sentence description of what happened.",
  type: "milestone"  // "milestone", "achievement", or "partnership"
}
```

**Event Types:**
- **milestone**: Major club achievements or organizational changes
- **achievement**: Specific accomplishments or recognitions
- **partnership**: New collaborations with other organizations

### For Technical Contributors

#### Development Guidelines

**Code Standards:**
- Use TypeScript for all new code
- Follow existing code patterns and conventions
- Create reusable components when possible
- Ensure mobile responsiveness
- Test changes across different browsers
- Follow accessibility best practices (WCAG guidelines)

**Component Development:**
- Use Astro components for static content
- Keep components focused and single-purpose
- Include proper TypeScript interfaces
- Add JSDoc comments for complex logic
- Use semantic HTML elements

**Styling Guidelines:**
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design (mobile-first approach)
- Test on various screen sizes
- Maintain consistent spacing and typography

#### Contribution Workflow

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ProgClubSite.git
   cd ProgClubSite
   ```

3. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** and test locally:
   ```bash
   npm run dev
   ```

5. **Test the production build:**
   ```bash
   npm run build
   npm run preview
   ```

6. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "Add member profile image upload feature"
   ```

7. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing instructions
   - Reference to any related issues

#### Feature Ideas

**High Priority:**
- Member profile pages with project showcases
- Interactive events calendar
- Resource rating and review system
- Newsletter signup integration
- Search functionality for events and resources

**Design Improvements:**
- Dark/light theme toggle
- Improved mobile navigation
- Loading animations and micro-interactions
- Better image optimization
- Enhanced accessibility features

**Content Features:**
- Blog system for technical articles
- Project gallery for member work
- Resource categorization and filtering
- Event RSVP system
- Member achievement badges

### Code Review Process

All contributions go through a review process to maintain code quality and consistency:

1. **Automated Checks**: Code is automatically checked for formatting and build errors
2. **Peer Review**: Another club member reviews the code for functionality and style
3. **Testing**: Changes are tested across different devices and browsers
4. **Documentation**: New features must include appropriate documentation

## Deployment

The website is automatically deployed to Vercel when changes are pushed to the main branch. Pull requests generate preview deployments for testing.

**Manual Deployment:**
1. Build the project: `npm run build`
2. Deploy to Vercel: `vercel --prod` (requires Vercel CLI)

**Environment Requirements:**
- Node.js 18+
- Build command: `npm run build`
- Output directory: `dist`

## Site Configuration

Key configuration files:

- **src/consts.ts**: Site title, description, navigation links, and social media links
- **astro.config.mjs**: Build settings and integrations
- **tailwind.config.mjs**: Design system and styling configuration
- **studio/sanity.config.ts**: CMS configuration and schema

## Getting Help

**For Club Members:**
- Join our Discord server for real-time help
- Attend our weekly meetings for in-person assistance
- Contact club officers for administrative access
- Check the `/resources` page for learning materials

**For Developers:**
- Read the detailed documentation in `src/data/README.md`
- Check existing components for implementation examples
- Review the TypeScript interfaces for data structures
- Test changes thoroughly before submitting pull requests

**Common Issues:**
- **Build Errors**: Check the console for TypeScript errors and missing imports
- **Content Not Updating**: Ensure data files are saved and the development server is running
- **Sanity Access**: Contact club officers for CMS workspace invitations
- **Git Issues**: Make sure you're working on a feature branch and your fork is up to date

## License

This project is open source under the MIT License. Feel free to use this code as a foundation for other student organization websites.

## Contact

- **Discord**: Join our server for daily discussions and help

---

Built with care by progsu members. Everyone is welcome to contribute and learn together.
