<script lang="ts">
    import { jobs } from '$lib/data/careers';
    import JobCard from '$lib/components/careers/JobCard.svelte';
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
        <h1 class="text-4xl font-bold text-center mb-12 text-text-main">Join Our Team of Kind Hearts <br><span class="text-3xl">加入我们充满爱心的团队</span></h1>

        <section class="text-center mb-16">
            <p class="text-xl leading-relaxed max-w-3xl mx-auto text-text-main">At Little Panda, we are more than just a school; we are a community. We are looking for passionate, dedicated educators who share our commitment to nurturing the next generation of brilliant minds. If you have a kind heart and a love for learning, we would love to hear from you.<br><span class="text-lg">在小熊猫，我们不仅仅是一所学校；我们是一个社区。我们正在寻找热情、敬业的教育工作者，他们与我们共同致力于培养下一代杰出的人才。如果您有一颗善良的心和对学习的热爱，我们很乐意听到您的消息。</span></p>
        </section>
    </div>

    <section>
        <h2 class="text-3xl font-bold mb-8 text-center text-text-main">Open Positions <br><span class="text-2xl">空缺职位</span></h2>
        <div class="space-y-8 max-w-4xl mx-auto">
            {#each jobs as job}
            <JobCard {job} on:apply={() => selectPosition(job.title)} />
            {/each}
        </div>
    </section>

    <section id="apply-form" class="py-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-text-main">Apply Now <br><span class="text-2xl">立即申请</span></h2>
        <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you" class="max-w-2xl mx-auto card p-8 rounded-lg shadow-lg" on:submit|preventDefault={handleSubmit}>
            <input type="hidden" name="form-name" value="application" />
            <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="name">Full Name<br><span class="text-lg">全名</span></label>
                <input class="form-input" id="name" name="name" type="text" placeholder="Your Name / 您的姓名" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="email">Email Address<br><span class="text-lg">电子邮件地址</span></label>
                <input class="form-input" id="email" name="email" type="email" placeholder="your.email@example.com" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="phone">Phone Number<br><span class="text-lg">电话号码</span></label>
                <input class="form-input" id="phone" name="phone" type="tel" placeholder="123-456-7890" pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number." required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="position">Position Applying For<br><span class="text-lg">申请职位</span></label>
                <select class="form-input" id="position" name="position" required bind:value={selectedPosition}>
                    {#each jobs as job}
                    <option>{job.title}</option>
                    {/each}
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="resume">Resume/CV<br><span class="text-lg">简历</span></label>
                <input class="form-input" id="resume" name="resume" type="file" required>
            </div>
            <div class="mb-6">
                <label class="block text-text-main font-bold mb-2" for="cover-letter">Cover Letter<br><span class="text-lg">求职信</span></label>
                <textarea class="form-textarea" id="cover-letter" name="cover-letter" rows="5" placeholder="Tell us why you'd be a great fit for our team. / 告诉我们为什么您是这个职位的最佳人选。" required></textarea>
            </div>
            <div class="flex items-center justify-center">
                <button class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105" type="submit">
                    Submit Application<br><span class="text-sm font-normal normal-case">提交申请</span>
                </button>
            </div>
        </form>
    </section>
</main>
