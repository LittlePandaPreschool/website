<script lang="ts">
  import { t, locale, locales } from 'svelte-i18n';
  import { page } from '$app/stores';
  let isOpen = false;

  const languageNames: { [key: string]: string } = {
    en: 'English',
    es: 'Español',
    ja: '日本語',
    ko: '한국어',
    hi: 'हिन्दी',
    tl: 'Tagalog',
    vi: 'Tiếng Việt',
    ar: 'العربية',
    hy: 'Հայերեն',
    ru: 'Русский',
  };

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function handleLocaleChange(event: Event) {
    const newLocale = (event.target as HTMLSelectElement).value;
    locale.set(newLocale);
  }
</script>

<!-- Header -->
<header class="bg-bg-alt shadow-md fixed top-0 left-0 right-0 z-50">
  <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/">
        <img src="/img/logo.jpg" alt="Little Panda Logo" class="h-28 w-auto">
      </a>
      <div class="md:hidden">
        <button on:click={toggleMenu} aria-label="Open main menu" class="text-gray-800 focus:outline-none transform transition-transform duration-300 hover:scale-110 focus:scale-110">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex space-x-8 items-center nav-links">
          <a href="/" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/'} class:text-gray-800={$page.url.pathname !== '/'}>{$t('header.home')}</a>
          <a href="/admissions" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/admissions'} class:text-gray-800={$page.url.pathname !== '/admissions'}>{$t('header.admissions')}</a>
          <a href="/faq" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/faq'} class:text-gray-800={$page.url.pathname !== '/faq'}>{$t('header.faq')}</a>
          <a href="/careers" class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/careers'} class:text-gray-800={$page.url.pathname !== '/careers'}>{$t('header.careers')}</a>
          <a href="/admissions" class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105">{$t('header.enroll')}</a>
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <select on:change={handleLocaleChange} bind:value={$locale} class="text-xl hover:text-primary bg-bg-alt border-none focus:outline-none">
              {#each $locales as loc}
                <option value={loc}>{languageNames[loc] || loc}</option>
              {/each}
            </select>
          </div>
      </div>
      {#if isOpen}
      <div class="md:hidden absolute top-full left-0 w-full bg-bg-alt shadow-md">
        <div class="flex flex-col items-center space-y-4 py-4">
          <a href="/" on:click={toggleMenu} class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/'} class:text-gray-800={$page.url.pathname !== '/'}>{$t('header.home')}</a>
          <a href="/admissions" on:click={toggleMenu} class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/admissions'} class:text-gray-800={$page.url.pathname !== '/admissions'}>{$t('header.admissions')}</a>
          <a href="/faq" on:click={toggleMenu} class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/faq'} class:text-gray-800={$page.url.pathname !== '/faq'}>{$t('header.faq')}</a>
          <a href="/careers" on:click={toggleMenu} class="text-xl hover:text-primary" class:text-primary={$page.url.pathname === '/careers'} class:text-gray-800={$page.url.pathname !== '/careers'}>{$t('header.careers')}</a>
          <a href="/admissions" on:click={toggleMenu} class="btn-primary">{$t('header.enroll')}</a>
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <select on:change={handleLocaleChange} bind:value={$locale} class="text-xl hover:text-primary bg-bg-alt border-none focus:outline-none">
              {#each $locales as loc}
                <option value={loc}>{languageNames[loc] || loc}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      {/if}
  </nav>
</header>
