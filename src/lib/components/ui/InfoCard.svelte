<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="bg-primary text-white rounded-lg shadow-lg p-8 h-full text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
  <h4 class="text-2xl font-bold mb-2">{title}<br><span class="text-xl">{subtitle}</span></h4>
  <div class="text-lg">
    <slot />
  </div>
</div>
