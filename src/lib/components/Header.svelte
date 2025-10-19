<script lang="ts">
  import { page } from '$app/stores';
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<!-- Header -->
<header class="bg-bg-alt shadow-md fixed top-0 left-0 right-0 z-50">
  <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-5xl font-bold text-primary flex items-center logo">
          <lottie-player src="/panda-animation.json" background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay></lottie-player>
          <div class="logo-text">
              <span>Little</span>
              <span>Panda</span>
          </div>
      </a>
      <div class="md:hidden">
        <button on:click={toggleMenu} class="text-gray-800 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex space-x-8 items-center nav-links">
          <a href="/" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/'} class:text-gray-800={$page.url.pathname !== '/'}>Home</a>
          <a href="/admissions" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/admissions'} class:text-gray-800={$page.url.pathname !== '/admissions'}>Admissions</a>
          <a href="/faq" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/faq'} class:text-gray-800={$page.url.pathname !== '/faq'}>FAQ</a>
          <a href="/careers" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/careers'} class:text-gray-800={$page.url.pathname !== '/careers'}>Careers</a>
          <a href="/admissions" class="btn-primary">Enroll Now</a>
      </div>
      {#if isOpen}
      <div class="md:hidden absolute top-full left-0 w-full bg-bg-alt shadow-md">
        <div class="flex flex-col items-center space-y-4 py-4">
          <a href="/" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/'} class:text-gray-800={$page.url.pathname !== '/'}>Home</a>
          <a href="/admissions" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/admissions'} class:text-gray-800={$page.url.pathname !== '/admissions'}>Admissions</a>
          <a href="/faq" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/faq'} class:text-gray-800={$page.url.pathname !== '/faq'}>FAQ</a>
          <a href="/careers" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/careers'} class:text-gray-800={$page.url.pathname !== '/careers'}>Careers</a>
          <a href="/admissions" class="btn-primary">Enroll Now</a>
        </div>
      </div>
      {/if}
  </nav>
</header>
