<script lang="ts">
  import { t } from 'svelte-i18n';
  import { chineseSubtext } from '$lib/data/chineseSubtext';
  import Timeline from '$lib/components/home/Timeline.svelte';
  import LocationCard from '$lib/components/home/LocationCard.svelte';
  import DynamicHero from '$lib/components/home/DynamicHero.svelte';
  import ImageCarousel from '$lib/components/ui/ImageCarousel.svelte';
  import { locations } from '$lib/data/locations';
  import { siteConfig } from '$lib/data/siteConfig';
  export let data;
  const { allGalleryImages } = data;

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validate phone number
    const phone = formData.get('Phone Number') as string;
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid US phone number.');
      return;
    }

    await fetch('/', {
      method: 'POST',
      body: formData,
    });

    window.location.href = '/thank-you';
  }
</script>

<DynamicHero />

<!-- Programs Section -->
<section id="programs" class="py-20">
    <div class="container mx-auto px-6">
    <!-- Our Blueprint for Brilliance Section -->
    <section class="py-20 bg-secondary text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-4">{$t('home.blueprint.title')}<br><span class="text-4xl">{$t('home.blueprint.subtitle')}</span></h2>
            <p class="text-xl mb-12 max-w-3xl mx-auto">{$t('home.blueprint.description')}<br><span class="text-lg">{$t('home.blueprint.description_zh')}</span></p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {#each Array(4) as _, i}
                    <div class="p-8 transform transition-transform duration-300 hover:scale-105 hover:bg-green-700 rounded-lg" data-fade>
                        <i class="fas {['fa-search', 'fa-language', 'fa-child', 'fa-heartbeat'][i]} text-4xl text-primary mb-4"></i>
                        <h3 class="text-2xl font-bold mb-3 text-white">{$t(`home.blueprint.items.${i}.title`)}<br><span class="text-xl">{$t(`home.blueprint.items.${i}.title_zh`)}</span></h3>
                        <p class="text-lg">{$t(`home.blueprint.items.${i}.description`)}<br><span class="text-base">{$t(`home.blueprint.items.${i}.description_zh`)}</span></p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="py-20 bg-alt">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-4 text-center text-secondary">{$t('home.gallery.title')}<br><span class="text-3xl">{$t('home.gallery.subtitle')}</span></h2>
            <p class="text-xl text-center text-main mb-12">{$t('home.gallery.description')}<br><span class="text-lg">{$t('home.gallery.description_zh')}</span></p>
            <ImageCarousel images={allGalleryImages} />
        </div>
    </section>

        
    </div>
</section>

<!-- Locations Section -->
<section class="py-20 bg-main">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-5xl font-bold mb-4 text-secondary">{$t('home.campuses.title')}<br><span class="text-4xl">{chineseSubtext.home.campuses.title}</span></h2>
        <p class="text-xl text-main mb-12 max-w-3xl mx-auto">{$t('home.campuses.description')}<br><span class="text-lg">{chineseSubtext.home.campuses.description}</span></p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {#each locations as location}
                <LocationCard {location} />
            {/each}
        </div>
    </div>
</section>

<!-- Timeline Section -->
<Timeline />

<!-- Form Section -->
<section id="form" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Join the Little Panda Family<br><span class="text-3xl">{chineseSubtext.home.join_family.title}</span></h2>
        <p class="text-xl text-gray-600 mb-12">We're building a loving and supportive community for your child. Take the first step in joining our family by filling out the form below.<br><span class="text-lg">{chineseSubtext.home.join_family.description}</span></p>
        <div class="max-w-2xl mx-auto">
            <form name="contact" method="POST" data-netlify="true" action="/thank-you" class="bg-white p-8 rounded-lg shadow-lg text-left" on:submit|preventDefault={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="parent-name" class="sr-only">{$t('home.form.parentName_label')}</label>
                        <input id="parent-name" type="text" name="Parent's Name" placeholder={$t('home.form.parentName')} class="form-input" required>
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">{$t('home.form.email_label')}</label>
                        <input id="email-address" type="email" name={$t('home.form.email_name')} placeholder={$t('home.form.email')} class="form-input" required>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="phone-number" class="sr-only">{$t('home.form.phone_label')}</label>
                        <input id="phone-number" type="tel" name="Phone Number" placeholder={$t('home.form.phone')} class="form-input" pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number." required>
                    </div>
                    <div>
                        <label for="child-dob" class="sr-only">{$t('home.form.childDob_label')}</label>
                        <input id="child-dob" type="text" name="Child's DOB" placeholder={$t('home.form.childDob')} class="form-input" on:focus={(e) => (e.target as HTMLInputElement).type = 'date'} on:blur={(e) => (e.target as HTMLInputElement).type = 'text'} min={new Date(new Date().setFullYear(new Date().getFullYear() - 7)).toISOString().split('T')[0]} max={new Date().toISOString().split('T')[0]} required>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="message" class="sr-only">{$t('home.form.message_label')}</label>
                    <textarea id="message" name="Message" placeholder={$t('home.form.message')} rows="5" class="form-textarea" required></textarea>
                </div>
                <button type="submit" class="w-full btn-primary text-lg font-bold uppercase tracking-wider transform transition-transform duration-300 hover:scale-105 focus:scale-105">
                    {$t('home.form.submit')} <br><span class="text-sm font-normal normal-case">{$t('home.form.submit_chinese')}</span>
                </button>
            </form>
        </div>
    </div>
</section>
