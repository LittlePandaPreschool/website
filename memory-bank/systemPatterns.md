# System Patterns: Little Panda Funnel Architecture

## Funnel Flow
The system is a simple, linear user flow designed for maximum conversion:

1.  **Traffic Source:** Instagram (Reels, Posts, Stories)
2.  **Call-to-Action (CTA):** A single, clear CTA ("Link in Bio") directs users to the landing page.
3.  **Landing Page:** A mobile-first, fast-loading static site built with SvelteKit. The site is component-based, with a master layout that includes a reusable header and footer.
4.  **Lead Capture:** Forms on the site capture user information. The forms use HTML5 validation to enforce constraints on email, phone number, and date of birth fields. The admissions form uses a client-side JavaScript function to handle form submissions. This function formats the "Desired Start Date" into a full sentence and creates a professional email template with a custom subject line and HTML body. The forms are processed by Netlify's built-in form handling.
5.  **Data Sink:** Form submissions are automatically captured by Netlify and can be configured to send email notifications.
6.  **Fulfillment:** The lead magnet (e-book) is delivered instantly via email.

## Animation Patterns
- **Dynamic Hero Section:** The hero section (`DynamicHero.svelte`) features a full-screen, Ken Burns-style animation that cycles through a series of high-quality images. The images slowly zoom and pan, creating a subtle and engaging sense of motion. The transitions between images are handled with a smooth fade effect.
- **Fade-in on Scroll:** Most sections and cards use a fade-in animation as the user scrolls down the page. This is implemented using the `data-fade` attribute and an Intersection Observer.
- **Hover Effects:** Interactive elements such as cards, buttons, and links have hover effects to provide visual feedback to the user. These are implemented using Tailwind CSS utility classes.

## Component Architecture
- **`DynamicHero.svelte`:** A self-contained, reusable component that encapsulates all the logic for the dynamic hero section, including the Ken Burns animation, image cycling, and responsive image loading.
- **`FadingImage.svelte`:** A reusable utility component that gracefully fades in an image once it's fully loaded, preventing any jarring "pop-in" effect.
- **`LocationCard.svelte`:** A reusable component for displaying campus information.

## Careers Page Architecture
- **Data-Driven Content:** The "Open Positions" section is dynamically generated from a data structure in the component's script. This makes it easy to add, remove, or modify job postings.
- **Auto-Selecting Form:** The "Apply Now" buttons are connected to the application form, so that clicking on a button automatically selects the corresponding position in the "Position Applying For" dropdown.
- **`JobCard.svelte`:** A reusable component for displaying job postings with salary and hours information in both English and Chinese. The card is styled to look like a physical card with a subtle shadow and hover effect.
