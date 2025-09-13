<script>
  import { onMount } from 'svelte';
  import competitionsData from '$lib/content/competitions.json';
  
  let mounted = false;
  let selectedCompetition = null;
  
  onMount(() => {
    mounted = true;
  });
  
  function selectCompetition(competition) {
    selectedCompetition = competition;
  }
  
  function closeCompetition() {
    selectedCompetition = null;
  }
  
  function getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'text-blue-400 bg-blue-500/20';
      case 'ongoing':
        return 'text-green-400 bg-green-500/20';
      case 'completed':
        return 'text-muted bg-muted/20';
      default:
        return 'text-muted bg-muted/20';
    }
  }
</script>

<svelte:head>
  <title>Competitions | TigerQuant</title>
  <meta name="description" content="Participate in prestigious quantitative finance competitions with TigerQuant. Join CFA Research Challenge, trading competitions, and FinTech innovation challenges." />
  <meta property="og:title" content="Competitions | TigerQuant" />
  <meta property="og:description" content="Participate in prestigious quantitative finance competitions with TigerQuant. Join CFA Research Challenge, trading competitions, and FinTech innovation challenges." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      Trading <span class="text-gold-500">Competitions</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      Test your skills against top talent in prestigious quantitative finance competitions
    </p>
  </div>
</section>

<!-- Competitions Grid -->
<section class="py-20 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Current & Upcoming Competitions
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        Join our team in these prestigious competitions and showcase your quantitative finance expertise
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each competitionsData.competitions as competition, index}
        <div 
          class="group card-hover bg-surface rounded-xl p-6 border border-subtle animate-slide-up cursor-pointer" 
          style="animation-delay: {index * 200}ms"
          on:click={() => selectCompetition(competition)}
          on:keydown={(e) => e.key === 'Enter' && selectCompetition(competition)}
          role="button"
          tabindex="0"
        >
          <!-- Competition Image Placeholder -->
          <div class="w-full h-48 bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-lg mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          
          <!-- Competition Info -->
          <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-heading font-semibold text-white">{competition.title}</h3>
              <span class="px-3 py-1 rounded-full text-xs font-semibold {getStatusColor(competition.status)}">
                {competition.status}
              </span>
            </div>
            <p class="text-gold-500 font-medium text-sm mb-2">{competition.host} • {competition.year}</p>
            <p class="text-muted text-sm leading-relaxed line-clamp-3">
              {competition.description}
            </p>
          </div>
          
          <!-- Competition Stats -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div class="text-xs text-muted mb-1">Prize</div>
              <div class="text-white font-semibold text-sm">{competition.prize}</div>
            </div>
            <div>
              <div class="text-xs text-muted mb-1">Participants</div>
              <div class="text-white font-semibold text-sm">{competition.participants}</div>
            </div>
          </div>
          
          <!-- View Details Button -->
          <div class="flex items-center text-gold-500 text-sm font-medium group-hover:text-gold-400">
            View Details
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Competition Detail Modal -->
{#if selectedCompetition}
  <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" 
        on:click={closeCompetition}
        on:keydown={(e) => e.key === 'Escape' && closeCompetition()}
        role="button"
        tabindex="0"
        aria-label="Close modal"
      ></div>
      
      <!-- Modal Content -->
      <div class="inline-block align-bottom bg-elevated rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <div class="bg-elevated px-6 py-4 border-b border-subtle">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-heading font-semibold text-white">{selectedCompetition.title}</h3>
              <p class="text-muted">{selectedCompetition.host} • {selectedCompetition.year}</p>
            </div>
            <button
              on:click={closeCompetition}
              class="text-muted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="bg-elevated px-6 py-6">
          <!-- Competition Image -->
          <div class="w-full h-48 bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-lg mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          
          <!-- Description -->
          <div class="mb-6">
            <h4 class="text-lg font-heading font-semibold text-white mb-3">About This Competition</h4>
            <p class="text-muted leading-relaxed">{selectedCompetition.description}</p>
          </div>
          
          <!-- Competition Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="text-lg font-heading font-semibold text-white mb-3">Competition Details</h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-muted">Status:</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold {getStatusColor(selectedCompetition.status)}">
                    {selectedCompetition.status}
                  </span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Prize:</span>
                  <span class="text-white font-semibold">{selectedCompetition.prize}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Participants:</span>
                  <span class="text-white font-semibold">{selectedCompetition.participants}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Duration:</span>
                  <span class="text-white font-semibold">{selectedCompetition.duration}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-heading font-semibold text-white mb-3">Requirements</h4>
              <p class="text-muted text-sm leading-relaxed">{selectedCompetition.requirements}</p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button class="flex-1 bg-gold-500 hover:bg-gold-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Register Interest
            </button>
            <button class="flex-1 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Past Achievements Section -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
        Our Track Record
      </h2>
      <p class="text-xl text-muted max-w-3xl mx-auto">
        TigerQuant has consistently performed at the highest levels in national and international competitions
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Top 10 Finish</h3>
        <p class="text-muted">CFA Institute Research Challenge 2023</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Best Algorithm</h3>
        <p class="text-muted">Quantitative Trading Competition 2022</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">Innovation Award</h3>
        <p class="text-muted">FinTech Innovation Challenge 2023</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
      Ready to Compete?
    </h2>
    <p class="text-xl text-muted mb-8">
      Join our competition teams and represent TigerQuant on the national stage
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/join" 
        class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Join Competition Team
      </a>
      <a 
        href="mailto:competitions@tigerquant.missouri.edu" 
        class="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
      >
        Contact Competition Director
      </a>
    </div>
  </div>
</section>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>