<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Join TigerQuant | Quantitative Finance Club</title>
  <meta name="description" content="Join TigerQuant, University of Missouri's premier quantitative finance club. Learn algorithmic trading, participate in competitions, and build your career in finance." />
  <meta property="og:title" content="Join TigerQuant | Quantitative Finance Club" />
  <meta property="og:description" content="Join TigerQuant, University of Missouri's premier quantitative finance club. Learn algorithmic trading, participate in competitions, and build your career in finance." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      Join <span class="text-gold-500">TigerQuant</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      Become part of Missouri's most innovative quantitative finance community
    </p>
  </div>
</section>

<!-- Why Join Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Why Join TigerQuant?
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Discover the benefits of being part of our quantitative finance community
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Comprehensive Education</h3>
        <p class="text-muted leading-relaxed">
          Access to workshops, guest lectures, and hands-on projects covering everything from basic concepts to advanced quantitative strategies.
        </p>
      </div>
      
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Strong Community</h3>
        <p class="text-muted leading-relaxed">
          Connect with like-minded students, industry professionals, and alumni who share your passion for quantitative finance.
        </p>
      </div>
      
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Competition Opportunities</h3>
        <p class="text-muted leading-relaxed">
          Participate in prestigious competitions like the CFA Research Challenge and algorithmic trading competitions.
        </p>
      </div>
      
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Hands-On Experience</h3>
        <p class="text-muted leading-relaxed">
          Work with real market data, develop trading strategies, and build your portfolio using our paper trading platform.
        </p>
      </div>
      
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Career Development</h3>
        <p class="text-muted leading-relaxed">
          Access to industry connections, internship opportunities, and mentorship from professionals at top firms.
        </p>
      </div>
      
      <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-4">Technical Skills</h3>
        <p class="text-muted leading-relaxed">
          Learn Python, R, machine learning, and other essential tools for modern quantitative finance.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- How to Join Section -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        How to Join
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Getting started with TigerQuant is easy. Follow these simple steps to become a member.
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="space-y-8">
        <!-- Step 1 -->
        <div class="flex items-start space-x-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
              <span class="text-black font-bold text-lg">1</span>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-heading font-semibold text-white mb-2">Attend an Information Session</h3>
            <p class="text-muted leading-relaxed">
              Join us for one of our weekly information sessions to learn more about TigerQuant, meet current members, and ask questions about our programs and activities.
            </p>
            <div class="mt-3">
              <span class="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm font-semibold">
                Every Tuesday at 6:00 PM
              </span>
            </div>
          </div>
        </div>
        
        <!-- Step 2 -->
        <div class="flex items-start space-x-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
              <span class="text-black font-bold text-lg">2</span>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-heading font-semibold text-white mb-2">Complete the Application</h3>
            <p class="text-muted leading-relaxed">
              Fill out our membership application form, which includes basic information about your academic background and interest in quantitative finance.
            </p>
            <div class="mt-3">
              <button class="inline-block bg-gold-500 hover:bg-gold-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </div>
        
        <!-- Step 3 -->
        <div class="flex items-start space-x-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
              <span class="text-black font-bold text-lg">3</span>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-heading font-semibold text-white mb-2">Pay Membership Dues</h3>
            <p class="text-muted leading-relaxed">
              Annual membership dues are $25 and cover all workshops, competitions, and social events throughout the academic year.
            </p>
            <div class="mt-3">
              <span class="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm font-semibold">
                $25 per academic year
              </span>
            </div>
          </div>
        </div>
        
        <!-- Step 4 -->
        <div class="flex items-start space-x-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
              <span class="text-black font-bold text-lg">4</span>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-heading font-semibold text-white mb-2">Start Your Journey</h3>
            <p class="text-muted leading-relaxed">
              Once approved, you'll receive access to our Discord server, paper trading platform, and all member resources. Welcome to the TigerQuant family!
            </p>
            <div class="mt-3">
              <span class="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm font-semibold">
                Welcome aboard!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Requirements Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Membership Requirements
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        What you need to know before joining TigerQuant
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 class="text-2xl font-heading font-semibold text-white mb-6">Eligibility</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Current Mizzou Student</h4>
              <p class="text-muted text-sm">Must be enrolled at the University of Missouri</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Any Major Welcome</h4>
              <p class="text-muted text-sm">No specific major required - we welcome all backgrounds</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Interest in Finance</h4>
              <p class="text-muted text-sm">Genuine interest in quantitative finance and markets</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-2xl font-heading font-semibold text-white mb-6">Commitment</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Regular Attendance</h4>
              <p class="text-muted text-sm">Attend at least 60% of our weekly meetings and events</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Active Participation</h4>
              <p class="text-muted text-sm">Engage in workshops, competitions, and community activities</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <h4 class="font-semibold text-white">Professional Conduct</h4>
              <p class="text-muted text-sm">Maintain high standards of academic and professional integrity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Ready to Get Started?
    </h2>
    <p class="text-xl text-muted mb-8">
      Join 160+ students who are already building their future in quantitative finance
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://engage.missouri.edu/tigerquant/home/" 
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Join TigerQuant Today
      </a>
      <a 
        href="mailto:tigerquant@missouri.edu" 
        class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>
