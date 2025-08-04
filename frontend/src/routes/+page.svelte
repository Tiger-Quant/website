<script>
    // Future use for important animation libraries.
</script>

<svelte:head>
    <title>TigerQuant | Quantitative Finance Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-container">
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">TigerQuant</h1>
            <p class="hero-subtitle">
                At the intersection of finance, mathematics, and technology.
            </p>
            <button class="hero-button">
                Join Our Community
            </button>
        </div>
    </section>

    <section class="content-section mission">
        <div class="mission-text">
            <h2>Our Mission</h2>
            <p>
                Our mission is to bring together students from finance, mathematics, and computer science to explore the cutting edge of quantitative finance. We provide a collaborative environment for learning, practical application, and professional development.
            </p>
        </div>
        <div class="mission-visual">
            </div>
    </section>

    <section class="content-section">
        <h2>What We Do</h2>
        <div class="pillars-container">
            <div class="pillar-card">
                <h3>Learn 📚</h3>
                <p>We host workshops and lectures on topics ranging from algorithmic trading strategies to financial data analysis and machine learning models.</p>
            </div>
            <div class="pillar-card">
                <h3>Trade 📈</h3>
                <p>Members get hands-on experience by developing and backtesting trading algorithms in a simulated, real-time paper trading environment.</p>
            </div>
            <div class="pillar-card">
                <h3>Compete 🏆</h3>
                <p>We form teams to participate in national and international quant finance competitions, applying our skills against the best students in the world.</p>
            </div>
        </div>
    </section>
</div>

<style>
    /* Global Styles */
    :global(body) {
        background-color: #2C2A29; /* Mizzou Black */
        color: #F9FAFB;
        font-family: 'Inter', sans-serif;
        margin: 0;
    }

    /* Page container to manage layout */
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Hero Section Styles */
    .hero {
        width: 100%;
        min-height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative; 
    }

    .hero-content {
        z-index: 2;
    }

    .hero-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #FFFFFF;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        color: #D1D5DB; 
        margin-bottom: 2rem;
    }

    .hero-button {
        background-color: #F1B82D; /* Mizzou Gold */
        color: #2C2A29; /* Mizzou Black text on button */
        border: none;
        border-radius: 8px;
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, background-color 0.2s;
    }

    .hero-button:hover {
        background-color: #ffcb4f; /* A slightly lighter Gold on hover */
        transform: scale(1.05);
    }
    
    /* NEW STYLES START HERE */

    .content-section {
        width: 100%;
        max-width: 1100px;
        padding: 4rem 2rem;
        box-sizing: border-box;
    }

    .content-section h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 3rem;
        color: #FFFFFF;
    }
    
    /* Mission Section Layout */
    .mission {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
    
    .mission-text {
        flex: 1;
    }
    
    .mission-text h2 {
        text-align: left;
    }
    
    .mission-text p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #D1D5DB;
    }
    
    .mission-visual {
        flex: 1;
        height: 300px;
        background-color: rgba(241, 184, 45, 0.1); /* Subtle gold box */
        border: 1px dashed #F1B82D;
        border-radius: 12px;
    }

    /* Pillars (What We Do) Section */
    .pillars-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    
    .pillar-card {
        background-color: #3b3837; /* Slightly lighter than main bg */
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        border: 1px solid #4d4a48;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .pillar-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    .pillar-card h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.75rem;
        margin-top: 0;
        margin-bottom: 1rem;
        color: #F1B82D; /* Mizzou Gold for the titles */
    }
    
    .pillar-card p {
        font-size: 1rem;
        line-height: 1.6;
        color: #D1D5DB;
    }
</style>