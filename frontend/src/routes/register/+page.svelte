<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    major: '',
    year: '',
    experience: '',
    interests: []
  };
  
  let interests = [
    'Algorithmic Trading',
    'Risk Management',
    'Portfolio Optimization',
    'Machine Learning',
    'Options Trading',
    'Cryptocurrency',
    'Quantitative Research',
    'Financial Modeling'
  ];
  
  let isSubmitting = false;
  let submitted = false;
  
  onMount(() => {
    mounted = true;
  });
  
  function toggleInterest(interest) {
    if (formData.interests.includes(interest)) {
      formData.interests = formData.interests.filter(i => i !== interest);
    } else {
      formData.interests = [...formData.interests, interest];
    }
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    isSubmitting = false;
    submitted = true;
  }
</script>

<svelte:head>
  <title>Paper Trading Registration | TigerQuant</title>
  <meta name="description" content="Register for TigerQuant's paper trading platform. Practice trading strategies with real market data in a risk-free environment." />
  <meta property="og:title" content="Paper Trading Registration | TigerQuant" />
  <meta property="og:description" content="Register for TigerQuant's paper trading platform. Practice trading strategies with real market data in a risk-free environment." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      Paper Trading <span class="text-gold-500">Registration</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      Practice trading strategies with real market data in a risk-free environment
    </p>
  </div>
</section>

<!-- Registration Form Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if submitted}
      <!-- Success Message -->
      <div class="text-center">
        <div class="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-3xl font-heading font-bold text-white mb-4">Registration Successful!</h2>
        <p class="text-xl text-muted mb-8">
          Thank you for registering for our paper trading platform. You'll receive an email with access instructions within 24 hours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/portfolios" 
            class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            View Sample Portfolios
          </a>
          <a 
            href="/join" 
            class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Join TigerQuant
          </a>
        </div>
      </div>
    {:else}
      <!-- Registration Form -->
      <div class="bg-surface rounded-xl p-8 border border-subtle">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-heading font-semibold text-white mb-2">Get Started with Paper Trading</h2>
          <p class="text-muted">Fill out the form below to access our paper trading platform</p>
        </div>
        
        <form on:submit={handleSubmit} class="space-y-6">
          <!-- Personal Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-white mb-2">First Name *</label>
              <input
                type="text"
                id="firstName"
                bind:value={formData.firstName}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label for="lastName" class="block text-sm font-medium text-white mb-2">Last Name *</label>
              <input
                type="text"
                id="lastName"
                bind:value={formData.lastName}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-medium text-white mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="your.email@missouri.edu"
              />
            </div>
            
            <div>
              <label for="studentId" class="block text-sm font-medium text-white mb-2">Student ID *</label>
              <input
                type="text"
                id="studentId"
                bind:value={formData.studentId}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Enter your student ID"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="major" class="block text-sm font-medium text-white mb-2">Major *</label>
              <input
                type="text"
                id="major"
                bind:value={formData.major}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="e.g., Computer Science, Finance, Mathematics"
              />
            </div>
            
            <div>
              <label for="year" class="block text-sm font-medium text-white mb-2">Academic Year *</label>
              <select
                id="year"
                bind:value={formData.year}
                required
                class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              >
                <option value="">Select your year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
          </div>
          
          <div>
            <label for="experience" class="block text-sm font-medium text-white mb-2">Trading Experience *</label>
            <select
              id="experience"
              bind:value={formData.experience}
              required
              class="w-full px-4 py-3 border border-subtle rounded-lg bg-elevated text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner - No prior trading experience</option>
              <option value="Some">Some - Limited trading experience</option>
              <option value="Intermediate">Intermediate - Regular trading experience</option>
              <option value="Advanced">Advanced - Extensive trading experience</option>
            </select>
          </div>
          
          <fieldset>
            <legend class="block text-sm font-medium text-white mb-3">Areas of Interest (Select all that apply)</legend>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              {#each interests as interest}
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    on:change={() => toggleInterest(interest)}
                    class="w-4 h-4 text-gold-500 bg-elevated border-subtle rounded focus:ring-gold-500 focus:ring-2"
                  />
                  <span class="text-sm text-muted">{interest}</span>
                </label>
              {/each}
            </div>
          </fieldset>
          
          <!-- Terms and Conditions -->
          <div class="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              required
              class="w-4 h-4 text-gold-500 bg-elevated border-subtle rounded focus:ring-gold-500 focus:ring-2 mt-1"
            />
            <label for="terms" class="text-sm text-muted">
              I agree to the <button type="button" class="text-gold-500 hover:text-gold-400 underline">Terms of Service</button> and 
              <button type="button" class="text-gold-500 hover:text-gold-400 underline">Privacy Policy</button>. I understand that this is 
              a paper trading platform for educational purposes only.
            </label>
          </div>
          
          <!-- Submit Button -->
          <div class="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 disabled:cursor-not-allowed text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
            >
              {#if isSubmitting}
                <div class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              {:else}
                Register for Paper Trading
              {/if}
            </button>
          </div>
        </form>
      </div>
    {/if}
  </div>
</section>

<!-- Features Section -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Paper Trading Features
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Everything you need to practice and perfect your trading strategies
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Real Market Data</h3>
        <p class="text-muted">Access live market data and historical information for accurate simulation</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Virtual Capital</h3>
        <p class="text-muted">Start with $100,000 virtual capital to test your strategies risk-free</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Performance Analytics</h3>
        <p class="text-muted">Track your performance with detailed analytics and reporting tools</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Algorithmic Trading</h3>
        <p class="text-muted">Test and deploy algorithmic trading strategies with our API</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Community Features</h3>
        <p class="text-muted">Share strategies and compete with other TigerQuant members</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Educational Resources</h3>
        <p class="text-muted">Access tutorials, guides, and best practices for trading</p>
      </div>
    </div>
  </div>
</section>
