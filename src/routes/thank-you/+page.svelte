<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<main class="container mx-auto px-6 py-12 text-center">
    <h1 class="text-4xl font-bold text-text-main mb-4">{$t('thank_you.title')}</h1>
    <p class="text-xl text-text-main">{$t('thank_you.message')}</p>
    <a href="/" class="btn-primary mt-8 inline-block">{$t('thank_you.return')}</a>
</main>
