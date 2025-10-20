<script lang="ts">
  export let location: {
    name: string;
    name_chinese: string;
    ages: string;
    ages_chinese: string;
    address: string;
    tourLink: string;
    enrollLink: string;
    status?: string;
    status_chinese?: string;
    icon: string;
  };
</script>

<div class="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105" data-fade>
  <div>
    <h3 class="text-2xl font-bold mb-3 text-primary flex items-center justify-center">
      <i class="fas {location.icon} mr-3"></i>
      {location.name}
    </h3>
    <h4 class="text-xl font-bold mb-3 text-primary">{location.name_chinese}</h4>
    <p class="text-gray-600 mb-2">{location.ages}<br><span class="text-sm">{location.ages_chinese}</span></p>
    <p class="text-gray-600 mb-4">{location.address}</p>
  </div>
  <div class="mt-6">
    {#if location.status}
      <p class="text-red-500 font-bold mb-4">{location.status}<br><span class="text-sm">{location.status_chinese}</span></p>
      <a href={location.tourLink} class="text-gray-800 font-bold hover:underline">
        Request Information<br><span class="text-sm font-normal">请求信息</span>
      </a>
    {:else}
      <div class="flex flex-col items-center space-y-4">
        <a href={location.tourLink} class="text-gray-800 font-bold hover:underline">
          Request a Tour<br><span class="text-sm font-normal">请求参观</span>
        </a>
        <a href={location.enrollLink} class="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transform transition-transform duration-300 hover:scale-105 focus:scale-105">
          Enroll Now<br><span class="text-sm font-normal">立即注册</span>
        </a>
      </div>
    {/if}
  </div>
</div>
