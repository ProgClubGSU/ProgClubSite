# GitPaid Guide Components

This directory contains components (both Astro and React) that can be used in the gitPaid MDX guides to enhance content presentation.

## Component Types

- **Astro Components** (.astro): Static components with no interactivity. These are more performant and should be used when possible.
- **React Components** (.tsx): Interactive components with client-side JavaScript. Use these when you need user interaction (click, hover, etc.).

## Usage in MDX Files

To use these components in your `.mdx` guides, import them at the top of the file (after the frontmatter):

### Static Components (Astro)

```mdx
---
title: "Your Guide Title"
description: "Guide description"
---

import Callout from '@/components/gitpaid/Callout.astro';
import Card from '@/components/gitpaid/Card.astro';

# Your Guide Content

<Callout type="success" title="Pro Tip">
Your content here
</Callout>
```

### Interactive Components (React)

For interactive components, add the `client:load` directive:

```mdx
import Accordion from '@/components/gitpaid/Accordion.tsx';
import CodeBlock from '@/components/gitpaid/CodeBlock.tsx';

<Accordion title="Click to expand" client:load>
This content is hidden by default.
</Accordion>
```

## Available Components

### 1. Button (React - Interactive)

Create beautiful, interactive buttons with multiple variants and sizes.

**Important:** Add `client:load` when using this component.

**Props:**
- `children`: Button text/content
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'gradient' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `icon`: Optional emoji or icon to display
- `iconPosition`: 'left' | 'right' (default: 'left')
- `onClick`: Optional click handler function
- `href`: Optional URL to link to (makes button an anchor tag)
- `external`: Boolean, opens link in new tab if true (default: false)
- `fullWidth`: Boolean, makes button full width (default: false)
- `disabled`: Boolean, disables the button (default: false)

**Examples:**

```mdx
{/* Basic buttons */}
<Button variant="primary" client:load>
  Click Me
</Button>

<Button variant="gradient" icon="✨" client:load>
  Fancy Button
</Button>

{/* Button with icon on right */}
<Button variant="success" icon="➡️" iconPosition="right" client:load>
  Next Step
</Button>

{/* Button as link */}
<Button
  variant="primary"
  href="https://example.com"
  external={true}
  client:load
>
  Visit Website
</Button>

{/* Full width button */}
<Button variant="gradient" fullWidth={true} client:load>
  Apply Now
</Button>

{/* Different sizes */}
<Button variant="primary" size="sm" client:load>Small</Button>
<Button variant="primary" size="md" client:load>Medium</Button>
<Button variant="primary" size="lg" client:load>Large</Button>
```

### 2. ButtonGroup (React - Interactive)

Group buttons together with consistent spacing and alignment.

**Important:** Add `client:load` when using this component.

**Props:**
- `children`: Button components to group
- `alignment`: 'left' | 'center' | 'right' (default: 'left')
- `spacing`: 'sm' | 'md' | 'lg' (default: 'md')
- `vertical`: Boolean, stacks buttons vertically (default: false)

**Examples:**

```mdx
{/* Horizontal button group */}
<ButtonGroup alignment="center" client:load>
  <Button variant="primary" client:load>Option 1</Button>
  <Button variant="secondary" client:load>Option 2</Button>
  <Button variant="success" client:load>Option 3</Button>
</ButtonGroup>

{/* Vertical button group */}
<ButtonGroup vertical={true} client:load>
  <Button variant="primary" fullWidth={true} client:load>Step 1</Button>
  <Button variant="primary" fullWidth={true} client:load>Step 2</Button>
  <Button variant="success" fullWidth={true} client:load>Step 3</Button>
</ButtonGroup>
```

### 3. Callout (Astro - Static)

Display important information with styled callouts.

**Props:**
- `type`: 'info' | 'warning' | 'success' | 'tip' | 'danger' (default: 'info')
- `title`: Optional title for the callout
- `children`: Content to display

**Examples:**

```mdx
<Callout type="info" title="Good to Know">
This is some helpful information.
</Callout>

<Callout type="warning">
Be careful with this approach!
</Callout>

<Callout type="success" title="Pro Tip">
Here's a great strategy to follow.
</Callout>

<Callout type="tip">
Quick tip: Always test your code!
</Callout>

<Callout type="danger" title="Important">
This is critical information.
</Callout>
```

### 4. Card (Astro - Static)

Display content in a styled card container.

**Props:**
- `title`: Optional title for the card
- `variant`: 'default' | 'gradient' | 'bordered' (default: 'default')
- `className`: Additional CSS classes
- `children`: Content to display

**Examples:**

```mdx
<Card title="Important Concept">
Your content here
</Card>

<Card variant="gradient" title="Highlighted Section">
This will have a gradient background
</Card>

<Card variant="bordered">
This has a prominent border
</Card>
```

### 5. CodeBlock (React - Interactive)

Display code with syntax highlighting and a copy button.

**Important:** Add `client:load` when using this component.

**Props:**
- `code`: The code string to display
- `language`: Programming language (default: 'javascript')
- `title`: Optional title for the code block
- `showLineNumbers`: Boolean to show/hide line numbers (default: false)

**Examples:**

```mdx
<CodeBlock
  code={`function hello() {
  console.log('Hello, World!');
}`}
  language="javascript"
  title="Example Function"
  showLineNumbers={true}
  client:load
/>
```

### 6. Accordion (React - Interactive)

Create collapsible content sections.

**Important:** Add `client:load` when using this component.

**Props:**
- `title`: Title displayed in the accordion header
- `defaultOpen`: Boolean to set initial state (default: false)
- `children`: Content to display when expanded

**Examples:**

```mdx
<Accordion title="Click to expand" client:load>
This content is hidden by default.
</Accordion>

<Accordion title="Advanced Options" defaultOpen={true} client:load>
This content is visible by default.
</Accordion>
```

### 7. Timeline (React - Static Data)

Display events or steps in a timeline format.

**Props:**
- `items`: Array of timeline items
  - Each item: `{ title: string, description: string, date?: string, status?: 'completed' | 'in-progress' | 'upcoming' }`

**Example:**

```mdx
<Timeline items={[
  {
    title: 'Update Resume',
    description: 'Polish your resume with the tips from this guide',
    status: 'completed'
  },
  {
    title: 'Apply to Companies',
    description: 'Send out 10 applications per week',
    status: 'in-progress'
  },
  {
    title: 'Interview Prep',
    description: 'Practice coding problems and behavioral questions',
    status: 'upcoming'
  }
]} />
```

### 8. StepList (React - Static Data)

Display numbered step-by-step instructions.

**Props:**
- `steps`: Array of step objects
  - Each step: `{ title: string, description: string }`

**Example:**

```mdx
<StepList steps={[
  {
    title: 'Create Account',
    description: 'Sign up on the company website'
  },
  {
    title: 'Upload Resume',
    description: 'Make sure it\'s in PDF format'
  },
  {
    title: 'Complete Application',
    description: 'Fill out all required fields accurately'
  }
]} />
```

## Tips

1. **Import only what you need** - Only import the components you're using in each guide
2. **Mix with Markdown** - These components work seamlessly with standard Markdown
3. **Nesting** - You can nest components inside each other, but be mindful of complexity
4. **Client-side interactivity** - Components like `Accordion` and `CodeBlock` have interactive features that work client-side

## Adding New Components

To add new components:

1. Create a new `.tsx` file in this directory
2. Export a default function component
3. Document it in this README
4. Import and use it in your MDX guides
