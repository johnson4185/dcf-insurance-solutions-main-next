# Project Architecture & Guidelines

## 📐 Architecture Overview

This Next.js application follows a feature-based architecture with clear separation of concerns:

### Layers

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│   (Pages, Components, Layouts)      │
├─────────────────────────────────────┤
│         Data Layer                  │
│   (Static Data, Configurations)     │
├─────────────────────────────────────┤
│         Business Logic Layer        │
│   (Hooks, Contexts, Utilities)      │
├─────────────────────────────────────┤
│         UI Component Library        │
│   (shadcn/ui, Reusable Components)  │
└─────────────────────────────────────┘
```

## 🗂️ Folder Structure Philosophy

### `/src/app` - Next.js App Router
- **Purpose**: Defines all application routes and pages
- **Convention**: File-system based routing
- **Key Files**:
  - `layout.tsx` - Root layout with metadata and providers
  - `page.tsx` - Route entry point
  - `loading.tsx` - Loading UI (optional)
  - `error.tsx` - Error boundary (optional)

### `/src/components` - React Components
Organized by feature and scope:

#### `/components/layout`
Global layout components (Header, Footer) used across all pages.

#### `/components/features`
Feature-specific components grouped by route:
- `/features/home` - Homepage sections
- `/features/products` - Product-related components
- `/features/purchase` - Purchase flow components

#### `/components/common`
Reusable components used across multiple features:
- `ScrollAnimations.tsx` - Scroll-based animations
- `ErrorBoundary.tsx` - Error handling wrapper
- `CTASection.tsx` - Unified call-to-action component

#### `/components/ui`
shadcn/ui library components - low-level UI primitives.
Unused components are archived in `/ui/_unused` for future use.

### `/src/data` - Static Content
- **Purpose**: Centralize all static content and configuration
- **Benefits**:
  - Easy content updates without touching component code
  - Single source of truth for marketing copy
  - Enables future CMS integration
  - Better for internationalization (i18n)

### `/src/types` - TypeScript Types
- **Purpose**: Shared type definitions
- **Convention**: 
  - Use interfaces for object shapes
  - Use types for unions and complex types
  - Export from `index.ts` for easier imports

### `/src/lib` - Utility Functions
Pure utility functions with no side effects.

### `/src/hooks` - Custom React Hooks
Reusable stateful logic extracted from components.

### `/src/contexts` - React Context Providers
Application-wide state management (use sparingly).

## 🎯 Component Design Patterns

### 1. Composition Over Configuration
```tsx
// Good - Composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Avoid - Too many props
<Card title="Title" content="Content" showHeader showFooter />
```

### 2. Data/View Separation
```tsx
// data/products.data.ts - Data layer (consolidated from multiple files)
export const products = [...];

// components/ProductList.tsx - View layer
import { products } from '@/data/products.data';
```

### 3. Type-Safe Props
```tsx
interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  onSelect?: () => void;
}

export function ProductCard({ name, description, price, onSelect }: ProductCardProps) {
  // Component logic
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

1. **Use Semantic Class Groups**
```tsx
// Good - Grouped by concern
className="flex items-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"

// Avoid - Random order
className="text-white bg-blue-600 flex rounded-lg gap-4 hover:bg-blue-700 px-4 items-center py-2"
```

2. **Extract Repeated Patterns**
```tsx
// For repeated button styles, use cn() utility
const buttonStyles = cn(
  "px-4 py-2 rounded-lg font-medium transition-colors",
  variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
  variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300"
);
```

3. **Responsive Design**
```tsx
// Mobile-first approach
className="text-sm md:text-base lg:text-lg"
```

## 🔄 State Management Strategy

### Local State (useState)
For component-specific state that doesn't need to be shared.

### Context (React Context)
For app-wide state like theme, authentication, shopping cart.

### Server State (TanStack Query)
For data fetching, caching, and synchronization.

### URL State (searchParams)
For shareable application state (filters, pagination).

## 🛣️ Routing Conventions

### Static Routes
```
/products → src/app/products/page.tsx
/about → src/app/about/page.tsx
```

### Dynamic Routes
```
/products/[slug] → src/app/products/[slug]/page.tsx
/blog/[year]/[month] → src/app/blog/[year]/[month]/page.tsx
```

### Route Groups (Organization Only)
```
/(marketing)/about
/(app)/dashboard
```

## 📊 Data Fetching Patterns

### Server Components (Default)
```tsx
// Fetch data directly in Server Component
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
```

### Client Components with TanStack Query
```tsx
'use client';

export function ClientComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  
  if (isLoading) return <Spinner />;
  return <ProductList products={data} />;
}
```

## 🧪 Testing Strategy (Future)

### Unit Tests
- Test utility functions in `/src/lib`
- Test custom hooks in `/src/hooks`

### Integration Tests
- Test component interactions
- Test form submissions

### E2E Tests
- Test critical user journeys
- Test purchase flow

## 🚀 Performance Optimization

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // For above-the-fold images
/>
```

### Code Splitting
- Automatic with Next.js App Router
- Use dynamic imports for heavy components
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

### Metadata Optimization
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: { ... },
};
```

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use `NEXT_PUBLIC_` prefix for client-side variables

2. **Input Validation**
   - Use Zod schemas for form validation
   - Validate on both client and server

3. **XSS Prevention**
   - React escapes by default
   - Be careful with `dangerouslySetInnerHTML`

4. **CSRF Protection**
   - Use Next.js built-in protections
   - Implement proper authentication

## 📝 Code Review Checklist

- [ ] TypeScript types are properly defined
- [ ] Components are properly documented
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility (ARIA labels, keyboard navigation)
- [ ] Performance (image optimization, code splitting)
- [ ] Error handling implemented
- [ ] Loading states implemented
- [ ] No console.logs in production code
- [ ] ESLint warnings resolved

## 🔄 Deployment Workflow

1. **Development** → `npm run dev`
2. **Type Check** → `npm run type-check`
3. **Lint** → `npm run lint`
4. **Build** → `npm run build`
5. **Deploy** → Push to `main` branch (auto-deploy on Vercel)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
