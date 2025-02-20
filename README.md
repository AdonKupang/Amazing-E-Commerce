# TPID Landing Page

A modern, accessible, and responsive landing page for Tim Pengendali Inflasi Daerah (TPID) built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with neo-minimalist design
- 📱 Fully responsive across all devices
- ♿ WCAG 2.1 compliant accessibility
- 🚀 Optimized performance with lazy loading
- 📊 Interactive data visualization
- 🖼️ Optimized image loading and display
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Recharts for data visualization
- Heroicons for icons
- Intersection Observer for lazy loading

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd tpid-landing-page
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The site will be available at http://localhost:5173

## Project Structure

\`\`\`
src/
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   ├── InflationChart.tsx
│   ├── Initiatives.tsx
│   ├── News.tsx
│   ├── Partners.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Image.tsx      # Optimized image component
│   └── ErrorBoundary.tsx
├── utils/             # Utility functions
│   └── imageLoader.ts # Image optimization utilities
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
\`\`\`

## Performance Optimizations

- Lazy loading of images using Intersection Observer
- Image optimization with WebP/AVIF support
- Code splitting and dynamic imports
- Optimized animations with Framer Motion
- Fluid typography and spacing
- Responsive images with srcset and sizes

## Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Sufficient color contrast
- Focus management
- Screen reader friendly
- Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch: \`git checkout -b feature/my-feature\`
3. Commit your changes: \`git commit -am 'Add new feature'\`
4. Push to the branch: \`git push origin feature/my-feature\`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern government websites
- Icons from Heroicons
- Images from Unsplash
