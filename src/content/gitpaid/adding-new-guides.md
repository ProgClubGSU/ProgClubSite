---
title: "Adding New Guides to gitPAID"
description: "Developer guide for adding new markdown guides to the gitPAID resource system"
type: "meta"
difficulty: "beginner"
impact: "high"
publishDate: 2024-01-15T00:00:00.000Z
lastUpdated: 2024-01-15T00:00:00.000Z
---

# Adding New Guides to gitPAID

This guide explains how to add new markdown guides to the gitPAID resource system. The system is designed to be simple and automatic - just add a markdown file with proper frontmatter, and the navigation will generate automatically.

## Quick Start

1. Create a new `.md` file in `src/content/gitpaid/`
2. Add the required frontmatter
3. Write your content using standard markdown headings
4. The guide will automatically appear in the gitPAID resources

## File Structure

All guide files go in the `src/content/gitpaid/` directory:

```
src/content/gitpaid/
├── resume-guide.md
├── referrals-guide.md
├── your-new-guide.md
└── ...
```

## Required Frontmatter

Every guide must start with YAML frontmatter between `---` delimiters:

```yaml
---
title: "Your Guide Title"
description: "Brief description of what this guide covers"
type: "career"
difficulty: "beginner"
impact: "high"
publishDate: 2024-01-15T00:00:00.000Z
lastUpdated: 2024-01-15T00:00:00.000Z
---
```

### Frontmatter Fields

- **title** (required): The display title of your guide
- **description** (required): A short description that appears in the guide list
- **type** (required): Category of the guide
  - `"career"` - Career development content
  - `"technical"` - Technical skills and tutorials
  - `"interview"` - Interview preparation
  - `"meta"` - Documentation and meta guides
- **difficulty** (required): How complex the content is
  - `"beginner"` - Easy to understand, no prerequisites
  - `"intermediate"` - Some prior knowledge helpful
  - `"advanced"` - Requires significant background
- **impact** (required): How valuable this guide is
  - `"high"` - Critical for success
  - `"medium"` - Very helpful
  - `"low"` - Nice to have
- **publishDate** (required): ISO 8601 date string
- **lastUpdated** (required): ISO 8601 date string

## Content Structure

### Use Standard Markdown Headings

The navigation system automatically generates from your markdown headings. Use standard markdown syntax:

```markdown
# Main Section (H1)

## Major Subsection (H2)

### Minor Subsection (H3)

#### Detail Section (H4)
```

**Important**: Do NOT use HTML heading tags like `<h1 id="...">`. Use pure markdown headings (`#`, `##`, `###`, `####`).

### Heading Hierarchy

The table of contents will automatically create a hierarchy based on your headings:

- **H1 (`#`)**: Main sections - appear at the top level
- **H2 (`##`)**: Major subsections - appear at the top level
- **H3 (`###`)**: Minor subsections - indented, smaller text
- **H4 (`####`)**: Details - further indented, smallest text

Example:

```markdown
# Getting Started

This is the main section content.

## Prerequisites

What you need to know first.

### Technical Requirements

Specific technical details.

#### Software Versions

Even more specific details.

## Step-by-Step Guide

Another major section.
```

This creates a navigation like:
- Getting Started
- Prerequisites
  - Technical Requirements
    - Software Versions
- Step-by-Step Guide

### Automatic Slug Generation

Astro automatically converts heading text to URL-friendly slugs:

- `# Work Experience Section` → slug: `work-experience-section`
- `## Does my resume matter?` → slug: `does-my-resume-matter`
- `### What to include (in 2–3 lines)` → slug: `what-to-include-in-2-3-lines`

You can link to these sections using:
```markdown
[Link text](#slug-name)
```

## Styling and Formatting

### Custom Blockquotes

The system includes styled blockquotes for different purposes:

#### Default (Info)
```markdown
> This is important information to highlight.
```

#### Tip Quote
```markdown
<blockquote class="tip-quote">
<strong>Quick Tip:</strong> Your helpful tip here.
</blockquote>
```

#### Warning Quote
```markdown
<blockquote class="warning-quote">
<strong>Important:</strong> Critical information or warnings.
</blockquote>
```

#### Code Quote
```markdown
<blockquote class="code-quote">
<strong>Technical Note:</strong> Code-related information.
</blockquote>
```

#### Success Quote
```markdown
<blockquote class="success-quote">
<strong>Success Strategy:</strong> Best practices and winning approaches.
</blockquote>
```

### Images

Use standard markdown image syntax:

```markdown
![Alt text description](/images/gitpaid/your-folder/image-name.png)
```

Store images in: `public/images/gitpaid/your-guide-name/`

### Tables

Use standard markdown tables:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Code Blocks

Use fenced code blocks with language specification:

````markdown
```javascript
const example = "code here";
```
````

### Lists

Both ordered and unordered lists work:

```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

### Emphasis

```markdown
**Bold text**
*Italic text*
`inline code`
```

## Navigation Behavior

### Desktop Navigation
- Fixed sidebar on the left
- Shows all headings in hierarchy
- Active section highlighted in blue
- Smooth scroll to sections
- Automatically updates as you scroll

### Mobile Navigation
- Collapsible dropdown button
- Same content as desktop
- Toggle to show/hide
- Smooth scroll to sections

## Testing Your Guide

1. Start the dev server:
```bash
npm run dev
```

2. Navigate to: `http://localhost:4321/gitpaid`

3. Click on your guide to view it

4. Check:
   - ✓ Title and description display correctly
   - ✓ All headings appear in the navigation
   - ✓ Hierarchy is properly indented
   - ✓ Links work correctly
   - ✓ Images load
   - ✓ Blockquotes are styled
   - ✓ Mobile navigation works

## Common Mistakes to Avoid

### ❌ Don't Use HTML Headings
```markdown
<!-- WRONG -->
<h1 id="my-section">My Section</h1>

<!-- CORRECT -->
# My Section
```

### ❌ Don't Skip Heading Levels
```markdown
<!-- WRONG - skips from H1 to H3 -->
# Main Section
### Subsection

<!-- CORRECT -->
# Main Section
## Subsection
```

### ❌ Don't Forget Frontmatter
Every guide must have complete frontmatter at the top.

### ❌ Don't Use Special Characters in Headings
Stick to alphanumeric characters and common punctuation for best slug generation.

## Advanced: Content Collections

Your markdown files are processed through Astro's content collections system defined in `src/content/config.ts`. This provides:

- Type safety for frontmatter
- Automatic validation
- Better build performance
- IntelliSense support

The gitPAID collection schema ensures your frontmatter is correct at build time.

## File Naming Conventions

- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Examples:
  - ✓ `resume-guide.md`
  - ✓ `technical-interview-prep.md`
  - ✓ `behavioral-questions.md`
  - ✗ `Guide1.md`
  - ✗ `my guide.md`

## Updating Existing Guides

1. Edit the markdown file directly
2. Update the `lastUpdated` field in frontmatter
3. The changes will be reflected immediately in dev mode
4. Commit and push your changes

## Example Complete Guide

Here's a minimal complete guide:

```markdown
---
title: "Example Guide"
description: "An example guide showing the structure"
type: "career"
difficulty: "beginner"
impact: "high"
publishDate: 2024-01-15T00:00:00.000Z
lastUpdated: 2024-01-15T00:00:00.000Z
---

# Welcome to the Guide

This is the introduction to your guide.

## First Major Section

Content for the first section.

### Subsection 1A

More detailed content.

### Subsection 1B

More detailed content.

## Second Major Section

Content for the second section.

<blockquote class="tip-quote">
<strong>Pro Tip:</strong> Add helpful tips throughout your guide.
</blockquote>

### Subsection 2A

With some code:

```javascript
console.log("Hello, gitPAID!");
```

## Conclusion

Wrap up your guide here.
```

## Getting Help

If you encounter issues:

1. Check this guide first
2. Look at existing guides as examples
3. Check the Astro documentation for content collections
4. Review `src/pages/gitpaid/[...slug].astro` for the template

## Summary Checklist

Before publishing a new guide:

- [ ] File created in `src/content/gitpaid/`
- [ ] Complete frontmatter with all required fields
- [ ] Use standard markdown headings (`#`, `##`, `###`, `####`)
- [ ] Images stored in `public/images/gitpaid/`
- [ ] Tested in local dev server
- [ ] Navigation displays correctly
- [ ] All links work
- [ ] Mobile view tested
- [ ] Content is clear and well-structured

---

**That's it!** The system handles everything else automatically. Just write good markdown content with proper headings, and the gitPAID system will take care of the rest.
