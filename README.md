# Xendex AI - React Application

A modern React application built with Vite and Tailwind CSS, showcasing enterprise AI solutions and superintelligence research.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Component-Based Architecture** - Reusable, dynamic components
- 🛣️ **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-first approach

## Project Structure

```
xendex-ai/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── FeaturesGrid.jsx
│   │   ├── StatCard.jsx
│   │   ├── StatsSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Page components
│   │   ├── BuildPage.jsx
│   │   └── SuperintelligencePage.jsx
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Dynamic Components

All components are designed to be reusable and configurable through props:

- **Button**: Customizable button with variants (primary, secondary, outline, ghost) and sizes
- **Hero**: Hero section with title, description, CTAs, and badges
- **FeatureCard**: Individual feature card with icon, title, description, and link
- **FeaturesGrid**: Grid layout for multiple feature cards
- **StatCard**: Statistics display card
- **StatsSection**: Section for displaying multiple stats
- **CTASection**: Call-to-action section with customizable background
- **Navbar**: Responsive navigation bar with mobile menu
- **Footer**: Footer with multiple columns and social links

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages

### 1. Enterprise AI (/build)
Showcases enterprise-ready AI systems with features like:
- Enterprise Security
- Lightning Fast Performance
- Scalable Architecture
- Custom AI Models
- Advanced Analytics
- Team Collaboration

### 2. Training Superintelligence (/superintelligence)
Highlights superintelligence research with:
- Advanced Reasoning
- Human Alignment
- Continuous Learning
- Global Impact
- Ethical Framework
- Open Research

## Customization

All components accept props for easy customization. Refer to individual component files for available props.

## Technologies Used

- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.4.0
- React Router DOM 6.21.1

## License

MIT
