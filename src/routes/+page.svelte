<script lang="ts">
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

  const blueprintItems = [
    {
      icon: 'fa-search',
      title: 'Inquiry-Based Learning',
      title_chinese: '探究式学习',
      description: 'We spark curiosity by making real-world connections, encouraging students to ask big questions and explore their own answers.',
      description_chinese: '我们通过建立与现实世界的联系来激发孩子们的好奇心，鼓励他们提出伟大的问题并探索自己的答案。'
    },
    {
      icon: 'fa-language',
      title: 'Mandarin Immersion',
      title_chinese: '沉浸式中文环境',
      description: 'Our immersive environment unlocks a world of possibilities, fostering early language development and cross-cultural understanding.',
      description_chinese: '我们的沉浸式环境开启了一个充满可能性的世界，促进早期语言发展和跨文化理解。'
    },
    {
      icon: 'fa-child',
      title: 'Child-Focused Projects',
      title_chinese: '以儿童为中心的项目',
      description: 'We guide students through in-depth studies of real-world topics, tailored to their unique interests and skills.',
      description_chinese: '我们引导学生深入研究现实世界的主题，这些主题根据他们独特的兴趣和技能量身定制。'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Essential Life Skills',
      title_chinese: '基本生活技能',
      description: 'We cultivate focus, self-control, communication, and empathy, building a strong foundation for lifelong success.',
      description_chinese: '我们培养专注力、自我控制、沟通和同理心，为终身成功奠定坚实的基础。'
    }
  ];

</script>

<DynamicHero />

<!-- Programs Section -->
<section id="programs" class="py-20">
    <div class="container mx-auto px-6">
    <!-- Our Blueprint for Brilliance Section -->
    <section class="py-20 bg-secondary text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-4">Our Blueprint for Brilliance<br><span class="text-4xl">我们的卓越蓝图</span></h2>
            <p class="text-xl mb-12 max-w-3xl mx-auto">We've designed a holistic approach to early education that nurtures every aspect of your child's development, preparing them to thrive in a global community.<br><span class="text-lg">我们设计了一套全方位的早期教育方法，旨在培养您孩子发展的每一个方面，为他们在全球化社区中茁壮成长做好准备。</span></p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {#each blueprintItems as item}
                    <div class="p-8 transform transition-transform duration-300 hover:scale-105 hover:bg-green-700 rounded-lg" data-fade>
                        <i class="fas {item.icon} text-4xl text-primary mb-4"></i>
                        <h3 class="text-2xl font-bold mb-3 text-white">{item.title}<br><span class="text-xl">{item.title_chinese}</span></h3>
                        <p class="text-lg">{item.description}<br><span class="text-base">{item.description_chinese}</span></p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="py-20 bg-alt">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-4 text-center text-secondary">A Glimpse Into Our World<br><span class="text-3xl">一睹我们的世界</span></h2>
            <p class="text-xl text-center text-main mb-12">Where curiosity and creativity come to life.<br><span class="text-lg">一个让好奇心与创造力绽放的地方。</span></p>
            <ImageCarousel images={allGalleryImages} />
        </div>
    </section>

        
    </div>
</section>

<!-- Locations Section -->
<section class="py-20 bg-main">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-5xl font-bold mb-4 text-secondary">Our Campuses<br><span class="text-4xl">我们的校区</span></h2>
        <p class="text-xl text-main mb-12 max-w-3xl mx-auto">Find the perfect learning environment for your child.<br><span class="text-lg">为您的孩子找到完美的学习环境。</span></p>
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
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Join the Little Panda Family<br><span class="text-3xl">加入小熊猫大家庭</span></h2>
        <p class="text-xl text-gray-600 mb-12">Secure your spot on our priority waitlist.<br><span class="text-lg">立即锁定您的优先候补名额。</span></p>
        <div class="max-w-2xl mx-auto">
            <form name="contact" method="POST" data-netlify="true" action="/thank-you" class="bg-white p-8 rounded-lg shadow-lg text-left" on:submit|preventDefault={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="parent-name" class="sr-only">Parent's Name</label>
                        <input id="parent-name" type="text" name="Parent's Name" placeholder="Parent's Name / 家长姓名" class="form-input" required>
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">Email Address</label>
                        <input id="email-address" type="email" name="Email Address" placeholder="Email Address / 电子邮件地址" class="form-input" required>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="phone-number" class="sr-only">Phone Number</label>
                        <input id="phone-number" type="tel" name="Phone Number" placeholder="Phone Number / 电话号码" class="form-input" pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number." required>
                    </div>
                    <div>
                        <label for="child-dob" class="sr-only">Child's Date of Birth</label>
                        <input id="child-dob" type="text" name="Child's DOB" placeholder="Child's Date of Birth / 孩子的出生日期" class="form-input" on:focus={(e) => (e.target as HTMLInputElement).type = 'date'} on:blur={(e) => (e.target as HTMLInputElement).type = 'text'} min={new Date(new Date().setFullYear(new Date().getFullYear() - 7)).toISOString().split('T')[0]} max={new Date().toISOString().split('T')[0]} required>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="message" class="sr-only">Message</label>
                    <textarea id="message" name="Message" placeholder="Your message or questions... / 您的留言或问题..." rows="5" class="form-textarea" required></textarea>
                </div>
                <button type="submit" class="w-full btn-primary text-lg font-bold uppercase tracking-wider transform transition-transform duration-300 hover:scale-105 focus:scale-105">
                    Join Waitlist <br><span class="text-sm font-normal normal-case">加入候补名单</span>
                </button>
            </form>
        </div>
    </div>
</section>
