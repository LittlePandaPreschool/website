# System Patterns: Little Panda Funnel Architecture

## Funnel Flow
The system is a simple, linear user flow designed for maximum conversion:

1.  **Traffic Source:** Instagram (Reels, Posts, Stories)
2.  **Call-to-Action (CTA):** A single, clear CTA ("Link in Bio") directs users to the landing page.
3.  **Landing Page:** A mobile-first, fast-loading static site built with SvelteKit. The site is component-based, with a master layout that includes a reusable header and footer.
4.  **Lead Capture:** A simple form with 4 required fields captures user information in exchange for a valuable lead magnet. The form is processed by Netlify Forms.
5.  **Data Sink:** Form submissions are automatically captured by Netlify and sent to the account email. They can also be configured to forward to a CRM or spreadsheet via webhooks.
6.  **Fulfillment:** The lead magnet (e-book) is delivered instantly via email.

## Animation Patterns
- **Dynamic Hero Section:** The hero section is a dynamic, engaging photo wall that features a masonry-style grid of images in constant, subtle motion. Individual images within the grid update at random, staggered intervals, and the hero section periodically transitions to a single, full-screen "feature" image. All animations are designed to be slow, smooth, and elegant.
- **Fade-in on Scroll:** Most sections and cards use a fade-in animation as the user scrolls down the page. This is implemented using the `data-fade` attribute and an Intersection Observer.
- **Hover Effects:** Interactive elements such as cards, buttons, and links have hover effects to provide visual feedback to the user. These are implemented using Tailwind CSS utility classes.

## Component Architecture
- **`PhotoWallHero.svelte`:** A self-contained, reusable component that encapsulates all the logic for the dynamic hero section, including the scrolling grid, staggered animations, and the feature image transition.
- **`FadingImage.svelte`:** A reusable utility component that gracefully fades in an image once it's fully loaded, preventing any jarring "pop-in" effect.
- **`LocationCard.svelte`:** A reusable component for displaying campus information.

## Careers Page Architecture
- **Data-Driven Content:** The "Open Positions" section is dynamically generated from a data structure in the component's script. This makes it easy to add, remove, or modify job postings.
- **Auto-Selecting Form:** The "Apply Now" buttons are connected to the application form, so that clicking on a button automatically selects the corresponding position in the "Position Applying For" dropdown.
