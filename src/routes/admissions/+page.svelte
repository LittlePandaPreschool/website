<script lang="ts">
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

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    window.location.href = form.action;
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
            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">Admissions<br><span class="text-3xl md:text-5xl font-light">招生</span></h1>
            <p class="text-lg md:text-2xl font-light">We are delighted to welcome new families into our community and begin this wonderful journey together.<br><span class="text-base md:text-xl mt-2">我们很高兴欢迎新家庭加入我们的社区，共同开始这段美好的旅程。</span></p>
        </div>
    </section>

    <div class="container mx-auto px-6 py-12">

    <section class="mb-16 fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">Your Journey to Little Panda <br><span class="text-3xl">您的小熊猫之旅</span></h3>
        <div class="relative">
            <div class="journey-line"></div>
            <div class="journey-step">
                <div class="journey-icon">1</div>
                <div class="journey-content">
                    <h4 class="text-2xl font-bold mb-2">Submit Your Inquiry <br><span class="text-xl">提交咨询</span></h4>
                    <p class="text-lg">Fill out the form below to express your interest. We'll be in touch shortly to confirm we've received it.<br><span class="text-base">填写下面的表格表达您的兴趣。我们收到后会尽快与您联系确认。</span></p>
                </div>
            </div>
            <div class="journey-step">
                <div class="journey-icon">2</div>
                <div class="journey-content">
                    <h4 class="text-2xl font-bold mb-2">Schedule a Tour <br><span class="text-xl">安排参观</span></h4>
                    <p class="text-lg">We invite you to a personalized tour to experience our nurturing environment firsthand.<br><span class="text-base">我们邀请您进行个性化参观，亲身体验我们充满关爱的环境。</span></p>
                </div>
            </div>
            <div class="journey-step">
                <div class="journey-icon">3</div>
                <div class="journey-content">
                    <h4 class="text-2xl font-bold mb-2">Student Playdate <br><span class="text-xl">学生游戏日</span></h4>
                    <p class="text-lg">A fun opportunity for your child to interact with our teachers and explore our program.<br><span class="text-base">一个让您的孩子与我们老师互动、探索我们课程的有趣机会。</span></p>
                </div>
            </div>
            <div class="journey-step">
                <div class="journey-icon">4</div>
                <div class="journey-content">
                    <h4 class="text-2xl font-bold mb-2">Secure Your Spot <br><span class="text-xl">确保名额</span></h4>
                    <p class="text-lg">A deposit secures your child's place, allowing us to prepare for their unique learning journey.<br><span class="text-base">押金可确保您孩子的名额，让我们为他们独特的学习之旅做好准备。</span></p>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-16 fade-in-section bg-primary text-white rounded-2xl p-8" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center font-sans">Our Growth Tiers <br><span class="text-3xl">我们的成长阶梯</span></h3>
        <div class="mb-12">
            <InfoCard title="Flexible Options" subtitle="灵活选择">
                <p>Flexible options to fit your family's needs. Choose between 2, 3, or 5 days of enrollment per week.<br><span class="text-lg">灵活的选择以满足您家庭的需求。每周可选择2天、3天或5天入学。</span></p>
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
                    <InfoCard title="Extended Care" subtitle="额外托管">
                        <p>Little Panda Preschool offers both AM care and PM care for our students. We understand that many families have busy schedules and may need additional support beyond our regular school hours, so we're happy to be able to offer this service.</p>
                        <p class="mt-2">小熊猫幼儿园为我们的学生提供上午和下午的托管服务。我们理解许多家庭日程繁忙，可能需要在正常上课时间之外获得额外支持，因此我们很高兴能提供这项服务。</p>
                    </InfoCard>
                </div>
                <InfoCard title="AM Care" subtitle="上午托管">
                    <p>8:30 AM to 9:00 AM, M-F</p>
                    <p class="font-bold mt-2">$220 per month<br>每月$220</p>
                </InfoCard>
                <InfoCard title="PM Care" subtitle="下午托管">
                    <p>3:30 PM to 5:30 PM, M-F</p>
                    <p class="font-bold mt-2">$650 per month<br>每月$650</p>
                </InfoCard>
                <div class="md:col-span-2">
                    <InfoCard title="PM Care Activities" subtitle="下午托管活动">
                        <p>The PM care program will offer various activities including dance, yoga , math circle, stem and gardening. These activities will be provided in accordance with the established curriculum.</p>
                        <p class="mt-2">下午托管项目将提供各种活动，包括舞蹈、瑜伽、数学圈、STEM和园艺。这些活动将根据既定课程提供。</p>
                    </InfoCard>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-16 p-8 rounded-2xl shadow-lg glass-effect fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">Little Panda Preschool Enrollment Inquiry <br><span class="text-3xl">小熊猫幼儿园入学咨询</span></h3>
        <p class="text-xl mb-6 text-center text-text-main">* Indicates required field <br><span class="text-lg">* 表示必填字段</span></p>
        <form class="max-w-2xl mx-auto" name="admissions" method="POST" data-netlify="true" action="/thank-you" on:submit={handleSubmit}>
            <input type="hidden" name="form-name" value="admissions" />
            <input type="hidden" name="subject" value="New Admission Inquiry / 新的入学咨询 from %{name}" />
            <div class="space-y-12">

                <!-- Parent/Guardian Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Parent/Guardian Information <br><span class="text-xl">家长/监护人信息</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="name" class="block text-xl mb-2">Name * <br><span class="text-lg">姓名 *</span></label>
                            <input id="name" name="name" type="text" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="block text-xl mb-2">Email * <br><span class="text-lg">电子邮件 *</span></label>
                            <input id="email" name="email" type="email" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="block text-xl mb-2">Phone * <br><span class="text-lg">电话 *</span></label>
                            <input id="phone" name="phone" type="tel" class="form-input w-full" required pattern="^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$" title="Please enter a valid US phone number.">
                        </div>
                    </div>
                </div>

                <!-- Child's Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Child's Information <br><span class="text-xl">儿童信息</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="student-name" class="block text-xl mb-2">Student Name 学生姓名 *</label>
                            <input id="student-name" name="student-name" type="text" class="form-input w-full" required>
                        </div>
                        <div class="form-group">
                            <label for="student-birthday" class="block text-xl mb-2">Student Birthday (MM/DD/YYYY) 学生出生日期 (月/日/年） *</label>
                            <input id="student-birthday" name="student-birthday" type="date" class="form-input w-full" required min={new Date(new Date().setFullYear(new Date().getFullYear() - 7)).toISOString().split('T')[0]} max={new Date().toISOString().split('T')[0]}>
                        </div>
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">Age Group * <br><span class="text-lg">年龄段 *</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'infant'}">
                                    <input type="radio" name="age_group" value="infant" class="hidden" bind:group="{selectedAgeGroup}" required>
                                    <span class="text-xl">Infant (0-18 mos) <br><span class="text-lg">婴儿 (0-18个月)</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'toddler'}">
                                    <input type="radio" name="age_group" value="toddler" class="hidden" bind:group="{selectedAgeGroup}">
                                    <span class="text-xl">Toddler (18 mos - 3 yrs) <br><span class="text-lg">幼儿 (18个月-3岁)</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedAgeGroup === 'preschool'}">
                                    <input type="radio" name="age_group" value="preschool" class="hidden" bind:group="{selectedAgeGroup}">
                                    <span class="text-xl">Preschool (3-5 yrs) <br><span class="text-lg">学前班 (3-5岁)</span></span>
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">Preferred Location * <br><span class="text-lg">首选地点 *</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedLocation === 'granada'}">
                                    <input type="radio" name="location" value="granada" class="hidden" bind:group="{selectedLocation}" required>
                                    <span class="text-xl">Granada Campus <br><span class="text-lg">格拉纳达校区</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedLocation === 'sf_state'}">
                                    <input type="radio" name="location" value="sf_state" class="hidden" bind:group="{selectedLocation}">
                                    <span class="text-xl">Children's Campus at SF State <br><span class="text-lg">旧金山州立大学儿童校区</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedLocation === 'ocean_ave'}">
                                    <input type="radio" name="location" value="ocean_ave" class="hidden" bind:group="{selectedLocation}">
                                    <span class="text-xl">Ocean Avenue Campus <br><span class="text-lg">海洋大道校区</span><span class="text-lg">(Coming Soon)</span></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <!-- Enrollment Details -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Enrollment Details <br><span class="text-xl">入学详情</span></h4>
                    <div class="space-y-6">
                        <fieldset class="form-group">
                            <legend class="block text-xl mb-2">Desired Start Date * <br><span class="text-lg">期望开始日期 *</span></legend>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <label class="card-radio" class:selected="{selectedStartDate === 'asap'}">
                                    <input type="radio" name="start_date" value="asap" class="hidden" bind:group="{selectedStartDate}" required>
                                    <span class="text-xl">As soon as possible <br><span class="text-lg">尽快</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === '1-3_months'}">
                                    <input type="radio" name="start_date" value="1-3_months" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">In 1-3 months <br><span class="text-lg">1-3个月内</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === '3-6_months'}">
                                    <input type="radio" name="start_date" value="3-6_months" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">In 3-6 months <br><span class="text-lg">3-6个月内</span></span>
                                </label>
                                <label class="card-radio" class:selected="{selectedStartDate === 'exploring'}">
                                    <input type="radio" name="start_date" value="exploring" class="hidden" bind:group="{selectedStartDate}">
                                    <span class="text-xl">Just exploring <br><span class="text-lg">仅了解</span></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <!-- Submission Button -->
                <div class="text-center mt-8">
                    <button type="submit" class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105">Submit Inquiry <br><span class="text-lg">提交咨询</span></button>
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
