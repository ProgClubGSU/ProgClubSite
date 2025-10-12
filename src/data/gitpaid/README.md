# gitPAID Resources Guide

This directory contains all the resource data for the `/gitpaid` page. The files are structured to make it easy for anyone to add, edit, or remove resources without touching the main page code.

## 📁 File Structure

```
src/data/gitpaid/
├── README.md                    # This file - instructions for editing
├── index.ts                     # Exports all resources (don't modify)
├── guides.ts                    # Main progsu guides
└── additional-resources.ts      # External resources by category
```

## 🎯 Quick Start

### Adding a New Guide

Edit `guides.ts` and add to either `gettingInterviewGuides` or `passingInterviewGuides`:

```typescript
{
  title: "Your Guide Title",
  description: "Brief description of what this guide covers",
  url: "/gitpaid/your-markdown-file-name",  // or "#" if coming soon
  difficulty: "beginner",  // or "intermediate" or "advanced"
  impact: "high"  // or "multiplier" or "essential"
}
```

**Note:** Make sure you create the corresponding markdown file in `src/content/gitpaid/your-markdown-file-name.md`

### Adding a New External Resource

Edit `additional-resources.ts` and add to the appropriate category array:

```typescript
// Find the category (jobBoards, interviewPrep, resumePortfolio, or learningPlatforms)
// Add a new object:
{
  title: "Resource Name",
  description: "What this resource does and why it's useful",
  url: "https://example.com"
}
```

### Adding a New Resource Category

Edit `additional-resources.ts` and:

1. Create a new resource array:
```typescript
const myNewCategory: Resource[] = [
  {
    title: "First Resource",
    description: "Description here",
    url: "https://example.com"
  }
];
```

2. Add it to the `additionalResources` export:
```typescript
export const additionalResources: ResourceCategory[] = [
  // ... existing categories
  {
    id: "my-new-category",
    title: "My New Category",
    icon: "🚀",  // Pick an emoji
    resources: myNewCategory
  }
];
```

### Removing a Resource

Simply delete or comment out the resource object from the appropriate array.

## 📝 Field Descriptions

### Guides

| Field | Type | Options | Description |
|-------|------|---------|-------------|
| `title` | string | Any | Display name of the guide |
| `description` | string | Any | Brief explanation (1-2 sentences) |
| `url` | string | URL or "#" | Link to guide. Use "#" for coming soon |
| `difficulty` | string | beginner, intermediate, advanced | Skill level required |
| `impact` | string | high, multiplier, essential | How impactful this is |

### Additional Resources

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Name of the external resource |
| `description` | string | What it does (1-2 sentences) |
| `url` | string | Full URL with https:// |

### Resource Categories

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (kebab-case) |
| `title` | string | Display name for the category |
| `icon` | string | Single emoji to represent category |
| `resources` | array | Array of Resource objects |

## ✅ Best Practices

1. **Descriptions**: Keep them concise (1-2 sentences) and action-oriented
2. **URLs**:
   - Always use full URLs for external links (https://...)
   - Use relative URLs for internal guides (/gitpaid/...)
   - Use "#" for guides that are coming soon
3. **Order**: Resources are displayed in the order they appear in the array
4. **Icons**: Use single emojis that clearly represent the category

## 🔄 After Making Changes

After editing any file:
1. Save your changes
2. The dev server will automatically reload
3. Visit `http://localhost:4321/gitpaid` to see your changes
4. Commit your changes to git

## 💡 Examples

### Example: Adding a New Job Board

In `additional-resources.ts`, find the `jobBoards` array and add:

```typescript
const jobBoards: Resource[] = [
  // ... existing resources
  {
    title: "Wellfound (AngelList)",
    description: "Startup-focused job board with direct access to founders and hiring managers",
    url: "https://wellfound.com/"
  }
];
```

### Example: Adding a Coming Soon Guide

In `guides.ts`:

```typescript
export const gettingInterviewGuides: Guide[] = [
  // ... existing guides
  {
    title: "Cold Email Templates",
    description: "Proven email templates for reaching out to recruiters and hiring managers",
    url: "#",  // Coming soon
    difficulty: "intermediate",
    impact: "multiplier"
  }
];
```

## 🐛 Troubleshooting

**Changes not appearing?**
- Check the browser console for TypeScript errors
- Make sure all commas are in place
- Verify quotes are matching (use double quotes)

**Build failing?**
- Run `npm run build` to see detailed errors
- Check that all required fields are present
- Ensure URLs are valid

## 📞 Questions?

If you need help or have questions:
- Ask in the progsu Discord #dev channel
- Check the main project README
- Review the existing resources as examples
