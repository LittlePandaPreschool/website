<script lang="ts">
  export let images: { default: string; small: string; medium: string }[];

  const numColumns = 4;
  const columns = Array.from({ length: numColumns }, () => []);
  const base = Math.floor(images.length / numColumns);
  const remainder = images.length % numColumns;

  let imageIndex = 0;
  for (let i = 0; i < numColumns; i++) {
    const numImages = base + (i < remainder ? 1 : 0);
    for (let j = 0; j < numImages; j++) {
      columns[i].push(images[imageIndex]);
      imageIndex++;
    }
  }
</script>

<div class="carousel-container h-[1000px]">
  <div class="carousel-track" style="width: 100%;">
    {#each columns as column, i}
      <div class="carousel-column {i % 2 === 0 ? 'up' : 'down'}">
        {#each column as image, j}
          <div class="carousel-slide">
            <img
              src={image.medium}
              srcset={`${image.small} 640w, ${image.medium} 1280w`}
              alt="Gallery image {i * 4 + j + 1}"
              class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110"
              loading="lazy"
            />
          </div>
        {/each}
        {#each column as image, j}
          <div class="carousel-slide">
            <img
              src={image.medium}
              srcset={`${image.small} 640w, ${image.medium} 1280w`}
              alt="Gallery image {i * 4 + j + 1}"
              class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
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
    flex-shrink: 0;
    flex-basis: 25%;
    padding: 0 0.5rem;
  }

  .carousel-column {
    animation: scroll 90s linear infinite;
  }

  .carousel-column.down {
    animation-direction: reverse;
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

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
</style>
