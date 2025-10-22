<script lang="ts">
  let openItems: number[] = [];

  const faqs = [
    {
      question: "Application Process / 申请流程",
      answer: "<div class=\"mt-4\"><h3 class=\"text-xl font-bold text-text-main\">Step 1: Application and Tour / 第一步：申请与参观</h3><ul class=\"list-disc list-inside text-text-main mt-2 space-y-2\"><li>A non-refundable and non-transferable application fee of $100 must be paid to Little Panda via Paypal. / 必须通过Paypal向小熊猫支付100美元的不可退还且不可转让的申请费。</li><li>The school will then arrange a time with you for an individual in-person school tour after we receive your application fee. / 收到您的申请费后，学校将与您安排个人实地参观时间。</li></ul></div><div class=\"mt-4\"><h3 class=\"text-xl font-bold text-text-main\">Step 2: Waitlist / 第二步：候补名单</h3><p class=\"text-text-main mt-2\">Applications are accepted throughout the year. If spaces are not available at the time your child’s application is processed, they will be placed on the waitlist. You will receive a confirmation email upon receival to confirm the application and documents have been processed. / 我们全年接受申请。如果您孩子的申请处理时没有名额，他们将被列入候补名单。收到申请后，您将收到一封确认电子邮件，以确认申请和文件已处理完毕。</p><p class=\"text-text-main mt-2 font-bold\">***Admission is accepted throughout the year as soon as space becomes available*** / ***全年接受入学申请，名额一有空缺即可***</p></div><div class=\"mt-4\"><h3 class=\"text-xl font-bold text-text-main\">Step 3: Acceptance and Deposit / 第三步：录取与押金</h3><p class=\"text-text-main mt-2\">Once notified of acceptance, families must submit a one-month deposit to secure the child’s enrollment space, schedule a play date, complete all documents/forms in the enrollment package, and attend an orientation meeting. More specific details will be provided in the acceptance email. / 一旦接到录取通知，家庭必须提交一个月的押金以确保孩子的入学名额，安排游戏日，完成入学包裹中的所有文件/表格，并参加迎新会。更具体的细节将在录取电子邮件中提供。</p><p class=\"text-text-main mt-2\">Alternatively, you may confirm with the Little Panda Preschool to put your child on the waiting list. / 或者，您可以与小熊猫幼儿园确认，将您的孩子列入候补名单。</p></div>"
    },
    {
      question: "How Are The Kids Grouped? / 孩子们如何分组？",
      answer: "In each classroom, we have 12-14 students in a group. The students are grouped by age. / 每个教室里，我们有12-14名学生为一组。学生按年龄分组。"
    },
    {
      question: "What is the Teacher to Student Ratio? / 师生比例是多少？",
      answer: "<ul><li>1 teacher for every 4 infants (3 months-18months) / 1名老师对4名婴儿（3个月-18个月）</li><li>1 teacher for every 5 young toddlers (18 months- 24 months) / 1名老师对5名幼儿（18个月-24个月）</li><li>1 teacher for every 6 older toddlers (2 years old -3 years old) / 1名老师对6名大龄幼儿（2岁-3岁）</li><li>1 teacher for every 7 preschoolers (3 years old- 6 years old) / 1名老师对7名学龄前儿童（3岁-6岁）</li></ul>"
    },
    {
      question: "Are You Offering On-site Visits or Virtual Only? / 你们提供实地参观还是仅限虚拟参观？",
      answer: "We offer both on-site touring and virtual touring. / 我们提供实地参观和虚拟参观。"
    },
    {
      question: "What Ages Do You Accept? / 你们接受多大年龄的孩子？",
      answer: "<ul><li>Gorham campus: 3 months through TK (Preschool for all and TK qualified program) / Gorham校区：3个月至TK（全民学前班和TK合格项目）</li><li>Granada campus: 18 months through Kindergarten-entry / Granada校区：18个月至幼儿园入学</li></ul>"
    },
    {
      question: "How Flexible Are Drop-off and Pick-up Times? / 接送时间灵活吗？",
      answer: "Students will enter and leave the school in units of classroom groups. Each group has a fixed drop-off and pick-up time. Notify the group teacher one day prior if you will be early or late to pick-up or drop-off times. / 学生将以班级为单位进出学校。每个小组有固定的接送时间。如果您会提早或延迟接送，请提前一天通知小组老师。"
    },
    {
      question: "Do you offer extended care? / 你们提供延长托管服务吗？",
      answer: "<ul><li>AM care: 8:30-9:00AM additional $220/month / 上午托管：上午8:30-9:00，额外$220/月</li><li>PM care: 3:30-5:30PM additional $650/month / 下午托管：下午3:30-5:30，额外$650/月</li></ul>"
    },
    {
      question: "Staff Qualifications / 员工资质",
      answer: "All Little Panda Childcare Center teachers meet or exceed the California State Department of Education (CADE) licensing requirements. Every year, the teachers must complete a required number of continued training hours. All of the staff have experience working with young children in a supervised program. In addition, our staff members truly love and understand child development and our school’s project-based philosophy. / 所有小熊猫托儿中心的教师都达到或超过加州教育部（CADE）的许可要求。每年，教师必须完成规定数量的继续培训小时数。所有员工都有在监督项目中与幼儿工作的经验。此外，我们的员工真正热爱并理解儿童发展以及我们学校基于项目的理念。"
    },
    {
      question: "Confidentiality / 保密性",
      answer: "Confidentiality plays a vital role in promoting respect for every individual and fostering a strong community. Little Panda Childcare Center takes confidentiality very seriously and makes every effort to protect each family’s privacy. Communications among staff and parents about children will be kept confidential at all times. Little Panda Childcare Center recommends that conversations about a child, their behavior, or a specific incident should be conducted in private, away from the child and other members of the Little Panda Childcare Center community. If a parent has a question or concern, we suggest that this parent contact the teacher via email or in person to arrange a time to discuss. / 保密在促进尊重每个人和培养强大社区方面起着至关重要的作用。小熊猫托儿中心非常重视保密，并尽一切努力保护每个家庭的隐私。员工和家长之间关于儿童的交流将始终保密。小熊猫托儿中心建议，关于孩子、他们的行为或特定事件的对话应在私下进行，远离孩子和小熊猫托儿中心社区的其他成员。如果家长有疑问或担忧，我们建议该家长通过电子邮件或亲自联系老师安排时间讨论。"
    },
    {
      question: "Are Meals Provided? / 提供膳食吗？",
      answer: "We provide a morning snack, Lunch, and an afternoon snack. / 我们提供上午点心、午餐和下午点心。"
    },
    {
      question: "What if My Child Doesn't Know Any Mandarin? / 如果我的孩子不懂任何中文怎么办？",
      answer: "Your child does not need to know any Mandarin prior to enrollment. We have balanced literacy to support your child in listening, speaking, reading, writing, and representing. / 您的孩子在入学前不需要懂任何中文。我们有均衡的识字教育来支持您的孩子在听、说、读、写和表达方面的发展。"
    },
    {
      question: "Does My Child Need To Be Potty Trained? / 我的孩子需要接受如厕训练吗？",
      answer: "Students are not required to be potty trained, we have very successful toilet learning methods. / 学生不需要接受如厕训练，我们有非常成功的如厕学习方法。"
    },
    {
      question: "When is Nap Time? / 午睡时间是什么时候？",
      answer: "Infants and toddlers can nap anytime they are tired. Older toddlers and preschoolers nap from 12:30- 03:00 PM. / 婴幼儿在疲倦时可以随时午睡。大龄幼儿和学龄前儿童的午睡时间为下午12:30-3:00。"
    },
    {
      question: "How Often Are Field Trips and to Where? / 实地考察多久一次，去哪里？",
      answer: "We visit the Library once a week. Every academic year, we organize field trips for students to visit different places. For example, museums, SF Botanical Garden, Academy of Science, SF Zoo, Exploratorium, pumpkin patches, etc. / 我们每周去一次图书馆。每个学年，我们都会组织学生去不同的地方进行实地考察。例如，博物馆、旧金山植物园、科学院、旧金山动物园、探索馆、南瓜地等。"
    },
    {
      question: "Can Students Enroll in the Middle of the Year? / 学生可以在年中入学吗？",
      answer: "Applications are accepted throughout the year. When new registration takes place, applications are taken on a first-come, first-served basis. / 我们全年接受申请。在新注册时，申请将按先到先得的原则处理。"
    },
    {
      question: "How Do You Handle Discipline? / 你们如何处理纪律问题？",
      answer: "Little Panda Childcare Center is committed to providing a safe and positive learning environment for all children. The school’s behavior policy encourages children to develop social skills that reflect many of Little Panda Childcare Center’s values, including self-control, respect for others, and high self-esteem.<p>Teachers model appropriate behavior and guide positive interactions among children and adults. Nurturing these social skills is a central component of Creative Curriculum®, and it helps children grow as successful, lifelong learners.</p> / 小熊猫托儿中心致力于为所有儿童提供一个安全和积极的学习环境。学校的行为政策鼓励儿童发展反映小熊猫托儿中心许多价值观的社交技能，包括自我控制、尊重他人和高自尊。<p>教师示范适当的行为，并引导儿童和成人之间的积极互动。培养这些社交技能是Creative Curriculum®的核心组成部分，它帮助儿童成长为成功的终身学习者。</p>"
    },
    {
      question: "How Frequently Are Toys and Classrooms Sanitized? / 玩具和教室多久消毒一次？",
      answer: "<ul><li>Toys that cannot be cleaned and sanitized will not be used. / 不能清洁和消毒的玩具将不被使用。</li><li>Toys that children have placed in their mouths or that have been contaminated by body secretions are set aside until they are cleaned. / 儿童放入口中或被身体分泌物污染的玩具将被搁置一旁，直到清洁干净。</li><li>Machine-washable cloth toys should only be used by one individual at a time or, should not be used at all. / 可机洗的布制玩具一次只能由一个人使用，或者根本不应使用。</li><li>Toys are not shared with other groups of infants or toddlers, unless they have been washed and sanitized first. / 玩具不与其他婴幼儿组共享，除非它们已经清洗和消毒。</li><li>We have enough toys that they can be rotated through cleanings. / 我们有足够的玩具，可以轮流进行清洁。</li><li>HEPA grade air filters and HVAC UV lights have been installed in every classroom. / 每个教室都安装了HEPA级空气过滤器和HVAC紫外线灯。</li></ul>"
    },
    {
      question: "What is the Procedure if a Child is Sick? / 如果孩子生病了，程序是什么？",
      answer: "Germs spread quickly in a preschool environment. All children and staff stay healthier when sick persons stay at home. Common sense must prevail in the case of colds, which can range from a mild case of sniffles to a full-blown sinus infection or deep cough.<p>We use the EMERGENCY FORM, LIC700 to contact parents or any other designated adult if your child develops symptoms of illness while in class. We will isolate your child in a comfortable, supervised place until he/she can be picked up.</p><p>If a child or family has any symptoms of Covid-19, parents need to inform the school immediately. The child will need to stay home from school until they receive a negative COVID-19 test result, or have quarantined for 14 days. We will follow the guidelines of SFPDHD to amend this protocol if needed.</p> / 在学前班环境中，细菌传播得很快。当病人呆在家里时，所有儿童和员工都会更健康。在感冒的情况下，必须运用常识，感冒的范围可以从轻微的流鼻涕到全面的鼻窦感染或深度咳嗽。<p>如果您的孩子在课堂上出现疾病症状，我们将使用紧急表格LIC700联系家长或任何其他指定成年人。我们会将您的孩子隔离在一个舒适、有监督的地方，直到他/她可以被接走。</p><p>如果孩子或家庭有任何Covid-19症状，家长需要立即通知学校。孩子需要呆在家里，直到他们收到阴性的COVID-19检测结果，或已隔离14天。我们将根据SFPDHD的指导方针在需要时修改此协议。</p>"
    }
  ];

  function toggle(index: number) {
    if (openItems.includes(index)) {
      openItems = openItems.filter(i => i !== index);
    } else {
      openItems = [...openItems, index];
    }
  }
  function expandAll() {
    if (openItems.length === faqs.length) {
      openItems = [];
    } else {
      openItems = [...faqs.map((_, i) => i)];
    }
  }
  import { fade } from 'svelte/transition';
</script>

<style lang="postcss">
    .accordion-content {
        font-size: 1.15rem; /* A bit larger than default */
        line-height: 1.8;   /* More space between lines */
    }
</style>

<main class="container mx-auto px-6 py-12">
    <h1 class="text-5xl font-bold text-center mb-16 text-text-main">Frequently Asked Questions <br><span class="text-4xl">常见问题</span></h1>

    <!-- FAQ Section -->
    <section class="faq-page mb-16">
        <div class="container mx-auto">
            <div class="flex justify-between items-center mb-8">
                <button on:click={expandAll} class="btn-primary transform transition-transform duration-300 hover:scale-105 focus:scale-105">
                    {openItems.length === faqs.length ? 'Collapse All / 全部收起' : 'Expand All / 全部展开'}
                </button>
            </div>
            <div class="accordion space-y-4">
                {#each faqs as faq, i}
                <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg shadow-lg">
                    <div class="accordion-item card p-4 rounded-lg bg-alt transform hover:scale-105 transition-transform duration-300" data-fade>
                        <button on:click={() => toggle(i)} class="accordion-header w-full text-left text-2xl font-semibold py-4 px-6 focus:outline-none {openItems.includes(i) ? 'active' : ''}">
                            <span class="flex justify-between items-center">
                                {faq.question}
                                <span class="text-2xl font-light text-primary transform transition-transform duration-300 {openItems.includes(i) ? 'rotate-45' : ''}">+</span>
                            </span>
                        </button>
                    {#if openItems.includes(i)}
                    <div class="accordion-content text-lg leading-relaxed p-7 rounded-lg themed-content" style="opacity: 1;">
                        {@html faq.answer}
                    </div>
                    {/if}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>
