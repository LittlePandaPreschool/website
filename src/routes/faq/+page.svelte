<script lang="ts">
  import { t } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import zh from '$lib/locales/zh.json';
  let openItems: number[] = [];

  function toggle(index: number) {
    if (openItems.includes(index)) {
      openItems = openItems.filter(i => i !== index);
    } else {
      openItems = [...openItems, index];
    }
  }
  function expandAll() {
    const faqs = ($t('faq') as any).faqs;
    if (openItems.length === faqs.length) {
      openItems = [];
    } else {
      openItems = [...faqs.map((_: any, i: number) => i)];
    }
  }
</script>

<style lang="postcss">
    .accordion-content {
        font-size: 1.15rem; /* A bit larger than default */
        line-height: 1.8;   /* More space between lines */
    }
</style>

<main class="container mx-auto px-6 py-12">
    <h1 class="text-5xl font-bold text-center mb-16 text-text-main">{$t('faq.title')} <br><span class="text-4xl">{zh.faq.title}</span></h1>

    <!-- FAQ Section -->
    <section class="faq-page mb-16">
        <div class="container mx-auto">
            <div class="flex justify-between items-center mb-8">
                <button on:click={expandAll} class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105">
                    {openItems.length === ($t('faq') as any).faqs.length ? $t('faq.collapse') : $t('faq.expand')}
                    <br>
                    <span class="text-sm font-normal normal-case">{openItems.length === ($t('faq') as any).faqs.length ? zh.faq.collapse : zh.faq.expand}</span>
                </button>
            </div>
            <div class="accordion space-y-4">
                {#each ($t('faq') as any).faqs as faq, i}
                <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg shadow-lg">
                    <div class="accordion-item card p-4 rounded-lg bg-alt transform hover:scale-105 transition-transform duration-300" data-fade>
                        <button on:click={() => toggle(i)} class="accordion-header w-full text-left text-2xl font-semibold py-4 px-6 focus:outline-none {openItems.includes(i) ? 'active' : ''}">
                            <span class="flex justify-between items-center">
                                <span>
                                    {faq.question}
                                    <br>
                                    <span class="text-xl">{zh.faq.faqs[i].question}</span>
                                </span>
                                <span class="text-2xl font-light text-primary transform transition-transform duration-300 {openItems.includes(i) ? 'rotate-45' : ''}">+</span>
                            </span>
                        </button>
                    {#if openItems.includes(i)}
                    <div class="accordion-content text-lg leading-relaxed p-7 rounded-lg themed-content" style="opacity: 1;">
                        {@html faq.answer}
                        <br>
                        <span class="text-base">{@html zh.faq.faqs[i].answer}</span>
                    </div>
                    {/if}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>
