# FutureTech Website

A modern, professional website for FutureTech built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and micro-interactions powered by Framer Motion
- **Accessible**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth user experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and design system
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── navigation.tsx   # Navigation component
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── services.tsx     # Services section
│   ├── industries.tsx   # Industries section
│   └── footer.tsx       # Footer component
└── lib/
    └── utils.ts         # Utility functions
```

## Design System

The website uses a custom design system with:
- **Colors**: Modern gradient-based color palette
- **Typography**: Geist font family for clean, modern text
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth, professional animations
- **Components**: Reusable UI components

## Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **About**: Company vision, mission, and values
3. **Services**: Comprehensive list of technology services
4. **Industries**: Industries we serve with detailed descriptions
5. **Footer**: Contact information and newsletter signup

## Customization

The design system is easily customizable through CSS variables in `globals.css`. You can modify:
- Color schemes
- Typography
- Spacing
- Animations
- Component styles

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

## License

© 2025 FutureTech. All rights reserved.