# Marhba App Design System

## Overview
Marhba is a mobile authentication app with a warm, minimal aesthetic inspired by Moroccan design. The visual language emphasizes clarity, trust, and elegant simplicity.

---

## Color Palette

### Primary Colors
- **Background**: `#F5F1ED` (Warm Beige)
- **Accent Gold**: `#C9A86A` (Warm Tan/Gold)
- **Button Red**: `#E07856` (Terracotta/Rust)
- **Text Dark**: `#1A1A1A` (Near Black)
- **Text Light**: `#666666` (Medium Gray)

### Secondary Colors
- **Error Border**: `#E07856` (Red - same as button)
- **Success**: `#4CAF50` (Green)
- **Border Light**: `#EEEEEE` (Light Gray)

---

## Typography

### Font Family
- **Primary**: System fonts (San Francisco, Segoe UI, Roboto)
- **Style**: Modern, clean, accessible

### Font Weights & Sizes
- **Heading 1** (App Title): 28px, Bold (700)
- **Heading 2** (Section Title): 20px, Bold (700)
- **Body Text**: 16px, Regular (400)
- **Label Text**: 14px, Regular (400)
- **Helper Text**: 12px, Regular (400)

---

## Screens

### 1. Splash/Loading Screen
**Purpose**: Session check on app launch

**Elements:**
- Background: `#F5F1ED`
- Moroccan geometric logo (4-pointed star pattern)
- Logo color: `#C9A86A` (Accent Gold)
- App name: "Marhba" (28px, Bold)
- Loading text: "Checking your session..." (14px, Gray)
- Loading animation: Dot spinner (3 dots)

---

### 2. Login Screen
**Purpose**: Authenticate existing users

**Layout:**
- Header: "Welcome back" (20px, Bold)
- Subtext: "Sign in to continue to your account" (14px, Gray)

**Form Fields:**
1. **Email Address**
   - Label: "Email Address" (14px)
   - Input field with placeholder: "oussama@email.com"
   - Border color on error: `#E07856`
   - Field height: 48px
   - Padding: 12px

2. **Password**
   - Label: "Password" (14px)
   - Input field with placeholder (dots/bullets)
   - Eye icon to toggle visibility (right-aligned)
   - Border color on error: `#E07856`
   - Field height: 48px
   - Padding: 12px

**Buttons:**
- **Sign In Button**
  - Background: `#E07856` (Terracotta Red)
  - Text: "Sign In" (White, 16px, Bold)
  - Height: 48px
  - Full width
  - Border radius: 8px
  - No border

**Links:**
- "Don't have an account?" (14px, Gray)
- "Create account" (14px, `#E07856`, Bold)

---

### 3. Register Screen
**Purpose**: New user account creation

**Layout:**
- Header: "Welcome to Marhba" (20px, Bold)
- Subtext: "Create your account and get started" (14px, Gray)

**Form Fields:**
1. **Full Name**
   - Label: "Full Name" (14px)
   - Placeholder: "Oussama"
   - Field height: 48px
   - Padding: 12px

2. **Email**
   - Label: "Email" (14px)
   - Placeholder: "oussama@email.com"
   - Field height: 48px
   - Padding: 12px

3. **Password**
   - Label: "Password" (14px)
   - Helper text: "Password must be at least 8 characters" (12px, Gray)
   - Field height: 48px
   - Padding: 12px

4. **Confirm Password**
   - Label: "Confirm Password" (14px)
   - Field height: 48px
   - Padding: 12px

**Buttons:**
- **Create Account Button**
  - Background: `#E07856` (Terracotta Red)
  - Text: "Create Account" (White, 16px, Bold)
  - Height: 48px
  - Full width
  - Border radius: 8px

**Links:**
- "Already have an account?" (14px, Gray)
- "Sign in" (14px, `#E07856`, Bold)

---

### 4. Protected Home Screen
**Purpose**: Authenticated user dashboard

**Header:**
- Title: "Marhba" (left-aligned)
- User avatar (right-aligned, circular, 40px diameter)
- Navigation arrow/back icon (left of avatar)

**Content:**
- Greeting: "Marhba, Oussama 👋" (24px, Bold)
- Subtext: "Welcome back. You're successfully authenticated." (14px, Gray)

**Security Card:**
- Background: `#FFF5F2` (Light red/peach)
- Icon: Shield with checkmark (terracotta red)
- Title: "Account secured" (14px, Bold)
- Status: "Your session is active" (12px, Gray)
- Additional info: "Manrope SemiBold" (12px, Gray, smaller)

**Spacing:**
- Content padding: 16px
- Card padding: 12px

---

## Component Specifications

### Input Field
```
Height: 48px
Padding: 12px (horizontal)
Border: 1px solid #EEEEEE
Border radius: 6px
Background: White
Font size: 16px
Focus state: Border color `#C9A86A`
Error state: Border color `#E07856`
```

### Button
```
Height: 48px
Width: Full (with margins)
Background: #E07856
Text color: White
Font size: 16px
Font weight: Bold
Border radius: 8px
Shadow: Subtle (optional)
Active state: Slightly darker shade
```

### Card
```
Background: White or light variant
Border radius: 12px
Padding: 16px
Shadow: Subtle (0 2px 8px rgba(0,0,0,0.08))
```

---

## Spacing & Layout

### Margins
- Page margins: 16px horizontal
- Section spacing: 24px vertical
- Element spacing: 12px vertical

### Safe Area
- Respects notch/dynamic island
- Status bar: 44px (iPhone safe area)
- Bottom safe area: 16px minimum

---

## Visual Details

### Logo
- Moroccan 4-pointed star pattern
- Geometric, symmetrical design
- Color: `#C9A86A` (Gold)
- Size on splash: ~80x80px
- Size on header: ~32x32px

### Loading Animation
- 3-dot spinner
- Color: `#C9A86A`
- Animation: Fade in/out cycle

### Icons
- Eye icon (password toggle): `#999999`
- Arrow icon (navigation): `#1A1A1A`
- Shield icon (security): `#E07856`
- All icons: 20-24px size

---

## States & Interactions

### Input Focus
- Border color: `#C9A86A` (Gold accent)
- Cursor visible
- Keyboard appears

### Input Error
- Border color: `#E07856` (Red)
- Error message appears below (12px, red text)

### Button Hover
- Background: Darker shade of `#E07856`
- Cursor: Pointer
- Scale: Optional subtle scale effect

### Button Active
- Background: Darker shade
- Text: Remains white

---

## Accessibility

- Minimum touch target: 48x48px (buttons, input fields)
- Color contrast ratio: WCAG AA compliant
- Focus indicators: Visible on all interactive elements
- Text size: Minimum 14px for body text
- Error messages: Always accompanied by visual indicator

---

## Mobile Considerations

- Status bar: 44px height (iPhone)
- Viewport: Full screen width
- Notch clearance: Safe area insets respected
- Portrait orientation primary
- Touch-friendly spacing (48px minimum taps)

---

## File Exports

All design files use:
- RGB color space
- PNG for icons (transparent background)
- SVG for logo and interactive elements