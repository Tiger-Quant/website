<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo-no-background.png';
  import '../app.css';

  let isMenuOpen = false;
  let theme = 'dark';

  // Theme management
  onMount(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme();
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    applyTheme();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  // Close menu when route changes
  $: if ($page) {
    isMenuOpen = false;
  }
</script>

<svelte:head>
  <title>TigerQuant | Quantitative Finance Club</title>
  <meta name="description" content="TigerQuant - University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<div class="min-h-screen bg-surface transition-colors duration-300">
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-elevated border-b border-subtle backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Site Title -->
        <div class="flex items-center space-x-3">
          <img src={logo} alt="TigerQuant Logo" class="h-8 w-auto" />
          <h1 class="text-xl font-heading font-semibold text-gold">TigerQuant</h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/" class="nav-link {($page.url.pathname === '/' || $page.url.pathname === '/about') ? 'active' : ''}">
            Home
          </a>
          <a href="/about" class="nav-link {$page.url.pathname === '/about' ? 'active' : ''}">
            About Us
          </a>
          <a href="/executive" class="nav-link {$page.url.pathname === '/executive' ? 'active' : ''}">
            Executive Board
          </a>
          <a href="/portfolios" class="nav-link {$page.url.pathname === '/portfolios' ? 'active' : ''}">
            Portfolios
          </a>
          <a href="/competitions" class="nav-link {$page.url.pathname === '/competitions' ? 'active' : ''}">
            Competitions
          </a>
          <a href="/join" class="nav-link {$page.url.pathname === '/join' ? 'active' : ''}">
            Join
          </a>
          <a href="/register" class="nav-link {$page.url.pathname === '/register' ? 'active' : ''}">
            Paper Trading
          </a>
        </nav>

        <!-- Theme Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            on:click={toggleTheme}
            class="p-2 rounded-lg bg-surface hover:bg-gold hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Toggle theme"
          >
            {#if theme === 'dark'}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            {/if}
          </button>

          <!-- Mobile Menu Button -->
          <button
            on:click={toggleMenu}
            class="md:hidden p-2 rounded-lg bg-surface hover:bg-gold hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Toggle menu"
          >
            {#if isMenuOpen}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            {:else}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {/if}
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      {#if isMenuOpen}
        <div class="md:hidden border-t border-subtle py-4">
          <nav class="flex flex-col space-y-2">
            <a href="/" class="mobile-nav-link {($page.url.pathname === '/' || $page.url.pathname === '/about') ? 'active' : ''}" on:click={closeMenu}>
              Home
            </a>
            <a href="/about" class="mobile-nav-link {$page.url.pathname === '/about' ? 'active' : ''}" on:click={closeMenu}>
              About Us
            </a>
            <a href="/executive" class="mobile-nav-link {$page.url.pathname === '/executive' ? 'active' : ''}" on:click={closeMenu}>
              Executive Board
            </a>
            <a href="/portfolios" class="mobile-nav-link {$page.url.pathname === '/portfolios' ? 'active' : ''}" on:click={closeMenu}>
              Portfolios
            </a>
            <a href="/competitions" class="mobile-nav-link {$page.url.pathname === '/competitions' ? 'active' : ''}" on:click={closeMenu}>
              Competitions
            </a>
            <a href="/join" class="mobile-nav-link {$page.url.pathname === '/join' ? 'active' : ''}" on:click={closeMenu}>
              Join
            </a>
            <a href="/register" class="mobile-nav-link {$page.url.pathname === '/register' ? 'active' : ''}" on:click={closeMenu}>
              Paper Trading
            </a>
          </nav>
        </div>
      {/if}
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="bg-elevated border-t border-subtle mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Description -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img src={logo} alt="TigerQuant Logo" class="h-8 w-auto" />
            <h3 class="text-lg font-heading font-semibold text-gold">TigerQuant</h3>
          </div>
          <p class="text-muted text-sm">
            University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="font-heading font-semibold text-gold">Quick Links</h4>
          <div class="space-y-2">
            <a href="/about" class="block text-muted hover:text-gold transition-colors text-sm">About Us</a>
            <a href="/executive" class="block text-muted hover:text-gold transition-colors text-sm">Executive Board</a>
            <a href="/portfolios" class="block text-muted hover:text-gold transition-colors text-sm">Portfolios</a>
            <a href="/competitions" class="block text-muted hover:text-gold transition-colors text-sm">Competitions</a>
            <a href="/join" class="block text-muted hover:text-gold transition-colors text-sm">Join Us</a>
          </div>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-heading font-semibold text-gold">Contact</h4>
          <div class="space-y-2">
            <p class="text-muted text-sm">University of Missouri</p>
            <p class="text-muted text-sm">Columbia, MO</p>
            <a href="mailto:tigerquant@missouri.edu" class="block text-muted hover:text-gold transition-colors text-sm">
              tigerquant@missouri.edu
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-subtle mt-8 pt-8 text-center">
        <p class="text-muted text-sm">
          © 2024 TigerQuant. All rights reserved. | University of Missouri
        </p>
      </div>
    </div>
  </footer>
</div>

<style>
  .nav-link {
    @apply text-muted hover:text-gold transition-colors duration-200 font-medium relative;
  }

  .nav-link.active {
    @apply text-gold;
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--gold), var(--gold-muted));
  }

  .mobile-nav-link {
    @apply block px-4 py-2 text-muted hover:text-gold hover:bg-surface rounded-lg transition-all duration-200 font-medium;
  }

  .mobile-nav-link.active {
    @apply text-gold bg-surface;
  }
</style>
