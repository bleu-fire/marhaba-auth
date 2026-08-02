# Marhba Design System

## Overview
Complete React component library and design tokens for the Marhba authentication interface. Pixel-perfect implementation of the warm, inviting Moroccan-inspired aesthetic.

---

## Design Tokens

### Color Palette
```
Cream Background:    #FAF8F3  (primary background)
Beige:              #F5F2ED  (secondary background, inputs)
Dark Beige:         #E8E4DD  (borders, dividers)
Coral (Primary):    #F07856  (CTAs, accents)
Coral Hover:        #E85C3F  (hover state)
Gold:               #C9A961  (logo/branding accent)
Text:               #2A2825  (primary text)
Text Muted:         #7A7570  (secondary text, labels)
Border:             #E0DDD8  (input borders, dividers)
Error:              #D97757  (error states)
```

### Typography

**Display Font** (Headings)
- Family: Georgia, Garamond, serif
- Sizes: 40px (lg), 32px (md), 24px (sm)
- Weights: 600, 700

**Body Font** (Content)
- Family: Inter, system fonts, sans-serif
- Sizes: 18px (lg), 16px (base), 14px (sm), 12px (xs)
- Weights: 400, 500, 600

### Spacing System
```
xs:  8px   (0.5rem)
sm:  16px  (1rem)
md:  24px  (1.5rem)
lg:  32px  (2rem)
xl:  48px  (3rem)
xxl: 64px  (4rem)
```

### Radius & Shadows
```
Border Radius: 4px, 8px, 12px
Shadow (sm):   0 1px 2px rgba(0,0,0,0.05)
Shadow (md):   0 4px 6px rgba(0,0,0,0.1)
```

---

## Components

### Input
Text input with optional label, error state, and password visibility toggle.

**Props:**
- `label?: string` - Field label
- `error?: string` - Error message
- `type?: string` - Input type (text, email, password, etc.)
- All standard HTML input attributes

**Usage:**
```jsx
<Input 
  label="Email" 
  type="email"
  placeholder="user@example.com"
  error={emailError}
/>

<Input 
  label="Password" 
  type="password"
/>
```

### Button
Reusable button with multiple variants and sizes.

**Props:**
- `variant?: 'primary' | 'secondary' | 'link'`
- `size?: 'lg' | 'md' | 'sm'`
- `children: React.ReactNode` - Button text/content
- All standard HTML button attributes

**Usage:**
```jsx
<Button variant="primary" size="lg">
  Create Account
</Button>

<Button variant="link" size="sm">
  Forgot password?
</Button>
```

### Sidebar
Main navigation/branding container (left panel).

**Usage:**
```jsx
<Sidebar>
  <Logo />
  {/* Additional sidebar content */}
</Sidebar>
```

### Logo
Branded logo component with Marhba branding (star + text).

**Usage:**
```jsx
<Logo />
```

### AuthContainer
Main authentication layout (combines sidebar + form area + decorative section).

**Props:**
- `title?: string` - Page title
- `subtitle?: string` - Page subtitle
- `children: React.ReactNode` - Form content

**Usage:**
```jsx
<AuthContainer 
  title="Welcome to Marhba" 
  subtitle="Create your account and get started"
>
  {/* Form content */}
</AuthContainer>
```

---

## Page Templates

### SignupPage
Complete signup flow with:
- Full Name input
- Email input
- Password input with confirmation
- "Create Account" button
- Link to login

### LoginPage
Complete login flow with:
- Email input
- Password input with visibility toggle
- "Remember this device" checkbox
- "Forgot password?" link
- "Sign In" button
- Link to signup

---

## Design Decisions

### Color Choices
- **Warm Palette**: Cream/beige background creates inviting, peaceful aesthetic
- **Coral Accent**: Energetic, action-oriented CTAs that stand out without being jarring
- **Gold Detail**: Premium, warm accent for logo/branding (Moroccan aesthetic)

### Typography
- **Serif Display Fonts**: Elegant, distinctive headings (Georgia/Garamond)
- **Sans-serif Body**: Clean, readable content (Inter)
- **Clear Hierarchy**: Large display fonts for titles, smaller body fonts for forms

### Layout
- **Sidebar + Form Split**: Classic two-column auth layout
- **Decorative Right Panel**: Botanical/Moroccan imagery area (gradient overlay)
- **Breathing Room**: Generous spacing creates premium feel

### Interaction
- **Focus States**: Subtle coral glow on input focus
- **Hover Effects**: Button color transitions
- **Password Toggle**: Eye icon reveals password
- **Clear Error States**: Red text + border for validation

---

## Usage Instructions

### 1. Install Dependencies
```bash
npm install lucide-react
# lucide-react for icons (Eye, EyeOff, ArrowLeft, ArrowRight)
```

### 2. Import Components
```jsx
import { 
  Input, 
  Button, 
  Sidebar, 
  Logo, 
  AuthContainer,
  tokens 
} from './marhba-design-system';
```

### 3. Access Design Tokens
```jsx
const myColor = tokens.colors.coral;
const mySpacing = tokens.spacing.md;
const myFont = tokens.typography.body.family;
```

### 4. Build Custom Pages
```jsx
const MyCustomPage = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar>
        <Logo />
      </Sidebar>
      <AuthContainer title="Custom Page">
        {/* Your content */}
      </AuthContainer>
    </div>
  );
};
```

---

## Responsive Considerations

Current implementation is optimized for desktop. For mobile:
- Switch from two-column to full-width stack
- Reduce padding/spacing by 50%
- Hide decorative right panel or move to top
- Adjust font sizes down by 1-2 sizes

Example mobile breakpoint:
```jsx
@media (max-width: 768px) {
  // Stack layout vertically
  // Reduce padding
  // Adjust font sizes
}
```

---

## Accessibility

- ✅ Focus states on all inputs (coral glow border)
- ✅ Error messages linked to inputs
- ✅ Visible password toggle (Eye/EyeOff icons)
- ✅ Proper label associations
- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigable

---

## Customization

All tokens are centralized in the `tokens` object. To customize:

```jsx
// Change primary coral color
tokens.colors.coral = '#FF6B6B';

// Change body font
tokens.typography.body.family = '"Poppins", sans-serif';

// Change spacing
tokens.spacing.md = '20px';
```

Components automatically use updated tokens.

---

## Component Export Summary

```jsx
// Components
export { Input, Button, Sidebar, Logo, AuthContainer };

// Full demo with page switcher
export default Demo;

// Design tokens
export { tokens };
```

---

## Notes

- All colors use hex values for maximum compatibility
- Icons from `lucide-react` are small, fast, and tree-shakeable
- Typography pairing (serif + sans-serif) creates distinctive aesthetic
- Warm color palette evokes comfort, hospitality, luxury travel
- Component sizes scale proportionally with tokens