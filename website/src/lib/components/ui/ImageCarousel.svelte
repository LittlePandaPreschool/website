<script lang="ts">
  export let images: string[];
</script>

<div class="carousel-container h-[1000px]">
  <div class="carousel-track">
    <div class="carousel-column up">
      {#each images.slice(0, 7) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
      {#each images.slice(0, 7) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
    </div>
    <div class="carousel-column up">
      {#each images.slice(7, 14) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
      {#each images.slice(7, 14) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
    </div>
    <div class="carousel-column down">
      {#each images.slice(14, 21) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
      {#each images.slice(14, 21) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
    </div>
    <div class="carousel-column down">
      {#each images.slice(21, 26) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
      {#each images.slice(21, 26) as src, i}
        <div class="carousel-slide"><img {src} alt="Gallery image {i + 1}" class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110" /></div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .carousel-container {
    overflow: hidden;
    width: 100%;
  }

  .carousel-track {
    display: flex;
    height: 100%;
  }

  .carousel-column {
    display: flex;
    flex-direction: column;
    height: 200%; /* Double height for seamless loop */
    width: 25%;
    padding: 0 0.5rem;
  }

  .carousel-column.up {
    animation: scroll-up 90s linear infinite;
  }

  .carousel-column.down {
    animation: scroll-down 90s linear infinite;
  }

  .carousel-slide {
    flex: 0 0 auto;
    padding: 0.5rem 0;
  }

  .carousel-image {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }

  @keyframes scroll-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes scroll-down {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
