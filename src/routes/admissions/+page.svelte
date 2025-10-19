<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from '$lib/actions/fade';

  let formSubmitted = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    formSubmitted = true;
    const confirmationMessage = document.getElementById('confirmation-message');
    if (confirmationMessage) {
      confirmationMessage.style.display = 'block';
    }
    const form = event.target as HTMLFormElement;
    form.style.display = 'none';
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

<main class="container mx-auto px-6 py-12 pt-36 admissions-page page-pattern">
    <h1 class="text-5xl font-bold text-center mb-16 fade-in-section" data-fade>Admissions <br><span class="text-4xl">招生</span></h1>

    <section class="mb-16 bg-transparent p-8 rounded-2xl shadow-lg fade-in-section" data-fade>
        <h2 class="text-4xl font-bold mb-8 text-center text-text-main">LITTLE PANDA PRESCHOOL <br><span class="text-3xl">小熊猫幼儿园</span></h2>
        <p class="text-xl leading-relaxed mb-6 text-center text-text-main">We are now enrolling and have immediate openings available.<br><span class="text-lg">我们现在正在招生，并有即时名额。</span></p>
    </section>

    <section class="mb-16 fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">ADMISSION PROCESS <br><span class="text-3xl">录取流程</span></h3>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-transparent p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">STEP 1 <br><span class="text-xl">第一步</span></h4>
                <p class="text-xl leading-relaxed">Please fill out the enrollment inquiry information below. Once we process your information, we will send you an email or give you a call to let you know the status of your request.<br><span class="text-lg">请填写下面的入学咨询信息。我们处理您的信息后，将向您发送电子邮件或致电告知您的请求状态。</span></p>
            </div>
            <div class="bg-transparent p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">STEP 2 <br><span class="text-xl">第二步</span></h4>
                <p class="text-xl leading-relaxed">Parents are invited to schedule a Free Introductory school tour.<br><span class="text-lg">我们邀请家长安排一次免费的学校参观介绍。</span></p>
            </div>
            <div class="bg-transparent p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">STEP 3 <br><span class="text-xl">第三步</span></h4>
                <p class="text-xl leading-relaxed">When there is a permanent spot available in the requested class time, your child will be invited to a in person playdate. Teachers will use this playdate to determine whether the program is appropriate for the student. For students, this class serves as an opportunity to participate and then decide whether they would like to enroll. This playdate will be student only.<br><span class="text-lg">当所申请的班级时间有永久名额时，您的孩子将被邀请参加一次亲身游戏日。老师将利用这次游戏日来确定该课程是否适合该学生。对于学生来说，这个班级是参与并决定是否愿意入学的机会。这次游戏日仅限学生参加。</span></p>
            </div>
            <div class="bg-transparent p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">STEP 4 <br><span class="text-xl">第四步</span></h4>
                <p class="text-xl leading-relaxed">After the tour and playdate, the family of the child to be enrolled must submit a non- refundable deposit equal to one month's tuition, in order to hold the spot. The deposit will be applied to your child's tuition.<br><span class="text-lg">参观和游戏日结束后，被录取孩子的家庭必须提交相当于一个月学费的不可退还押金，以保留名额。该押金将用于抵扣您孩子的学费。</span></p>
            </div>
        </div>
    </section>

    <section class="mb-16 fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">Tuition <br><span class="text-3xl">学费</span></h3>
        <div class="grid md:grid-cols-3 gap-8 text-xl">
            <div class="tuition-card bg-transparent p-6 rounded-2xl shadow-lg border-t-4 border-primary transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">Preschool (age 3-5): <br><span class="text-xl">学前班 (3-5岁):</span></h4>
                <p class="text-xl">M-F 9:00 AM-3:30 PM</p>
                <p class="text-xl">5-days: $2,600/month <br><span class="text-lg">5天: $2,600/月</span></p>
                <p class="text-xl">3-days: $2,000/month <br><span class="text-lg">3天: $2,000/月</span></p>
                <p class="text-xl">2-days: $1,700/month <br><span class="text-lg">2天: $1,700/月</span></p>
            </div>
            <div class="tuition-card bg-transparent p-6 rounded-2xl shadow-lg border-t-4 border-primary transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">Toddler (age 18 months-3) <br><span class="text-xl">幼儿班 (18个月-3岁)</span></h4>
                <p class="text-xl">M-F 9:00 AM-3:30 PM</p>
                <p class="text-xl">5-days: $2,800/month <br><span class="text-lg">5天: $2,800/月</span></p>
                <p class="text-xl">3-days: $2,200/month <br><span class="text-lg">3天: $2,200/月</span></p>
                <p class="text-xl">2-days: $1,900/month <br><span class="text-lg">2天: $1,900/月</span></p>
            </div>
            <div class="tuition-card bg-transparent p-6 rounded-2xl shadow-lg border-t-4 border-primary transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold mb-4">Infant (6 weeks to 18 months) <br><span class="text-xl">婴儿班 (6周-18个月)</span></h4>
                <p class="text-xl">M-F 9:00 AM-3:30 PM</p>
                <p class="text-xl">5-days $3,100/month <br><span class="text-lg">5天: $3,100/月</span></p>
                <p class="text-xl">3-days $2,400/month <br><span class="text-lg">3天: $2,400/月</span></p>
                <p class="text-xl">2-days $2,100/month <br><span class="text-lg">2天: $2,100/月</span></p>
            </div>
        </div>
        <div class="mt-12 bg-transparent p-8 rounded-2xl shadow-lg text-xl leading-relaxed">
            <p class="text-xl">Little Panda Preschool offers both AM care and PM care for our students. We understand that many families have busy schedules and may need additional support beyond our regular school hours, so we're happy to be able to offer this service.<br><span class="text-lg">小熊猫幼儿园为我们的学生提供上午和下午的托管服务。我们理解许多家庭日程繁忙，可能需要在正常上课时间之外获得额外支持，因此我们很高兴能提供这项服务。</span></p>
            <p class="mt-4 text-xl"><b>AM care program:</b> 8:30 AM to 9:00 AM, M-F, $220 per month<br><span class="text-lg"><b>上午托管项目:</b> 上午8:30至9:00，周一至周五，$220/月</span></p>
            <p class="text-xl"><b>PM care program:</b> 3:30 PM to 5:30 PM, M-F, $650 per month<br><span class="text-lg"><b>下午托管项目:</b> 下午3:30至5:30，周一至周五，$650/月</span></p>
            <p class="mt-4 text-xl">The PM care program will offer various activities including dance, yoga , math circle, stem and gardening. These activities will be provided in accordance with the established curriculum.<br><span class="text-lg">下午托管项目将提供各种活动，包括舞蹈、瑜伽、数学圈、STEM和园艺。这些活动将根据既定课程提供。</span></p>
        </div>
    </section>

    <section class="mb-16 p-8 rounded-2xl shadow-lg glass-effect fade-in-section" data-fade>
        <h3 class="text-4xl font-bold mt-12 mb-6 text-center text-text-main">Little Panda Preschool Enrollment Inquiry <br><span class="text-3xl">小熊猫幼儿园入学咨询</span></h3>
        <p class="text-xl mb-6 text-center text-text-main">* Indicates required field <br><span class="text-lg">* 表示必填字段</span></p>
        {#if !formSubmitted}
        <form class="max-w-2xl mx-auto" on:submit={handleSubmit}>
            <div class="space-y-12">

                <!-- Parent/Guardian Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Parent/Guardian Information <br><span class="text-xl">家长/监护人信息</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="name" class="block text-xl mb-2">Name * <br><span class="text-lg">姓名 *</span></label>
                            <input id="name" type="text" class="form-input w-full">
                        </div>
                        <div class="form-group">
                            <label for="email" class="block text-xl mb-2">Email * <br><span class="text-lg">电子邮件 *</span></label>
                            <input id="email" type="email" class="form-input w-full">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="block text-xl mb-2">Phone * <br><span class="text-lg">电话 *</span></label>
                            <input id="phone" type="tel" class="form-input w-full">
                        </div>
                    </div>
                </div>

                <!-- Child's Information -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Child's Information <br><span class="text-xl">儿童信息</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label for="student-name" class="block text-xl mb-2">Student Name 学生姓名 *</label>
                            <input id="student-name" type="text" class="form-input w-full">
                        </div>
                        <div class="form-group">
                            <label for="student-birthday" class="block text-xl mb-2">Student Birthday (MM/DD/YYYY) 学生出生日期 (月/日/年） *</label>
                            <input id="student-birthday" type="text" class="form-input w-full">
                        </div>
                        <div class="form-group">
                            <label class="block text-xl mb-2">Age Group * <br><span class="text-lg">年龄段 *</span></label>
                            <div class="flex flex-col space-y-2 mt-2">
                                <label class="flex items-center"><input type="radio" name="age_group" value="infant" class="form-radio"><span class="ml-3 text-xl">Infant (0-18 mos) <br><span class="text-lg">婴儿 (0-18个月)</span></span></label>
                                <label class="flex items-center"><input type="radio" name="age_group" value="toddler" class="form-radio"><span class="ml-3 text-xl">Toddler (18 mos - 3 yrs) <br><span class="text-lg">幼儿 (18个月-3岁)</span></span></label>
                                <label class="flex items-center"><input type="radio" name="age_group" value="preschool" class="form-radio"><span class="ml-3 text-xl">Preschool (3-5 yrs) <br><span class="text-lg">学前班 (3-5岁)</span></span></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="block text-xl mb-2">Preferred Location * <br><span class="text-lg">首选地点 *</span></label>
                            <div class="flex flex-col space-y-2 mt-2">
                                <label class="flex items-center"><input type="radio" name="location" value="granada" class="form-radio"><span class="ml-3 text-xl">Granada Campus <br><span class="text-lg">格拉纳达校区</span></span></label>
                                <label class="flex items-center"><input type="radio" name="location" value="sf_state" class="form-radio"><span class="ml-3 text-xl">Children's Campus at SF State <br><span class="text-lg">旧金山州立大学儿童校区</span></span></label>
                                <label class="flex items-center"><input type="radio" name="location" value="ocean_ave" class="form-radio"><span class="ml-3 text-xl">Ocean Avenue Campus <br><span class="text-lg">海洋大道校区</span></span></label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enrollment Details -->
                <div>
                    <h4 class="text-2xl font-semibold mb-6 border-b-2 border-primary pb-2">Enrollment Details <br><span class="text-xl">入学详情</span></h4>
                    <div class="space-y-6">
                        <div class="form-group">
                            <label class="block text-xl mb-2">Desired Start Date * <br><span class="text-lg">期望开始日期 *</span></label>
                            <div class="flex flex-col space-y-2 mt-2">
                                <label class="flex items-center"><input type="radio" name="start_date" value="asap" class="form-radio"><span class="ml-3 text-xl">As soon as possible <br><span class="text-lg">尽快</span></span></label>
                                <label class="flex items-center"><input type="radio" name="start_date" value="1-3_months" class="form-radio"><span class="ml-3 text-xl">In 1-3 months <br><span class="text-lg">1-3个月内</span></span></label>
                                <label class="flex items-center"><input type="radio" name="start_date" value="3-6_months" class="form-radio"><span class="ml-3 text-xl">In 3-6 months <br><span class="text-lg">3-6个月内</span></span></label>
                                <label class="flex items-center"><input type="radio" name="start_date" value="exploring" class="form-radio"><span class="ml-3 text-xl">Just exploring <br><span class="text-lg">仅了解</span></span></label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Submission Button -->
                <div class="text-center mt-8">
                    <button type="submit" class="btn-primary">Submit Inquiry <br><span class="text-lg">提交咨询</span></button>
                </div>
            </div>
        </form>
        {:else}
        <div id="confirmation-message" class="mt-8 text-center text-2xl text-primary">
            Thank you for your inquiry! We will get back to you soon. <br><span class="text-xl">感谢您的咨询！我们会尽快与您联系。</span>
        </div>
        {/if}
    </section>
</main>

<style>
</style>
