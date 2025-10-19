<script lang="ts">
  import { onMount } from 'svelte';

  let items = [
    {
      time: '9:00 - 9:30 AM',
      title: 'Arrival and Morning Meeting',
      description: '学生到达和早会',
      icon: 'fas fa-sun',
      iconColor: 'text-yellow-400',
      dotColor: 'bg-yellow-400'
    },
    {
      time: '9:30 - 10:00 AM',
      title: 'Snack Time',
      description: '点心时间',
      icon: 'fas fa-cookie-bite',
      iconColor: 'text-pink-400',
      dotColor: 'bg-pink-400'
    },
    {
      time: '10:00 - 10:30 AM',
      title: 'Project',
      description: '项目活动',
      icon: 'fas fa-paint-brush',
      iconColor: 'text-green-400',
      dotColor: 'bg-green-400'
    },
    {
      time: '10:30 - 11:30 AM',
      title: 'Outdoor Exploration',
      description: '户外活动',
      icon: 'fas fa-tree',
      iconColor: 'text-blue-400',
      dotColor: 'bg-blue-400'
    },
    {
      time: '11:30 AM - 12:30 PM',
      title: 'Lunch',
      description: '午餐',
      icon: 'fas fa-utensils',
      iconColor: 'text-orange-400',
      dotColor: 'bg-orange-400'
    },
    {
      time: '12:30 - 1:00 PM',
      title: 'Story Time/Fine motor/Dramatic Play',
      description: '故事/小手肌肉/扮演游戏',
      icon: 'fas fa-book-open',
      iconColor: 'text-indigo-400',
      dotColor: 'bg-indigo-400'
    },
    {
      time: '1:00 - 2:30 PM',
      title: 'Nap Time',
      description: '午睡时间',
      icon: 'fas fa-bed',
      iconColor: 'text-purple-400',
      dotColor: 'bg-purple-400'
    },
    {
      time: '2:30 - 3:00 PM',
      title: 'Snack',
      description: '点心',
      icon: 'fas fa-cookie-bite',
      iconColor: 'text-pink-400',
      dotColor: 'bg-pink-400'
    },
    {
      time: '3:00 - 3:30 PM',
      title: 'Departure',
      description: '离校',
      icon: 'fas fa-flag-checkered',
      iconColor: 'text-red-400',
      dotColor: 'bg-red-400'
    }
  ];

  let elements: (HTMLDivElement | null)[] = [];

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  });
</script>


<section class="py-20 bg-bg-main">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-text-main mb-12 text-center">A Day at Little Panda</h2>
    <div class="relative max-w-2xl mx-auto">
      <div class="border-l-4 border-secondary absolute h-full top-0 left-3.5"></div>
      {#each items as item, i}
        <div class="mb-8 flex items-center w-full timeline-item transform hover:scale-105 transition-transform duration-300" bind:this={elements[i]}>
          <div class="z-20 flex-shrink-0">
            <div class="h-8 w-8 bg-primary rounded-full"></div>
          </div>
          <div class="bg-secondary rounded-lg shadow-md ml-8 p-6 w-full">
            <p class="text-text-light text-sm mb-2">{item.time}</p>
            <h3 class="flex items-center font-bold text-text-main text-xl mb-2">
              <i class="{item.icon} text-primary mr-3"></i>
              {item.title}
            </h3>
            <p class="text-text-light">{item.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
</style>
