# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a **Next.js 15 App Router** project for "Dimonk" - a Spanish-language software and AI solutions company website. The architecture follows modern Next.js patterns:

### Core Structure
- **App Router**: Uses `src/app/` directory with layout.tsx and page.tsx
- **Component-based**: Modular React components in `src/components/`
- **TypeScript**: Full TypeScript configuration with strict type checking
- **Styling**: Tailwind CSS with shadcn/ui components

### Key Technologies
- **Next.js 15** with App Router and Turbopack for development
- **React 19** with TypeScript
- **Tailwind CSS** with custom theme configuration
- **shadcn/ui** components (configured in components.json)
- **Geist font family** (Sans and Mono variants)
- **Vercel Analytics** for tracking
- **Radix UI** primitives for accessible components

### Component Architecture
The main page (`src/app/page.tsx`) renders components in this order:
1. Navbar - Navigation header
2. Hero - Main hero section
3. SocialProof - Client logos/testimonials
4. Services - Service offerings
5. TechStack - Technology showcase
6. FAQ - Frequently asked questions
7. ContactForm - Contact/lead capture form
8. Footer - Site footer

### Styling System
- **CSS Variables**: Extensive use of CSS custom properties for theming
- **Dark Mode**: Configured with class-based dark mode support
- **Custom Animations**: Includes fade-in animations and Tailwind animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### SEO & Metadata
- Comprehensive SEO configuration in layout.tsx
- Structured data (JSON-LD) for organization and product schemas
- Open Graph and Twitter card metadata
- Sitemap generation at `src/app/sitemap.ts`

### Important Notes
- The site is in **Spanish** (lang="es") targeting Spanish-speaking markets
- Domain: `software.nicovega.dev`
- Uses Tally.so for contact form handling
- Includes comprehensive meta tags and structured data for SEO