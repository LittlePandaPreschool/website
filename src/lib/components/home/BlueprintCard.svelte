<script lang="ts">
  export let icon: string;
  export let title: string;
  export let description: string;
  export let description_chinese: string;
</script>

<div class="bg-alt p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-text-main" data-fade>
  <i class="fas {icon} text-4xl text-primary mb-4"></i>
  <h3 class="text-2xl font-bold mb-3 text-primary">{title}<br><span class="text-xl">{title}</span></h3>
  <p class="text-lg">{description}<br><span class="text-base">{description_chinese}</span></p>
</div>
