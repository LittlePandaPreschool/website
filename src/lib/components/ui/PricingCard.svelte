<script lang="ts">
  import { t } from 'svelte-i18n';
  import PandaButton from './PandaButton.svelte';
  import zh from '$lib/locales/zh.json';

  export let program: string;
  export let age: string;
  export let options: { days: number; price: number; label: string }[];

  let selectedOption = options[0];
</script>

<div class="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
  <div class="flex-grow text-center">
    <h3 class="text-2xl font-bold text-secondary mb-2">
      {$t(program)}<br />
      <span class="text-xl font-normal">{(zh.admissions.tiers.pricing[program.split('.')[3] as keyof typeof zh.admissions.tiers.pricing] as { program: string }).program}</span>
    </h3>
    <p class="text-lg text-main mb-6">
      {$t(age)}<br />
      <span class="text-base">{(zh.admissions.tiers.pricing[program.split('.')[3] as keyof typeof zh.admissions.tiers.pricing] as { age: string }).age}</span>
    </p>
  </div>

  <div class="flex justify-center items-center mb-6 space-x-[-2em]">
    {#each options as option}
      <PandaButton
        selected={selectedOption === option}
        on:click={() => (selectedOption = option)}
      >
        {$t(option.label)}
        <br />
        <span class="text-sm font-normal">{zh.admissions.tiers.pricing.days[option.label.split('.')[4] as keyof typeof zh.admissions.tiers.pricing.days]}</span>
      </PandaButton>
    {/each}
  </div>

  <div class="text-center mt-auto">
    <p class="text-lg text-main">{$t('admissions.tiers.pricing.monthly_tuition')}<br><span class="text-base">{zh.admissions.tiers.pricing.monthly_tuition}</span></p>
    <p class="text-4xl font-bold text-main">${selectedOption.price.toLocaleString()}</p>
    <p class="text-lg text-main">{$t('admissions.tiers.pricing.per_month')}</p>
  </div>
</div>
