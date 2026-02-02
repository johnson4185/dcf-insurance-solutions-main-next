# DCF Insurance Solutions - Next.js Application

Enterprise insurance software platform built with Next.js, TypeScript, and modern web technologies.

> 📱 **Creating DCFMOB?** See [INDEX_DCFMOB.md](./INDEX_DCFMOB.md) for instructions on creating a copy named "dcfmob"

## 🚀 Tech Stack

### Core Framework
- **Next.js 15.1.6** - React framework with App Router for server-side rendering and routing
- **React 18.3.1** - UI library for building component-based interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript for better developer experience

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Framer Motion 12.25** - Animation library for smooth transitions
- **Lucide React** - Beautiful & consistent icon set

### Form Handling & Validation
- **React Hook Form 7.61** - Performant form library
- **Zod 3.25** - TypeScript-first schema validation

### State Management & Data Fetching
- **TanStack Query 5.83** - Powerful data synchronization for React

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
dcf-insurance-solutions-main-next/
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   ├── products/           # Product screenshots
│   │   └── purchase/           # Purchase flow illustrations
│   ├── videos/                 # Video assets
│   └── robots.txt              # SEO robots file
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── products/           # Product pages
│   │   ├── comparison/         # Product comparison
│   │   ├── purchase/           # Purchase flow
│   │   ├── solutions/          # Solutions pages
│   │   └── ...                 # Other routes
│   ├── components/             # React components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── home/               # Homepage sections
│   │   ├── products/           # Product-related components
│   │   ├── purchase/           # Purchase flow components
│   │   ├── shared/             # Shared/reusable components
│   │   └── ui/                 # shadcn/ui components
│   ├── contexts/               # React contexts
│   ├── data/                   # Static data & configuration
│   │   ├── home.data.ts        # Homepage content
│   │   ├── products.data.ts    # Product information
│   │   ├── comparison.data.ts  # Comparison table data
│   │   ├── navigation.data.ts  # Navigation structure
│   │   └── site.config.ts      # Site-wide configuration
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript type definitions
├── components.json             # shadcn/ui configuration
├── eslint.config.js            # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd dcf-insurance-solutions-main-next

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run ESLint
npm run lint

# Type check without emitting files
npm run type-check
```

## 🎨 Design System

The project uses a comprehensive design system built on:
- **shadcn/ui** components for consistent UI elements
- **Tailwind CSS** for utility-first styling
- **CSS variables** for theme customization
- **Custom fonts**: Inter, Plus Jakarta Sans, Space Grotesk

## 📝 Code Style & Best Practices

### TypeScript
- Strict mode enabled for type safety
- All functions and components are properly typed
- No implicit `any` types allowed

### Components
- Use functional components with hooks
- Implement proper prop types with TypeScript interfaces
- Follow the "use client" directive for client-side components in App Router

### File Organization
- Group related files by feature (colocation)
- Separate data/content from components
- Use index exports for cleaner imports

### Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Files**: PascalCase for components, kebab-case for utilities
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE for truly constant values

## 🔒 Security Features

- Content Security Policy headers configured
- X-Frame-Options set to DENY
- XSS Protection enabled
- Console logs removed in production builds

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Any Node.js hosting platform**
- **Docker containers**

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

## 📄 License

Copyright © 2026 DCF Insurance Solutions. All rights reserved.

## 🤝 Contributing

This is a private enterprise project. For contribution guidelines, contact the development team.

## 📧 Support

For technical support or questions:
- Email: support@dcf.insurance
- Documentation: [Coming Soon]

---

Built with ❤️ by the DCF Engineering Team
