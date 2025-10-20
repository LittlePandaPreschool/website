<script>
  import { page } from '$app/stores';
  import "../app.css";
import Header from "$lib/components/layout/Header.svelte";
import Footer from "$lib/components/layout/Footer.svelte";
</script>

<svelte:head>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <link rel="stylesheet" href="/css/custom.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="bg-bg-main">
  <Header />

  <main class="mt-24">
    <slot />
  </main>

  <Footer />
</div>
