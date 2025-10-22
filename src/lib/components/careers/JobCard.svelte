<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let job;
  const dispatch = createEventDispatcher();
</script>

<div class="card bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 p-6 rounded-lg transform transition-transform duration-300" data-fade>
  <h3 class="text-2xl font-bold mb-2">{job.title}<br><span class="text-xl">{job.chinese_title}</span></h3>
  <p class="mb-4">{job.description}<br><span class="text-sm">{job.chinese_description}</span></p>
  <div class="flex justify-between items-center mb-4">
    <p class="text-lg font-semibold text-green-600">{job.salary}</p>
    <p class="text-lg font-semibold text-gray-600">{job.hours}<br><span class="text-sm">{job.chinese_hours}</span></p>
  </div>
  <p class="font-bold">Qualifications:<br><span class="text-sm">资格</span></p>
  <ul class="list-disc list-inside mb-4">
    {#each job.qualifications as qualification, i}
      <li>{qualification}<br><span class="text-sm">{job.chinese_qualifications[i]}</span></li>
    {/each}
  </ul>
  <a href="#apply-form" on:click={() => dispatch('apply')} class="text-primary hover:opacity-80 font-bold mt-4 inline-block">Apply Now &rarr;</a>
</div>
