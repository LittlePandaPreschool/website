<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import PandaButton from './PandaButton.svelte';
  export let program: any;

  let selectedOption = program.options[0];
</script>

<div class="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
  <div class="flex-grow">
    <h3 class="text-2xl font-bold text-secondary mb-2">{program.program[$locale || 'en']}</h3>
    <p class="text-lg text-main mb-4">{program.program.zh}</p>
    <p class="text-lg mb-6">{program.age[$locale || 'en']} <br><span class="text-base">{program.age.zh}</span></p>
  </div>

  <div class="flex justify-center items-center mb-6 space-x-[-2em]">
    {#each program.options as option}
      <PandaButton
        selected={selectedOption === option}
        on:click={() => (selectedOption = option)}
      >
        {option.label[$locale || 'en']} <br><span class="text-sm">{option.label.zh}</span>
      </PandaButton>
    {/each}
  </div>

  <div class="text-center mt-auto">
    <p class="text-lg text-main">{$_('admissions.tiers.pricing.monthly_tuition')} <br><span class="text-base">{$_('admissions.tiers.pricing.monthly_tuition_zh')}</span></p>
    <p class="text-4xl font-bold text-main">${selectedOption.price.toLocaleString()}</p>
    <p class="text-lg text-main">{$_('admissions.tiers.pricing.per_month')}</p>
  </div>
</div>
