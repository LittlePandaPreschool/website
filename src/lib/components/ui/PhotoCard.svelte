<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string;
</script>

<div class="bg-secondary rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-fade>
  <img {src} {alt} class="w-full h-64 object-cover">
  <div class="p-4">
    <p class="text-center text-text-light">{caption}</p>
  </div>
</div>
