# TigerQuant Website

A modern, professional website for the University of Missouri's quantitative finance club, built with SvelteKit and Tailwind CSS.

## Features

- **Dark-first Design**: Professional dark theme with light/dark toggle
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and Open Graph support
- **Analytics Ready**: Plausible and Google Analytics 4 support
- **Content Management**: JSON-based content for easy updates

## Design System

The website uses a strict color palette:
- **Black**: Primary background and text
- **White**: Secondary text and backgrounds
- **Gold (#FDB719)**: Accent color for CTAs, links, and highlights

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment to Netlify.

## Content Management

### Updating Content

Content is managed through JSON files in `src/lib/content/`:

- `board.json` - Executive board members
- `alumni.json` - Alumni information
- `competitions.json` - Competition details
- `portfolios.json` - Member portfolios and performance data

### Adding New Members

1. Edit `src/lib/content/board.json`
2. Add member information following the existing format
3. Commit and push changes

### Updating Competitions

1. Edit `src/lib/content/competitions.json`
2. Add or update competition details
3. Update status, dates, and descriptions as needed

## Analytics

### Enabling Analytics

Analytics are disabled by default. To enable:

1. Edit `src/lib/utils/analytics.js`
2. Set `enabled: true`
3. Choose your provider: `'plausible'` or `'ga4'`
4. Configure the appropriate settings

### Plausible Analytics

1. Set `provider: 'plausible'`
2. Update the `domain` in the plausible configuration
3. Deploy to enable tracking

### Google Analytics 4

1. Set `provider: 'ga4'`
2. Replace `G-XXXXXXXXXX` with your actual measurement ID
3. Deploy to enable tracking

## Deployment

### Netlify

The site is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of the `build` directory to your hosting provider

## Development

### Project Structure

```
src/
├── lib/
│   ├── content/          # JSON content files
│   ├── utils/            # Utility functions
│   └── assets/           # Static assets
├── routes/               # SvelteKit routes
│   ├── +layout.svelte    # Shared layout
│   ├── +page.svelte      # Home page
│   ├── about/            # About page
│   ├── executive/        # Executive board
│   ├── portfolios/       # Member portfolios
│   ├── competitions/     # Trading competitions
│   ├── join/             # Join page
│   └── register/         # Paper trading registration
└── app.css               # Global styles and Tailwind
```

### Styling

The project uses Tailwind CSS with custom design tokens defined in `src/app.css`. Key classes:

- `bg-surface` - Primary background
- `bg-elevated` - Elevated surface background
- `text-gold-500` - Gold accent color
- `text-muted` - Muted text color
- `border-subtle` - Subtle border color

### Adding New Pages

1. Create a new directory in `src/routes/`
2. Add a `+page.svelte` file
3. Include proper SEO meta tags
4. Follow the existing design patterns

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

The site is optimized for Core Web Vitals:
- Optimized images and fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Lazy loading for non-critical content

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to TigerQuant and the University of Missouri.

## Support

For questions or issues, contact the TigerQuant leadership team at tigerquant@missouri.edu.