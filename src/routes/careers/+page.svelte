<script lang="ts">
    let selectedPosition: string = '';

    const jobs = [
        {
            title: 'Program Director',
            description: 'We are looking for an experienced Program Director to supervise our entire child care and development program, potentially across multiple sites. You will be responsible for curriculum, staff development, and overall program administration.',
            qualifications: [
                'Must meet the requirements for a Child Development Program Director Permit.',
                'Key qualifications include a Bachelor’s degree or higher, plus specific coursework in administration and adult supervision, and one year of experience as a site supervisor.',
                'Alternatively, a Master’s degree in ECE or a related field.'
            ]
        },
        {
            title: 'Site Supervisor',
            description: 'We are seeking a qualified Site Supervisor to oversee the day-to-day operations of a single school site. You will be responsible for supervising staff, coordinating curriculum, and ensuring a safe and enriching environment for our children.',
            qualifications: [
                'Must meet the requirements for a Child Development Site Supervisor Permit.',
                "Key qualifications include an Associate's degree (or 60 units), specific coursework in ECE and administration, plus 350 days of experience (including 100 days supervising adults).",
                "Alternatively, a Bachelor's degree with 12 ECE units and supervised field experience."
            ]
        },
        {
            title: 'Lead Teacher (Master Teacher)',
            description: 'We are seeking an experienced and passionate Lead Teacher for our Mandarin Immersion program. The ideal candidate is fluent in Mandarin, has a deep understanding of project-based learning, and is capable of serving as a coordinator of curriculum and staff development.',
            qualifications: [
                'Must meet the requirements for a Child Development Master Teacher Permit.',
                'Key qualifications include 24 semester units in ECE, 16 units in general education, 6 units in a specialization, 2 units of adult supervision, and 350 days of experience.',
                "Alternatively, a Bachelor's degree with 12 ECE units and supervised field experience."
            ]
        },
        {
            title: 'Teacher',
            description: 'We are looking for a fully qualified Teacher to provide service in the care, development, and instruction of children. You will be responsible for your own classroom and will supervise Associate Teachers, Assistants, and Aides.',
            qualifications: [
                'Must meet the requirements for a Child Development Teacher Permit.',
                'Key qualifications include 12 postsecondary semester units in ECE and at least six months of work experience in a licensed child care center.',
                'Alternatively, a Child Development Associate (CDA) credential with six months of experience, or a Child Development Teacher Permit from the CTC.'
            ]
        },
        {
            title: 'Assistant Teacher (Associate Teacher)',
            description: 'We are looking for a caring and energetic Assistant Teacher to support our classrooms. This is a great opportunity for those looking to grow in the field of early childhood education. You will assist in the care, development, and instruction of children under the supervision of a Lead Teacher.',
            qualifications: [
                'Must meet the requirements for a Child Development Associate Teacher Permit.',
                'Key qualifications include 12 semester units in ECE and 50 days of instructional experience (at least 3 hours per day).',
                'Alternatively, a valid Child Development Associate (CDA) Credential.'
            ]
        },
        {
            title: 'Teacher Aide',
            description: 'We are seeking a supportive and reliable Teacher Aide to assist in the classroom. You will help care for children and assist with instructional activities under the direct supervision of a Teacher.',
            qualifications: [
                'No permit is required for this position.',
                'Must be at least 18 years of age and demonstrate a passion for working with young children.'
            ]
        }
    ];

    function selectPosition(position: string) {
        selectedPosition = position;
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
            <div class="card p-6 rounded-lg transform hover:scale-105 transition-transform duration-300" data-fade>
                <h3 class="text-2xl font-bold mb-2">{job.title}</h3>
                <p class="mb-4">{job.description}</p>
                <p class="font-bold">Qualifications:</p>
                <ul class="list-disc list-inside">
                    {#each job.qualifications as qualification}
                    <li>{qualification}</li>
                    {/each}
                </ul>
                <a href="#apply-form" on:click={() => selectPosition(job.title)} class="text-primary hover:opacity-80 font-bold mt-4 inline-block">Apply Now &rarr;</a>
            </div>
            {/each}
        </div>
    </section>

    <section id="apply-form" class="py-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-text-main">Apply Now <br><span class="text-2xl">立即申请</span></h2>
        <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="max-w-2xl mx-auto card p-8 rounded-lg shadow-lg">
            <input type="hidden" name="form-name" value="application" />
            <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="name">Full Name</label>
                <input class="form-input" id="name" name="name" type="text" placeholder="Your Name" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="email">Email Address</label>
                <input class="form-input" id="email" name="email" type="email" placeholder="your.email@example.com" required>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="phone">Phone Number</label>
                <input class="form-input" id="phone" name="phone" type="tel" placeholder="123-456-7890">
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="position">Position Applying For</label>
                <select class="form-input" id="position" name="position" required bind:value={selectedPosition}>
                    {#each jobs as job}
                    <option>{job.title}</option>
                    {/each}
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-text-main font-bold mb-2" for="resume">Resume/CV</label>
                <input class="form-input" id="resume" name="resume" type="file" required>
            </div>
            <div class="mb-6">
                <label class="block text-text-main font-bold mb-2" for="cover-letter">Cover Letter</label>
                <textarea class="form-textarea" id="cover-letter" name="cover-letter" rows="5" placeholder="Tell us why you'd be a great fit for our team."></textarea>
            </div>
            <div class="flex items-center justify-center">
                <button class="btn-primary" type="submit">
                    Submit Application
                </button>
            </div>
        </form>
    </section>
</main>
