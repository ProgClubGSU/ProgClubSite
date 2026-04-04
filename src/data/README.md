# progsu Member Management System 🚀

Welcome to the progsu member management system! This documentation will help you understand and work with our modular, maintainable codebase.

## 📁 File Structure Overview

Our member system is organized into clean, separate files for easy maintenance:

```
src/
├── data/
│   ├── members.ts         # 📊 All member data (EDIT HERE to add/modify members)
│   ├── clubHistory.ts     # 📚 Historical timeline data  
│   └── README.md          # 📖 This documentation file
├── utils/
│   └── memberUtils.ts     # 🔧 Helper functions for sorting and logic
├── components/
│   └── MemberCard.astro   # 🎨 Individual member card display
└── pages/
    ├── members.astro      # 📄 Main members page
    └── history.astro      # 📄 Club history timeline page
```

## 🎯 Quick Start Guide

### Adding New Members (Most Common Task)

1. **Open `src/data/members.ts`**
2. **Find the appropriate academic year section** (e.g., "2025-2027")
3. **Copy an existing member object structure**
4. **Fill in the new member's information**
5. **Save the file** - changes appear automatically!

**Example:**
```typescript
{
  name: "New Member Name",
  role: "Vice President",
  description: "Brief description of their contributions...",
  github: "github-username",      // Optional - only if real/verified
  linkedin: "linkedin-profile",   // Optional - only if real/verified  
  specialties: ["Skill 1", "Skill 2", "Skill 3"]  // Optional
}
```

### Adding New Academic Years

1. **Add a new key** to the `membersByYear` object (format: "YYYY-YYYY")
2. **Add your members array** with member objects
3. **The website automatically displays** the new section

**Example:**
```typescript
"2027-2029": [
  { /* member objects here */ }
]
```

## ⚡ Special Role System

Our system automatically applies special visual effects based on member roles:

### 🌟 Ultra-Special Effects (Violet Sparkles)
- **"Founding President"** - Currently only Jenny Liu

### ✨ Special Effects (Golden Sparkles) 
- **"President"**, **"2nd President"**, **"3rd President"**, **"4th President"**, **"5th President"**
- Note: **"Vice President"** does NOT get special effects

### 🎖️ Priority Roles (Special Sorting)
- **"Founding Member"**, **"Founding Academic Advisor"**
- These appear earlier in their sections but without sparkle effects

### 📋 Standard Roles
- All other roles get beautiful standard styling

## 🔧 Advanced Customization

### Modifying Role Priorities

Edit `src/utils/memberUtils.ts` and update the `getRolePriority()` function:

```typescript
const priorities: Record<string, number> = {
  "President": 1,           // Appears first
  "New Special Role": 2,    // Add your new role here
  "Member": 11              // Appears last
};
```

### Changing Special Effects

Edit `src/utils/memberUtils.ts` functions:
- `isPresidentRole()` - Controls who gets golden sparkles
- `isFoundingPresident()` - Controls who gets violet sparkles

### Customizing Card Appearance

Edit `src/components/MemberCard.astro` to modify:
- Visual effects and animations
- Layout and styling
- Hover behaviors
- Responsive design

## 📊 Data Field Guide

### Required Fields
- **`name`** - Full name of the member
- **`role`** - Official position (determines sorting and special effects)

### Optional Fields
- **`description`** - Brief bio/contribution summary
- **`github`** - GitHub username or profile URL (only include if verified)
- **`linkedin`** - LinkedIn username or profile URL (only include if verified)
- **`specialties`** - Array of skills, interests, or expertise areas

### Field Guidelines

#### Social Links
- **Only include REAL, verified links**
- Missing links automatically show "Coming Soon" buttons
- This prevents broken links and maintains professionalism

#### Descriptions
- Keep it concise but informative (1-2 sentences ideal)
- Focus on contributions and impact
- Missing descriptions get automatic role-appropriate placeholders

#### Specialties
- List relevant skills, technologies, or interests
- Keep them concise and professional
- Examples: "React", "Data Analytics", "Leadership", "Event Planning"

## 🧪 Testing Your Changes

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the members page:**
   ```
   http://localhost:4321/members
   ```

3. **Check these things:**
   - [ ] New members appear in correct year section
   - [ ] Sorting is correct (Presidents first, then by priority)
   - [ ] Special effects work on president cards
   - [ ] Social links show "Coming Soon" for missing links
   - [ ] Page is responsive on mobile/tablet

4. **Build and verify:**
   ```bash
   npm run build
   ```

## 🔄 Git Workflow

When making changes:

1. **Test locally first** using `npm run dev`
2. **Commit with descriptive messages:**
   ```bash
   git add .
   git commit -m "Add new VP member for 2025-2027"
   git push
   ```

## 🆘 Troubleshooting

### Member Not Appearing
- Check that the member object syntax is correct (commas, brackets)
- Verify the academic year section exists
- Make sure required fields (name, role) are present

### Wrong Sorting Order
- Check the role name exactly matches entries in `getRolePriority()`
- Ensure no typos in role names
- Consider if you need to add a new role to the priority system

### Special Effects Not Working
- Verify the role name exactly matches `isPresidentRole()` criteria
- Check that parent element has the `group` class
- Test in different browsers

### Build Errors
- Check for TypeScript errors in the terminal
- Verify all imports are correct
- Ensure data structure matches the interface definitions

## 📞 Getting Help

If you're stuck:

1. **Check the browser console** for JavaScript errors
2. **Look at existing working examples** in the code
3. **Ask in the Discord** for help from other developers
4. **Review this documentation** for missed steps

## 🎉 Contributing Guidelines

When contributing to this system:

- **Follow the existing patterns** and conventions
- **Test your changes thoroughly** before committing
- **Write descriptive commit messages**
- **Document any new features** you add
- **Keep the modular structure** - don't put everything in one file!

---

*This system was designed to be maintainable and easy to use. If you find anything confusing or have suggestions for improvement, please update this documentation!* 