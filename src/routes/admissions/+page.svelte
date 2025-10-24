<script lang="ts">
  import { t } from 'svelte-i18n';
  import { chineseSubtext } from '$lib/data/chineseSubtext';
  import { onMount } from 'svelte';
  import { fade } from '$lib/actions/fade';
  import PricingCard from '$lib/components/ui/PricingCard.svelte';
  import InfoCard from '$lib/components/ui/InfoCard.svelte';
  import { pricing } from '$lib/data/pricing';

  let selectedAgeGroup = '';
  let selectedLocation = '';
  let selectedStartDate = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Polish start_date
    let startDate = '';
    switch (formData.get('start_date')) {
      case 'asap':
        startDate = 'This family is looking to start as soon as possible.';
        break;
      case '1-3_months':
        startDate = 'This family is looking to start in about 1-3 months.';
        break;
      case '3-6_months':
        startDate = 'This family is looking to start in about 3-6 months.';
        break;
      case 'exploring':
        startDate = 'This family is just exploring their options.';
        break;
    }
    formData.set('start_date', startDate);

    // Polish age_group
    let ageGroup = '';
    switch (formData.get('age_group')) {
      case 'infant':
        ageGroup = 'Infant (0-18 mos)';
        break;
      case 'toddler':
        ageGroup = 'Toddler (18 mos - 3 yrs)';
        break;
      case 'preschool':
        ageGroup = 'Preschool (3-5 yrs)';
        break;
    }
    formData.set('age_group', ageGroup);

    // Polish location
    let location = '';
    switch (formData.get('location')) {
      case 'granada':
        location = 'Granada Campus';
        break;
      case 'sf_state':
        location = "Children's Campus at SF State";
        break;
      case 'ocean_ave':
        location = 'Ocean Avenue Campus (Coming Soon)';
        break;
    }
    formData.set('location', location);

    const studentName = formData.get('student-name');
    const subject = `New Admission Inquiry: ${studentName}`;
    formData.set('subject', subject);

    // Validate phone number
    const phone = formData.get('phone') as string;
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid US phone number.');
      return;
    }

    await fetch('?/', {
      method: 'POST',
      body: formData,
    });

    window.location.href = '/thank-you';
  }

  onMount(() => {
    const sections = document.querySelectorAll('[data-fade]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  });
</script>

<main class="admissions-page">
    <section class="relative text-charcoal text-center py-24 md:py-32 bg-gradient-to-b from-bg-alt to-primary-light">
        <div class="relative z-10 max-w-4xl mx-auto px-6">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">{$t('admissions.title')}<br><span class="text-3xl md:text-5xl font-light">{chineseSubtext.admissions.title}</span></h1>
            <p class="text-lg md:text-2xl font-light">{$t('admissions.description')}<br><span class="text-base md:text-xl mt-2">{chineseSubtext.admissions.description}</span></p>
        </div>
    </section>

    <div class="container mx-auto px-6 py-12">

    <section class="mb-16 fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">{$t('admissions.journey.title')} <br><span class="text-3xl">{chineseSubtext.admissions.journey.title}</span></h3>
        <div class="relative">
            <div class="journey-line"></div>
            {#each Array(4) as _, i}
            <div class="journey-step">
                <div class="journey-icon">{i + 1}</div>
                <div class="journey-content">
                    <h4 class="text-2xl font-bold mb-2">{$t(`admissions.journey.steps.${i}.title`)} <br><span class="text-xl">{chineseSubtext.admissions.journey.steps[i].title}</span></h4>
                    <p class="text-lg">{$t(`admissions.journey.steps.${i}.description`)}<br><span class="text-base">{chineseSubtext.admissions.journey.steps[i].description}</span></p>
                </div>
            </div>
            {/each}
        </div>
    </section>

    <section class="mb-16 fade-in-section bg-primary text-white rounded-2xl p-8" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center font-sans">{$t('admissions.tiers.title')} <br><span class="text-3xl">{chineseSubtext.admissions.tiers.title}</span></h3>
        <div class="mb-12">
            <InfoCard title={$t('admissions.tiers.flexible.title')} subtitle={chineseSubtext.admissions.tiers.flexible.title}>
                <p>{$t('admissions.tiers.flexible.description')}<br><span class="text-lg">{chineseSubtext.admissions.tiers.flexible.description}</span></p>
            </InfoCard>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            {#each pricing as program}
                <div class="bg-white text-text-main rounded-lg shadow-lg p-8">
                    <PricingCard {program} />
                </div>
            {/each}
        </div>
        <div class="mt-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="md:col-span-2">
                    <InfoCard title={$t('admissions.tiers.extended.title')} subtitle={chineseSubtext.admissions.tiers.extended.title}>
                        <p>{$t('admissions.tiers.extended.description')}</p>
                        <p class="mt-2">{chineseSubtext.admissions.tiers.extended.description}</p>
                    </InfoCard>
                </div>
                <InfoCard title={$t('admissions.tiers.am.title')} subtitle={chineseSubtext.admissions.tiers.am.title}>
                    <p>{$t('admissions.tiers.am.time')}</p>
                    <p class="font-bold mt-2">{$t('admissions.tiers.am.price')}<br>{chineseSubtext.admissions.tiers.am.price}</p>
                </InfoCard>
                <InfoCard title={$t('admissions.tiers.pm.title')} subtitle={chineseSubtext.admissions.tiers.pm.title}>
                    <p>{$t('admissions.tiers.pm.time')}</p>
                    <p class="font-bold mt-2">{$t('admissions.tiers.pm.price')}<br>{chineseSubtext.admissions.tiers.pm.price}</p>
                </InfoCard>
                <div class="md:col-span-2">
                    <InfoCard title={$t('admissions.tiers.activities.title')} subtitle={chineseSubtext.admissions.tiers.activities.title}>
                        <p>{$t('admissions.tiers.activities.description')}</p>
                        <p class="mt-2">{chineseSubtext.admissions.tiers.activities.description}</p>
                    </InfoCard>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-16 p-8 rounded-2xl shadow-lg glass-effect fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">{$t('admissions.form.title')} <br><span class="text-3xl">{chineseSubtext.admissions.form.title}</span></h3>
        <p class="text-xl mb-6 text-center text-text-main">{$t('admissions.form.required')} <br><span class="text-lg">{chineseSubtext.admissions.form.required}</span></p>
        <form class="max-w-2xl mx-auto" name="admissions" method="POST" data-netlify="true" action="?/" on:submit|preventDefault={handleSubmit}>
            <input type="hidden" name="form-name" value="admissions" />
            <div class="space-y-12">

                <!-- Parent/Guardian Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">{$t('admissions.form.parent_info.title')} <br><span class="text-xl">{chineseSubtext.admissions.form.parent_info.title}</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="name" class="block text-xl mb-2">{$t('admissions.form.parent_info.name')} <br><span class="text-lg">{chineseSubtext.admissions.form.parent_info.name}</span></label>
                            <input id="name" name="name" type="text" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="block text-xl mb-2">{$t('admissions.form.parent_info.email')} <br><span class="text-lg">{chineseSubtext.admissions.form.parent_info.email}</span></label>
                            <input id="email" name="email" type="email" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="block text-xl mb-2">{$t('admissions.form.parent_info.phone')} <br><span class="text-lg">{chineseSubtext.admissions.form.parent_info.phone}</span></label>
                            <input id="phone" name="phone" type="tel" class="form-input w-full" required pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number.">
                        </div>
                    </div>
                </div>

                <!-- Child's Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">{$t('admissions.form.child_info.title')} <br><span class="text-xl">{chineseSubtext.admissions.form.child_info.title}</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="student-name" class="block text-xl mb-2">{$t('admissions.form.child_info.name')} <span class="text-lg">{chineseSubtext.admissions.form.child_info.name}</span></label>
                            <input id="student-name" name="student-name" type="text" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="student-birthday" class="block text-xl mb-2">{$t('admissions.form.child_info.birthday')} <span class="text-lg">{chineseSubtext.admissions.form.child_info.birthday}</span></label>
                            <input id="student-birthday" name="student-birthday" type="date" class="form-input w-full" required min={new Date(new Date().setFullYear(new Date().getFullYear() - 7)).toISOString().split('T')[0]} max={new Date().toISOString().split('T')[0]}>
                        </div>
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">{$t('admissions.form.child_info.age_group.title')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.age_group.title}</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'infant'}">
                                    <input type="radio" name="age_group" value="infant" class="hidden" bind:group="{selectedAgeGroup}" required>
                                    <span class="text-xl">{$t('admissions.form.child_info.age_group.infant')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.age_group.infant}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'toddler'}">
                                    <input type="radio" name="age_group" value="toddler" class="hidden" bind:group="{selectedAgeGroup}">
                                    <span class="text-xl">{$t('admissions.form.child_info.age_group.toddler')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.age_group.toddler}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'preschool'}">
                                    <input type="radio" name="age_group" value="preschool" class="hidden" bind:group="{selectedAgeGroup}">
                                    <span class="text-xl">{$t('admissions.form.child_info.age_group.preschool')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.age_group.preschool}</span></span>
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">{$t('admissions.form.child_info.location.title')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.location.title}</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedLocation === 'granada'}">
                                    <input type="radio" name="location" value="granada" class="hidden" bind:group="{selectedLocation}" required>
                                    <span class="text-xl">{$t('admissions.form.child_info.location.granada')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.location.granada}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedLocation === 'sf_state'}">
                                    <input type="radio" name="location" value="sf_state" class="hidden" bind:group="{selectedLocation}">
                                    <span class="text-xl">{$t('admissions.form.child_info.location.sf_state')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.location.sf_state}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedLocation === 'ocean_ave'}">
                                    <input type="radio" name="location" value="ocean_ave" class="hidden" bind:group="{selectedLocation}">
                                    <span class="text-xl">{$t('admissions.form.child_info.location.ocean_ave')} <br><span class="text-lg">{chineseSubtext.admissions.form.child_info.location.ocean_ave}</span></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <!-- Enrollment Details -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">{$t('admissions.form.enrollment.title')} <br><span class="text-xl">{chineseSubtext.admissions.form.enrollment.title}</span></h4>
                    <div class="space-y-6">
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">{$t('admissions.form.enrollment.start_date.title')} <br><span class="text-lg">{chineseSubtext.admissions.form.enrollment.start_date.title}</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedStartDate === 'asap'}">
                                    <input type="radio" name="start_date" value="asap" class="hidden" bind:group="{selectedStartDate}" required>
                                    <span class="text-xl">{$t('admissions.form.enrollment.start_date.asap')} <br><span class="text-lg">{chineseSubtext.admissions.form.enrollment.start_date.asap}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === '1-3_months'}">
                                    <input type="radio" name="start_date" value="1-3_months" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">{$t('admissions.form.enrollment.start_date.one_three')} <br><span class="text-lg">{chineseSubtext.admissions.form.enrollment.start_date.one_three}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === '3-6_months'}">
                                    <input type="radio" name="start_date" value="3-6_months" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">{$t('admissions.form.enrollment.start_date.three_six')} <br><span class="text-lg">{chineseSubtext.admissions.form.enrollment.start_date.three_six}</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === 'exploring'}">
                                    <input type="radio" name="start_date" value="exploring" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">{$t('admissions.form.enrollment.start_date.exploring')} <br><span class="text-lg">{chineseSubtext.admissions.form.enrollment.start_date.exploring}</span></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <!-- Submission Button -->
                <div class="text-center mt-8">
                    <button type="submit" class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105">{$t('admissions.form.submit')} <br><span class="text-lg">{chineseSubtext.admissions.form.submit}</span></button>
                </div>
            </div>
        </form>
    </section>
    </div>
</main>

<style>
  .card-radio {
    @apply bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent text-center;
  }
    .card-radio.selected {
        @apply border-primary shadow-lg scale-105;
    }
    .journey-line {
        @apply absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2;
    }
    .journey-step {
        @apply relative mb-12 flex items-center;
    }
    .journey-icon {
        @apply w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg z-10;
    }
    .journey-content {
        @apply bg-white p-6 rounded-lg shadow-md ml-8 w-full transition-transform duration-300;
    }
    .journey-step:hover .journey-content {
        @apply scale-105;
    }
</style>
