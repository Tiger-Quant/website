<script>
  import { onMount } from 'svelte';
  import portfoliosData from '$lib/content/portfolios.json';
  
  let mounted = false;
  let searchTerm = '';
  let selectedPortfolio = null;
  let filteredPortfolios = portfoliosData.portfolios;
  
  onMount(() => {
    mounted = true;
  });
  
  // Filter portfolios based on search term
  $: {
    if (searchTerm) {
      filteredPortfolios = portfoliosData.portfolios.filter(portfolio => 
        portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.strategy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPortfolios = portfoliosData.portfolios;
    }
  }
  
  function selectPortfolio(portfolio) {
    selectedPortfolio = portfolio;
  }
  
  function closePortfolio() {
    selectedPortfolio = null;
  }
  
  function formatNumber(num) {
    return num > 0 ? `+${num.toFixed(1)}%` : `${num.toFixed(1)}%`;
  }
</script>

<svelte:head>
  <title>Portfolios | TigerQuant</title>
  <meta name="description" content="Explore TigerQuant member portfolios and trading strategies. View performance metrics, holdings, and trading insights from our quantitative finance community." />
  <meta property="og:title" content="Portfolios | TigerQuant" />
  <meta property="og:description" content="Explore TigerQuant member portfolios and trading strategies. View performance metrics, holdings, and trading insights from our quantitative finance community." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black opacity-90"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
      Member <span class="text-gold-500">Portfolios</span>
    </h1>
    <p class="text-xl text-muted max-w-3xl mx-auto">
      Explore trading strategies and performance metrics from our quantitative finance community
    </p>
  </div>
</section>

<!-- Search and Filter Section -->
<section class="py-12 bg-elevated">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          bind:value={searchTerm}
          placeholder="Search by name, strategy, or role..."
          class="block w-full pl-10 pr-3 py-3 border border-subtle rounded-lg bg-surface text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
        />
      </div>
      <p class="text-sm text-muted mt-2 text-center">
        {filteredPortfolios.length} portfolio{filteredPortfolios.length !== 1 ? 's' : ''} found
      </p>
    </div>
  </div>
</section>

<!-- Portfolios Grid -->
<section class="py-20 bg-surface">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredPortfolios.length === 0}
      <div class="text-center py-12">
        <svg class="w-16 h-16 text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
        </svg>
        <h3 class="text-xl font-heading font-semibold text-white mb-2">No portfolios found</h3>
        <p class="text-muted">Try adjusting your search terms</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredPortfolios as portfolio, index}
          <div 
            class="group card-hover bg-elevated rounded-xl p-6 border border-subtle cursor-pointer animate-slide-up" 
            style="animation-delay: {index * 100}ms"
            on:click={() => selectPortfolio(portfolio)}
            on:keydown={(e) => e.key === 'Enter' && selectPortfolio(portfolio)}
            role="button"
            tabindex="0"
          >
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-heading font-semibold text-white">{portfolio.name}</h3>
                <p class="text-sm text-muted">{portfolio.role}</p>
              </div>
              <div class="text-right">
                <div class="text-gold-500 font-semibold text-lg">
                  {formatNumber(portfolio.performance.totalReturn)}
                </div>
                <div class="text-xs text-muted">Total Return</div>
              </div>
            </div>
            
            <!-- Strategy -->
            <div class="mb-4">
              <div class="text-sm text-muted mb-1">Strategy</div>
              <div class="text-white font-medium">{portfolio.strategy}</div>
            </div>
            
            <!-- Performance Metrics -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div class="text-xs text-muted mb-1">Sharpe Ratio</div>
                <div class="text-white font-semibold">{portfolio.performance.sharpeRatio}</div>
              </div>
              <div>
                <div class="text-xs text-muted mb-1">Max Drawdown</div>
                <div class="text-white font-semibold">{formatNumber(portfolio.performance.maxDrawdown)}</div>
              </div>
            </div>
            
            <!-- Bio Preview -->
            <p class="text-sm text-muted mb-4 line-clamp-2">
              {portfolio.bio}
            </p>
            
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
    {/if}
  </div>
</section>

<!-- Portfolio Detail Modal -->
{#if selectedPortfolio}
  <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" 
        on:click={closePortfolio}
        on:keydown={(e) => e.key === 'Escape' && closePortfolio()}
        role="button"
        tabindex="0"
        aria-label="Close modal"
      ></div>
      
      <!-- Modal Content -->
      <div class="inline-block align-bottom bg-elevated rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div class="bg-elevated px-6 py-4 border-b border-subtle">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-heading font-semibold text-white">{selectedPortfolio.name}</h3>
              <p class="text-muted">{selectedPortfolio.role} • {selectedPortfolio.strategy}</p>
            </div>
            <button
              on:click={closePortfolio}
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
          <!-- Performance Overview -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-surface rounded-lg border border-subtle">
              <div class="text-2xl font-bold text-gold-500 mb-1">
                {formatNumber(selectedPortfolio.performance.totalReturn)}
              </div>
              <div class="text-sm text-muted">Total Return</div>
            </div>
            <div class="text-center p-4 bg-surface rounded-lg border border-subtle">
              <div class="text-2xl font-bold text-white mb-1">
                {selectedPortfolio.performance.sharpeRatio}
              </div>
              <div class="text-sm text-muted">Sharpe Ratio</div>
            </div>
            <div class="text-center p-4 bg-surface rounded-lg border border-subtle">
              <div class="text-2xl font-bold text-white mb-1">
                {formatNumber(selectedPortfolio.performance.maxDrawdown)}
              </div>
              <div class="text-sm text-muted">Max Drawdown</div>
            </div>
            <div class="text-center p-4 bg-surface rounded-lg border border-subtle">
              <div class="text-2xl font-bold text-white mb-1">
                {selectedPortfolio.performance.volatility}%
              </div>
              <div class="text-sm text-muted">Volatility</div>
            </div>
          </div>
          
          <!-- Chart Placeholder -->
          <div class="mb-8">
            <h4 class="text-lg font-heading font-semibold text-white mb-4">Performance Chart</h4>
            <div class="bg-surface rounded-lg border border-subtle p-6 h-64 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p class="text-muted">Interactive chart would be displayed here</p>
                <p class="text-sm text-muted mt-1">Mock data for demonstration purposes</p>
              </div>
            </div>
          </div>
          
          <!-- Holdings Table -->
          <div class="mb-8">
            <h4 class="text-lg font-heading font-semibold text-white mb-4">Top Holdings</h4>
            <div class="bg-surface rounded-lg border border-subtle overflow-hidden">
              <table class="min-w-full divide-y divide-subtle">
                <thead class="bg-elevated">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Symbol</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Weight</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Return</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-subtle">
                  {#each selectedPortfolio.holdings as holding}
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {holding.symbol}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-muted">
                        {holding.weight}%
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm">
                        <span class="text-sm {holding.return >= 0 ? 'text-green-400' : 'text-red-400'}">
                          {formatNumber(holding.return)}
                        </span>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Bio -->
          <div>
            <h4 class="text-lg font-heading font-semibold text-white mb-4">About This Strategy</h4>
            <p class="text-muted leading-relaxed">{selectedPortfolio.bio}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>