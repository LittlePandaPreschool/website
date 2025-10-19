<script lang="ts">
  // Component imports are no longer needed
</script>

<!-- Hero Section -->
<section class="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');"></div>

    <!-- Overlay to ensure text is readable -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <!-- Content -->
    <div class="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4 uppercase tracking-wider">
            Unleash Potential.
            <span class="block text-3xl md:text-5xl font-light mt-2">释放潜能</span>
        </h1>
        <p class="text-lg md:text-2xl mb-8 font-light">
            Start Their Journey.
            <span class="block text-base md:text-xl mt-2">从这里开始他们的旅程</span>
        </p>
        <a href="/admissions" class="btn-primary py-3 px-10 text-lg font-bold uppercase tracking-wider flex flex-col items-center">
            <span>Join Us</span>
            <span class="text-sm font-normal normal-case">加入我们</span>
        </a>
    </div>
</section>

<!-- Programs Section -->
<section id="programs" class="py-20">
    <div class="container mx-auto px-6">
    <!-- Our Blueprint for Brilliance Section -->
    <section class="py-20 bg-main">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-4 text-secondary">Our Blueprint for Brilliance</h2>
            <p class="text-xl text-main mb-12 max-w-3xl mx-auto">We've designed a holistic approach to early education that nurtures every aspect of your child's development, preparing them to thrive in a global community.</p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <!-- Card 1: Inquiry-Based Learning -->
                <div class="bg-alt p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-fade>
                    <i class="fas fa-search text-4xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-bold mb-3 text-primary">Inquiry-Based Learning</h3>
                    <p class="text-light">We spark curiosity by making real-world connections, encouraging students to ask big questions and explore their own answers.</p>
                </div>
                <!-- Card 2: Mandarin Immersion -->
                <div class="bg-alt p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-fade>
                    <i class="fas fa-language text-4xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-bold mb-3 text-primary">Mandarin Immersion</h3>
                    <p class="text-light">Our immersive environment unlocks a world of possibilities, fostering early language development and cross-cultural understanding.</p>
                </div>
                <!-- Card 3: Child-Focused Projects -->
                <div class="bg-alt p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-fade>
                    <i class="fas fa-child text-4xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-bold mb-3 text-primary">Child-Focused Projects</h3>
                    <p class="text-light">We guide students through in-depth studies of real-world topics, tailored to their unique interests and skills.</p>
                </div>
                <!-- Card 4: Essential Life Skills -->
                <div class="bg-alt p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-fade>
                    <i class="fas fa-heartbeat text-4xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-bold mb-3 text-primary">Essential Life Skills</h3>
                    <p class="text-light">We cultivate focus, self-control, communication, and empathy, building a strong foundation for lifelong success.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="py-20 bg-alt">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-4 text-center text-secondary">A Glimpse Into Our World</h2>
            <p class="text-xl text-center text-main mb-12">Where curiosity and creativity come to life.</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613053/pexels-photo-8613053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8612980/pexels-photo-8612980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/7105593/pexels-photo-7105593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613053/pexels-photo-8613053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8612980/pexels-photo-8612980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="https://images.pexels.com/photos/7105593/pexels-photo-7105593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

        
    </div>
</section>

<!-- Form Section -->
<section id="form" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Join the Little Panda Family</h2>
        <p class="text-xl text-gray-600 mb-12">Secure your spot on our priority waitlist.</p>
        <div class="max-w-2xl mx-auto">
            <form action="mailto:littlepandapreschoolsf@gmail.com" method="post" enctype="text/plain" class="bg-white p-8 rounded-lg shadow-lg text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="text" name="Parent's Name" placeholder="Parent's Name" class="form-input" required>
                    <input type="email" name="Email Address" placeholder="Email Address" class="form-input" required>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="tel" name="Phone Number" placeholder="Phone Number" class="form-input">
                    <input type="text" name="Child's DOB" placeholder="Child's Date of Birth" class="form-input">
                </div>
                <div class="mb-6">
                    <textarea name="Message" placeholder="Your message or questions..." rows="5" class="form-textarea"></textarea>
                </div>
                <button type="submit" class="w-full btn-primary text-lg font-bold uppercase tracking-wider">
                    Join Waitlist
                </button>
            </form>
        </div>
    </div>
</section>
