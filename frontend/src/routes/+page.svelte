<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>TigerQuant | Quantitative Finance Club</title>
  <meta name="description" content="TigerQuant - University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance." />
  <meta property="og:title" content="TigerQuant | Quantitative Finance Club" />
  <meta property="og:description" content="University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TigerQuant | Quantitative Finance Club" />
  <meta name="twitter:description" content="University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-pattern overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-gold-500/10"></div>
  
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="animate-fade-in">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
        Master the Art of
        <span class="text-gold-500 block">Quantitative Finance</span>
      </h1>
      
      <p class="text-xl sm:text-2xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
        Join Missouri's premier quantitative finance club. Learn cutting-edge strategies, 
        build algorithmic trading systems, and compete with the best minds in finance.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a 
          href="/join" 
          class="group bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-gold-lg"
        >
          Join TigerQuant
          <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <a 
          href="/register" 
          class="group border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Register to Trade
          <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </a>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">160+</div>
          <div class="text-muted">Active Members</div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">15+</div>
          <div class="text-muted">Trading Competitions</div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">$50K+</div>
          <div class="text-muted">Paper Trading Volume</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

<!-- Value Pillars Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Why Choose TigerQuant?
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        We provide the tools, knowledge, and community you need to excel in quantitative finance
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Learn Pillar -->
      <div class="group card-hover bg-surface rounded-xl p-8 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-2xl font-heading font-semibold text-white mb-4">Learn</h3>
        <p class="text-muted mb-6 leading-relaxed">
          Master quantitative finance through hands-on workshops, guest lectures from industry professionals, 
          and comprehensive educational resources covering everything from basic concepts to advanced strategies.
        </p>
        <ul class="space-y-2 text-sm text-muted">
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Algorithmic Trading Strategies
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Risk Management & Portfolio Theory
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Machine Learning Applications
          </li>
        </ul>
      </div>
      
      <!-- Build Pillar -->
      <div class="group card-hover bg-surface rounded-xl p-8 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 class="text-2xl font-heading font-semibold text-white mb-4">Build</h3>
        <p class="text-muted mb-6 leading-relaxed">
          Develop real-world trading systems and financial models using industry-standard tools and platforms. 
          Work on projects that solve actual market problems and build your portfolio.
        </p>
        <ul class="space-y-2 text-sm text-muted">
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Python & R Programming
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Trading Platform Development
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Data Analysis & Visualization
          </li>
        </ul>
      </div>
      
      <!-- Compete Pillar -->
      <div class="group card-hover bg-surface rounded-xl p-8 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h3 class="text-2xl font-heading font-semibold text-white mb-4">Compete</h3>
        <p class="text-muted mb-6 leading-relaxed">
          Test your skills against top talent in prestigious competitions. Compete in trading challenges, 
          research competitions, and hackathons to showcase your quantitative finance expertise.
        </p>
        <ul class="space-y-2 text-sm text-muted">
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            CFA Research Challenge
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Algorithmic Trading Competitions
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            FinTech Innovation Challenges
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="py-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Ready to Start Your Quantitative Finance Journey?
    </h2>
    <p class="text-xl text-muted mb-8">
      Join 160+ students who are already building the future of finance
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/join" 
        class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Join TigerQuant Today
      </a>
      <a 
        href="/about" 
        class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</section>