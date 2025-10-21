<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  const imageModules = import.meta.glob('/static/img/hero/medium/*.{png,jpg,jpeg,gif,webp}');
  const allImages = Object.keys(imageModules).map(path => {
    const mediumUrl = path.replace('/static', '');
    const smallUrl = mediumUrl.replace('/medium/', '/small/');
    return {
      default: mediumUrl,
      small: smallUrl,
      medium: mediumUrl
    };
  });

  let currentImageIndex = 0;
  let interval: number;

  function getNextImage() {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
  }

  onMount(() => {
    interval = setInterval(getNextImage, 7000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="relative h-[90vh] w-full overflow-hidden bg-black">
  {#key currentImageIndex}
    <div
      class="absolute inset-0 h-full w-full bg-cover bg-center"
      style="background-image: url({allImages[currentImageIndex].default}); background-image: -webkit-image-set(url({allImages[currentImageIndex].small}) 1x, url({allImages[currentImageIndex].medium}) 2x, url({allImages[currentImageIndex].default}) 3x); background-image: image-set(url({allImages[currentImageIndex].small}) 1x, url({allImages[currentImageIndex].medium}) 2x, url({allImages[currentImageIndex].default}) 3x);"
      in:fade={{ duration: 2500, easing: cubicInOut }}
      out:fade={{ duration: 2500, easing: cubicInOut }}
    >
      <div class="ken-burns"></div>
    </div>
  {/key}

  <div class="absolute inset-0 bg-black opacity-50"></div>

  <div class="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
    <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4 uppercase tracking-wider">
      Unleash Potential.
      <span class="block text-3xl md:text-5xl font-light mt-2">释放潜能</span>
    </h1>
    <p class="text-lg md:text-2xl mb-8 font-light">
      Start Their Journey.
      <span class="block text-base md:text-xl mt-2">从这里开始他们的旅程</span>
    </p>
    <a href="/admissions" class="btn-primary py-3 px-10 text-lg font-bold uppercase tracking-wider flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105">
      <span>Join Us</span>
      <span class="text-sm font-normal normal-case">加入我们</span>
    </a>
  </div>
</section>

<style>
  .ken-burns {
    animation: kenburns 20s ease-out infinite;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  @keyframes kenburns {
    0% {
      transform: scale(1) translate(0, 0);
    }
    50% {
      transform: scale(1.2) translate(-5%, 5%);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }
</style>
