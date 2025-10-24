<script lang="ts">
    import { t } from 'svelte-i18n';
    import { jobs } from '$lib/data/careers';
    import JobCard from '$lib/components/careers/JobCard.svelte';
    import zh from '$lib/locales/zh.json';
    let selectedPosition: string = '';

    function selectPosition(position: string) {
        selectedPosition = position;
    }

    async function handleSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // Validate phone number
        const phone = formData.get('phone') as string;
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

<main class="container mx-auto px-6 py-12">
    <div class="pt-36">
        <h1 class="text-4xl font-bold text-center mb-12 text-text-main">{$t('careers.title')} <br><span class="text-3xl">{zh.careers.title}</span></h1>

        <section class="text-center mb-16">
            <p class="text-xl leading-relaxed max-w-3xl mx-auto text-text-main">{$t('careers.description')}<br><span class="text-lg">{zh.careers.description}</span></p>
        </section>
    </div>

    <section>
        <h2 class="text-3xl font-bold mb-8 text-center text-text-main">{$t('careers.positions.title')} <br><span class="text-2xl">{zh.careers.positions.title}</span></h2>
        <div class="space-y-8 max-w-4xl mx-auto">
            {#each jobs as job}
            <JobCard {job} on:apply={() => selectPosition(job.title)} />
            {/each}
        </div>
    </section>

    <section id="apply-form" class="py-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-text-main">{$t('careers.form.title')} <br><span class="text-2xl">{zh.careers.form.title}</span></h2>
        <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you" class="max-w-2xl mx-auto card p-8 rounded-lg shadow-lg" on:submit|preventDefault={handleSubmit}>
            <input type="hidden" name="form-name" value="application" />
            <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="name">{$t('careers.form.name')}<br><span class="text-lg">{zh.careers.form.name}</span></label>
                <input class="form-input" id="name" name="name" type="text" placeholder="Your Name / 您的姓名" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="email">{$t('careers.form.email')}<br><span class="text-lg">{zh.careers.form.email}</span></label>
                <input class="form-input" id="email" name="email" type="email" placeholder="your.email@example.com" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="phone">{$t('careers.form.phone')}<br><span class="text-lg">{zh.careers.form.phone}</span></label>
                <input class="form-input" id="phone" name="phone" type="tel" placeholder="123-456-7890" pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number." required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="position">{$t('careers.form.position')}<br><span class="text-lg">{zh.careers.form.position}</span></label>
                <select class="form-input" id="position" name="position" required bind:value={selectedPosition}>
                    {#each jobs as job}
                    <option>{job.title}</option>
                    {/each}
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="resume">{$t('careers.form.resume')}<br><span class="text-lg">{zh.careers.form.resume}</span></label>
                <input class="form-input" id="resume" name="resume" type="file" required>
            </div>
            <div class="mb-6">
                <label class="block text-text-main font-bold mb-2" for="cover-letter">{$t('careers.form.cover_letter')}<br><span class="text-lg">{zh.careers.form.cover_letter}</span></label>
                <textarea class="form-textarea" id="cover-letter" name="cover-letter" rows="5" placeholder={$t('careers.form.cover_letter_placeholder')} required></textarea>
            </div>
            <div class="flex items-center justify-center">
                <button class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105" type="submit">
                    {$t('careers.form.submit')}<br><span class="text-sm font-normal normal-case">{zh.careers.form.submit}</span>
                </button>
            </div>
        </form>
    </section>
</main>
