<script>
  import { onMount } from 'svelte';
  import boardData from '$lib/content/board.json';
  import alumniData from '$lib/content/alumni.json';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Executive Board | TigerQuant</title>
  <meta name="description" content="Meet the TigerQuant Executive Board - the leadership team driving innovation in quantitative finance education at the University of Missouri." />
  <meta property="og:title" content="Executive Board | TigerQuant" />
  <meta property="og:description" content="Meet the TigerQuant Executive Board - the leadership team driving innovation in quantitative finance education at the University of Missouri." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      Executive <span class="text-gold-500">Board</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      Meet the passionate leaders driving innovation in quantitative finance education at Mizzou
    </p>
  </div>
</section>

<!-- Officers Section -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Current Leadership
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Our dedicated officers work tirelessly to provide exceptional opportunities and resources for all members
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each boardData.officers as officer, index}
        <div class="group card-hover bg-surface rounded-xl p-6 border border-subtle animate-slide-up" style="animation-delay: {index * 100}ms">
          <!-- Photo Placeholder -->
          <div class="w-24 h-24 bg-gold-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg class="w-12 h-12 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <!-- Officer Info -->
          <div class="text-center mb-4">
            <h3 class="text-xl font-heading font-semibold text-white mb-1">{officer.name}</h3>
            <div class="text-gold-500 font-semibold mb-2">{officer.role}</div>
            <div class="text-muted text-sm mb-1">{officer.major}</div>
            <div class="text-muted text-sm">Class of {officer.gradYear}</div>
          </div>
          
          <!-- Bio -->
          <p class="text-muted text-sm leading-relaxed mb-4">
            {officer.bio}
          </p>
          
          <!-- Contact Links -->
          <div class="flex justify-center space-x-4">
            <a 
              href="mailto:{officer.email}" 
              class="w-8 h-8 bg-gold-500/20 hover:bg-gold-500/30 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="Email {officer.name}"
            >
              <svg class="w-4 h-4 text-gold-500 group-hover:text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a 
              href={officer.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 bg-gold-500/20 hover:bg-gold-500/30 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="LinkedIn profile for {officer.name}"
            >
              <svg class="w-4 h-4 text-gold-500 group-hover:text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Alumni Section -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Distinguished Alumni
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Our graduates are making their mark at top financial institutions and technology companies worldwide
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each alumniData.alumni as alum, index}
        <div class="group card-hover bg-elevated rounded-xl p-6 border border-subtle animate-slide-up" style="animation-delay: {index * 100}ms">
          <!-- Photo Placeholder -->
          <div class="w-20 h-20 bg-gold-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg class="w-10 h-10 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <!-- Alumni Info -->
          <div class="text-center mb-4">
            <h3 class="text-lg font-heading font-semibold text-white mb-1">{alum.name}</h3>
            <div class="text-gold-500 font-semibold text-sm mb-1">{alum.currentPosition}</div>
            <div class="text-muted text-sm mb-1">{alum.company}</div>
            <div class="text-muted text-xs">Class of {alum.graduationYear}</div>
          </div>
          
          <!-- Bio -->
          <p class="text-muted text-xs leading-relaxed mb-4">
            {alum.bio}
          </p>
          
          <!-- LinkedIn Link -->
          <div class="flex justify-center">
            <a 
              href={alum.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 bg-gold-500/20 hover:bg-gold-500/30 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="LinkedIn profile for {alum.name}"
            >
              <svg class="w-4 h-4 text-gold-500 group-hover:text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Leadership Philosophy Section -->
<section class="py-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Our Leadership Philosophy
    </h2>
    <p class="text-xl text-muted mb-8 leading-relaxed">
      We believe in servant leadership, where our primary goal is to empower every member to reach their full potential. 
      Our executive board is committed to creating an inclusive, innovative, and supportive environment that fosters 
      both personal and professional growth.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-heading font-semibold text-white mb-2">Inclusive Leadership</h3>
        <p class="text-muted text-sm">Creating opportunities for all members regardless of background or experience level.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-lg font-heading font-semibold text-white mb-2">Innovation Focus</h3>
        <p class="text-muted text-sm">Continuously exploring new technologies and methodologies in quantitative finance.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-heading font-semibold text-white mb-2">Mentorship</h3>
        <p class="text-muted text-sm">Providing guidance and support to help members achieve their career goals.</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-elevated">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Interested in Leadership?
    </h2>
    <p class="text-xl text-muted mb-8">
      We're always looking for passionate members to join our leadership team
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/join" 
        class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Join TigerQuant
      </a>
      <a 
        href="mailto:leadership@tigerquant.missouri.edu" 
        class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
      >
        Contact Leadership
      </a>
    </div>
  </div>
</section>