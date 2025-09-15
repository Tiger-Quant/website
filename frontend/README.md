# TigerQuant React Frontend

A modern React/Next.js application for the TigerQuant quantitative finance club at the University of Missouri.

## 🚀 Quick Start

### Prerequisites

- Node.js 22.6.0 (use `.nvmrc` file)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Color Palette

This application strictly adheres to the TigerQuant brand guidelines:

- **Black**: `#0a0a0a` (primary background)
- **White**: `#ffffff` (light background, text)
- **Gold**: `#FDB719` (accent color, CTAs, highlights)

**No other colors are permitted** throughout the application, including:
- Focus rings
- Borders
- Shadows
- Chart colors
- Hover states

### Typography

- **Headings**: Space Grotesk
- **Body**: Inter
- **Fallback**: system-ui, sans-serif

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── competitions/      # Competitions page
│   ├── executive-board/   # Executive Board page
│   ├── join/              # Join page
│   ├── portfolios/        # Portfolios page
│   ├── register/          # Paper Trading registration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── footer.tsx         # Site footer
│   ├── header.tsx         # Site header
│   └── theme-provider.tsx # Theme context provider
data/                      # JSON data files
├── alumni.json           # Alumni information
├── board.json            # Executive board data
├── competitions.json     # Competition data
└── portfolios.json       # Portfolio data
```

## 📊 Data Management

### Editing Content

All dynamic content is stored in JSON files in the `/data` directory:

- **`board.json`**: Executive board members and officers
- **`alumni.json`**: Distinguished alumni information
- **`competitions.json`**: Competition details and status
- **`portfolios.json`**: Member portfolio data and performance

### Adding New Content

1. Edit the appropriate JSON file in `/data`
2. Follow the existing data structure
3. Ensure all required fields are present
4. Test the changes locally

### Portfolio Data Structure

```json
{
  "portfolios": [
    {
      "id": 1,
      "name": "Member Name",
      "role": "Position",
      "strategy": "Trading Strategy",
      "performance": {
        "totalReturn": 24.5,
        "sharpeRatio": 1.8,
        "maxDrawdown": -8.2,
        "volatility": 12.3
      },
      "chartData": [
        { "date": "2024-01-01", "value": 10000 }
      ],
      "holdings": [
        { "symbol": "AAPL", "weight": 15.2, "return": 8.5 }
      ]
    }
  ]
}
```

## 🔧 Configuration

### Analytics

Analytics are disabled by default. To enable:

1. Install your preferred analytics package (Plausible, GA4, etc.)
2. Add the tracking code to `src/app/layout.tsx`
3. Update environment variables as needed

### Theme

The application uses `next-themes` for dark/light mode switching:

- **Default**: Dark mode
- **Toggle**: Available in header
- **Persistence**: User preference saved in localStorage

### SEO

Each page includes proper metadata:

- Page titles
- Meta descriptions
- Open Graph tags
- Twitter Card tags

## 🚀 Deployment

### Netlify

The application is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Set Node version: `22.6.0`

### Environment Variables

No environment variables are required for basic functionality.

## 🛠️ Development

### Code Style

- **ESLint**: Configured with Next.js rules
- **Prettier**: Code formatting
- **TypeScript**: Strict mode enabled

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add `page.tsx` with your component
3. Include proper metadata export
4. Follow the design system guidelines

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript interfaces for props
3. Follow the established naming conventions
4. Ensure accessibility compliance

## 🎯 Features

### Current Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light theme toggle
- ✅ Interactive portfolio charts (Recharts)
- ✅ Searchable data tables
- ✅ Executive board member cards
- ✅ Competition details modal
- ✅ Paper trading registration form
- ✅ SEO optimization
- ✅ Accessibility compliance

### Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Tables**: Custom implementation
- **Icons**: Lucide React
- **Theme**: next-themes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Follow the established code style
2. Maintain the black/white/gold color palette
3. Ensure all components are accessible
4. Test on multiple screen sizes
5. Update documentation as needed

## 📄 License

This project is proprietary to TigerQuant and the University of Missouri.

---

**TigerQuant** - University of Missouri's Premier Quantitative Finance Club