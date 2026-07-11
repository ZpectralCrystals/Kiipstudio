---
name: Klip Studio Visual Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#ebbbb4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#b18780'
  outline-variant: '#603e39'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#ff5541'
  on-primary-container: '#5c0000'
  inverse-primary: '#c00002'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930001'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  nav-link:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  cta-text:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system for the creative studio is built on a foundation of high-contrast modernism. It balances the raw energy of a vibrant red with the sophisticated precision of deep, monochromatic surfaces. The brand personality is bold, confident, and unapologetically creative, designed to serve as a high-impact stage for visual portfolios and cinematic content.

The visual style leans into **High-Contrast / Bold** aesthetics. By utilizing a "Rich Black" environment, the interface recedes to allow content and the primary brand color to take center stage. The atmosphere is professional yet electric, characterized by clean lines, massive typography, and a "premium-dark" digital experience.

## Colors
This design system utilizes a restricted, high-impact palette to maintain brand authority and visual focus.

- **Primary (Vibrant Red):** Used exclusively for high-priority actions, accents, and brand markers. It should be used sparingly to maintain its "vibe" without overwhelming the user.
- **Secondary (White):** Reserved for primary typography and essential UI borders to ensure maximum legibility against dark backgrounds.
- **Background (Rich Black):** A deep `#0A0A0A` serves as the primary canvas, providing a sense of depth and allowing colors to pop.
- **Tertiary (Surface):** A subtle `#1A1A1A` used for card backgrounds and input fields to create a layered hierarchy without breaking the dark aesthetic.

## Typography
The typography strategy creates a clear distinction between structured navigation and expressive content. 

**Headings (Inter):** Tight tracking and heavy weights are used for headlines to create a sense of structural permanence and professional "weight." Large display sizes should use negative letter spacing to feel more cohesive.

**Body & Navigation (DM Sans):** The geometric nature of DM Sans provides a clean, modern contrast to the tight headings. Navigation elements are strictly **uppercase** with increased letter spacing for a rhythmic, architectural feel. 

**Call to Action:** All primary action text is **italicized** to convey a sense of motion and urgency, distinguishing interactive elements from static body text.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous outer margins to simulate the feel of a high-end editorial look.

- **Desktop:** 12-column grid with 24px gutters. Use 64px side margins to provide breathability.
- **Mobile:** 4-column grid with 16px gutters. Side margins are reduced to 20px.
- **Rhythm:** Vertical spacing between major sections should be aggressive (120px+) to emphasize the "studio" gallery feel. Content clusters use an 8px base unit for internal padding and stack spacing.

## Elevation & Depth
In a dark, high-contrast system, depth is achieved through **Tonal Layers** rather than traditional shadows.

- **Level 0 (Base):** Rich Black (`#0A0A0A`) for the main page background.
- **Level 1 (Surface):** Deep Grey (`#1A1A1A`) for cards, containers, and sections that need to feel slightly elevated.
- **Level 2 (Interaction):** High-opacity Vibrant Red strokes (1px) are used to indicate focus states and active borders.
- **Overlay:** Background blurs (20px radius) are used for navigation bars and modals to maintain context of the underlying content while providing a modern, glass-like finish without the "frost."

## Shapes
The shape language is a defining characteristic of this design system, using hyper-rounded corners to soften the aggressive high-contrast color palette.

- **Primary Elements:** All major UI containers, buttons, and input fields utilize a **26px corner radius**.
- **Media:** Portfolio thumbnails and video players should also adhere to the 26px radius to ensure a consistent visual silhouette throughout the site.
- **Small Elements:** Chips or tags may use a fully circular (pill) radius to distinguish them from structural components.

## Components
- **Buttons:** Primary buttons are solid Vibrant Red with White text. Secondary buttons use a White 1.5px border with transparent backgrounds. All button text is **italicized**.
- **Navigation:** Main menu items are uppercase DM Sans with a 1px Red underline that expands from the center on hover.
- **Input Fields:** Dark surfaces (`#1A1A1A`) with 26px rounded corners. The border turns Vibrant Red upon focus.
- **Cards:** Used for portfolio items. These should have 0px internal padding for the media, allowing the imagery to touch the 26px rounded edges. Text overlays use a bottom-up gradient for legibility.
- **Chips/Labels:** Small, uppercase tags used for categorization, featuring a 1px White border and high letter spacing.
- **CTAs:** Floating or fixed call-to-action sections should utilize the primary Vibrant Red background to demand immediate attention.