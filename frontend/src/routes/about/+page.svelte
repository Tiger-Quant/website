<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>About Us | TigerQuant</title>
  <meta name="description" content="Learn about TigerQuant, University of Missouri's premier quantitative finance club. Our mission, values, and commitment to excellence in quantitative finance education." />
  <meta property="og:title" content="About Us | TigerQuant" />
  <meta property="og:description" content="Learn about TigerQuant, University of Missouri's premier quantitative finance club. Our mission, values, and commitment to excellence in quantitative finance education." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      About <span class="text-gold-500">TigerQuant</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      University of Missouri's premier quantitative finance club, dedicated to excellence in financial education and innovation.
    </p>
  </div>
</section>

<!-- Mission Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="animate-slide-up">
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
          Our Mission
        </h2>
        <p class="text-lg text-muted mb-6 leading-relaxed">
          TigerQuant is dedicated to fostering excellence in quantitative finance education and research. 
          We provide students with the knowledge, tools, and opportunities to excel in the rapidly evolving 
          world of algorithmic trading, risk management, and financial technology.
        </p>
        <p class="text-lg text-muted mb-8 leading-relaxed">
          Through hands-on learning, industry partnerships, and competitive opportunities, we prepare 
          the next generation of quantitative finance professionals to tackle complex market challenges 
          and drive innovation in the financial industry.
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="bg-gold-500/20 text-gold-500 px-4 py-2 rounded-lg font-semibold">
            Excellence
          </div>
          <div class="bg-gold-500/20 text-gold-500 px-4 py-2 rounded-lg font-semibold">
            Innovation
          </div>
          <div class="bg-gold-500/20 text-gold-500 px-4 py-2 rounded-lg font-semibold">
            Community
          </div>
        </div>
      </div>
      
      <div class="animate-slide-up">
        <div class="bg-surface rounded-xl p-8 border border-subtle">
          <h3 class="text-2xl font-heading font-semibold text-white mb-6">Our Values</h3>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-2">Academic Excellence</h4>
                <p class="text-muted text-sm">Maintaining the highest standards in quantitative finance education and research.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-2">Innovation & Technology</h4>
                <p class="text-muted text-sm">Embracing cutting-edge technologies and methodologies in quantitative finance.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-2">Collaborative Learning</h4>
                <p class="text-muted text-sm">Fostering a supportive environment where members learn from each other.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-2">Professional Development</h4>
                <p class="text-muted text-sm">Preparing members for successful careers in quantitative finance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Timeline Section -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Our Journey
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        From humble beginnings to becoming Missouri's premier quantitative finance organization
      </p>
    </div>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-500/30"></div>
      
      <div class="space-y-12">
        <!-- 2019 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8 text-right">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2019</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">Foundation</h3>
              <p class="text-muted">TigerQuant was founded by a group of passionate students with a vision to bring quantitative finance education to Mizzou.</p>
            </div>
          </div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8"></div>
        </div>
        
        <!-- 2020 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8"></div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2020</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">First Competition</h3>
              <p class="text-muted">We participated in our first CFA Institute Research Challenge, marking the beginning of our competitive journey.</p>
            </div>
          </div>
        </div>
        
        <!-- 2021 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8 text-right">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2021</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">Paper Trading Platform</h3>
              <p class="text-muted">Launched our proprietary paper trading platform, allowing members to practice strategies with real market data.</p>
            </div>
          </div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8"></div>
        </div>
        
        <!-- 2022 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8"></div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2022</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">Industry Partnerships</h3>
              <p class="text-muted">Established partnerships with leading financial institutions and fintech companies for internships and mentorship.</p>
            </div>
          </div>
        </div>
        
        <!-- 2023 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8 text-right">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2023</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">National Recognition</h3>
              <p class="text-muted">Achieved top 10 placement in the CFA Institute Research Challenge and expanded to 100+ active members.</p>
            </div>
          </div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8"></div>
        </div>
        
        <!-- 2024 -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-8"></div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-surface"></div>
          <div class="w-1/2 pl-8">
            <div class="bg-elevated rounded-xl p-6 border border-subtle">
              <div class="text-gold-500 font-semibold mb-2">2024</div>
              <h3 class="text-xl font-heading font-semibold text-white mb-2">Continued Growth</h3>
              <p class="text-muted">Reached 160+ members and launched advanced machine learning workshops and algorithmic trading competitions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="py-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        By the Numbers
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Our impact and growth in quantitative finance education
      </p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">160+</div>
        <div class="text-muted font-semibold">Active Members</div>
        <div class="text-sm text-muted mt-1">Across all majors and years</div>
      </div>
      
      <div class="text-center">
        <div class="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">15+</div>
        <div class="text-muted font-semibold">Competitions</div>
        <div class="text-sm text-muted mt-1">National and international</div>
      </div>
      
      <div class="text-center">
        <div class="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">$50K+</div>
        <div class="text-muted font-semibold">Paper Trading Volume</div>
        <div class="text-sm text-muted mt-1">Monthly trading activity</div>
      </div>
      
      <div class="text-center">
        <div class="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">95%</div>
        <div class="text-muted font-semibold">Career Success Rate</div>
        <div class="text-sm text-muted mt-1">In finance and tech roles</div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-elevated">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Ready to Join Our Community?
    </h2>
    <p class="text-xl text-muted mb-8">
      Become part of Missouri's most innovative quantitative finance organization
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/join" 
        class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Join TigerQuant
      </a>
      <a 
        href="/executive" 
        class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
      >
        Meet Our Team
      </a>
    </div>
  </div>
</section>


