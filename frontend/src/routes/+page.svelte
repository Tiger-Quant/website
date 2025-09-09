<script>
    // Future use for important animation libraries.
    import logo from '$lib/assets/logo-no-background.png'

    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

</script>

<svelte:head>
    <title>TigerQuant | Quantitative Finance Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-container">
    <!-- Header Navigation -->
    <header class="header">
        <div class="header-container">
            <div class="header-content">
                <!-- Logo and Name -->
                <div class="logo-section">
                    <img src={logo} alt="TigerQuant Logo" class="logo-image" />
                    <h1 class="site-title">TigerQuant</h1>
                </div>

                <!-- Desktop Navigation -->
                <nav class="desktop-nav">
                    <a href="/" class="nav-link">About Us</a>
                    <a href="/executive" class="nav-link">Executive Board</a>
                    <a href="/portfolios" class="nav-link">Portfolios</a>
                    <a href="/competitions" class="nav-link">Previous Competitions</a>
                </nav>

                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" on:click={toggleMenu}>
                    {#if isMenuOpen}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    {:else}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    {/if}
                </button>
            </div>

            <!-- Mobile Navigation -->
            {#if isMenuOpen}
                <div class="mobile-nav">
                    <div class="mobile-nav-content">
                        <a href="/" class="mobile-nav-link">About Us</a>
                        <a href="/executive" class="mobile-nav-link">Executive Board</a>
                        <a href="/portfolios" class="mobile-nav-link">Portfolios</a>
                        <a href="/competitions" class="mobile-nav-link">Previous Competitions</a>
                    </div>
                </div>
            {/if}
        </div>
    </header>

    <!-- About Us Section -->
    <section class="about-section" id="about">
        <div class="about-container">
            <h2 class="about-title">About Us</h2>
            <div class="about-content">
                <p>
                    This body of text will be filled in by the president who knows what he wants to say to 
                    people who know nothing about our club and can find out more by reading this section. 
                    TigerQuant is dedicated to exploring quantitative finance, developing trading strategies, 
                    and competing in financial modeling competitions while building a strong community of 
                    future finance professionals.
                </p>
            </div>
        </div>
    </section>

    <!-- Action Cards Section -->
    <section class="cards-section">
        <div class="cards-container">
            <!-- Learn Card -->
            <div class="action-card learn-card">
                <h3 class="card-corner-title">Learn</h3>
                <p class="card-center-text">Discover our approach to quantitative finance, trading strategies, and market analysis techniques.</p>
            </div>

            <!-- Connect Card -->
            <div class="action-card connect-card">
                <h3 class="card-corner-title">Connect</h3>
                <p class="card-center-text">Join a network of passionate students exploring the intersection of mathematics, technology, and finance.</p>
            </div>

            <!-- Compete Card -->
            <div class="action-card compete-card">
                <h3 class="card-corner-title">Compete</h3>
                <p class="card-center-text">Participate in trading competitions and showcase your quantitative finance skills against top talent.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <a href="https://engage.missouri.edu/tigerquant/home/" target="_blank" class="join-us-link">
                Join Us
            </a>
        </div>
    </footer>
</div>

<style>
    /* Global Styles */
    :global(body) {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        color: #334155;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }

    /* Page container */
    .page-container {
        min-height: 100vh;
    }

    /* Header Styles */
    .header {
        background-color: white;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #e2e8f0;
        position: sticky;
        top: 0;
        z-index: 50;
    }

    .header-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }

    /* Logo Section */
    .logo-section {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .logo-image {
        height: 2rem;
        width: auto;
        object-fit: contain;
    }

    .site-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0;
    }

    /* Desktop Navigation */
    .desktop-nav {
        display: none;
        gap: 2rem;
    }

    @media (min-width: 768px) {
        .desktop-nav {
            display: flex;
        }
    }

    .nav-link {
        color: #475569;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .nav-link:hover {
        color: #8937f3;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: block;
        padding: 0.5rem;
        border-radius: 0.375rem;
        color: #475569;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .mobile-menu-btn:hover {
        color: #8937f3;
        background-color: #f1f5f9;
    }

    @media (min-width: 768px) {
        .mobile-menu-btn {
            display: none;
        }
    }

    /* Mobile Navigation */
    .mobile-nav {
        border-top: 1px solid #e2e8f0;
        padding: 1rem 0;
    }

    .mobile-nav-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .mobile-nav-link {
        color: #475569;
        font-weight: 500;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        transition: color 0.2s ease;
    }

    .mobile-nav-link:hover {
        color: #8937f3;
    }

    /* About Us Section */
    .about-section {
        padding: 4rem 1rem;
    }

    .about-container {
        max-width: 1024px;
        margin: 0 auto;
        text-align: center;
    }

    .about-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .about-title {
            font-size: 3.5rem;
        }
    }

    .about-content {
        background-color: white;
        border-radius: 0.75rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid #08c78e;
        padding: 2rem;
    }

    @media (min-width: 768px) {
        .about-content {
            padding: 3rem;
        }
    }

    .about-content p {
        font-size: 1.125rem;
        line-height: 1.75;
        color: #64748b;
        margin: 0;
    }

    /* Action Cards Section */
    .cards-section {
        padding: 4rem 1rem;
        background-color: #f8fafc;
    }

    .cards-container {
        max-width: 1152px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Action Cards */
    .action-card {
        border-radius: 0.75rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        padding: 2rem;
        transition: all 0.3s ease;
        cursor: pointer;
        height: 150px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
    }

    .action-card:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    .learn-card {
        background-color: #08c78e;
    }

    .learn-card:hover {
        background-color: #06b77d;
    }

    .connect-card {
        background-color: #8937f3;
    }

    .connect-card:hover {
        background-color: #7c2de8;
    }

    .compete-card {
        background-color: #f3bd37;
    }

    .compete-card:hover {
        background-color: #f1b82d;
    }

    /* Card Title in Corner */
    .card-corner-title {
        position: absolute;
        top: 1rem;
        left: 1.5rem;
        font-size: 2rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0;
    }

    /* Card Text in Center */
    .card-center-text {
        color: #1e293b;
        font-size: 1rem;
        line-height: 1.6;
        text-align: center;
        margin: 0;
        max-width: 80%;
    }

    /* Footer */
    .footer {
        background-color: white;
        border-top: 1px solid #e2e8f0;
        padding: 2rem 1rem;
    }

    .footer-content {
        max-width: 1280px;
        margin: 0 auto;
        text-align: center;
    }

    .join-us-link {
        display: inline-block;
        background: linear-gradient(135deg, #08c78e, #8937f3);
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
    }

    .join-us-link:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(137, 55, 243, 0.3);
    }
</style>