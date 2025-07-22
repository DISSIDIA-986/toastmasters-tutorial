# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Toastmasters Chinese tutorial website project designed to help Chinese-speaking members (primarily 30+ year old Chinese students) understand Toastmasters International's structure, meeting processes, and participation opportunities. The website serves as a comprehensive guide in Chinese for new and existing members.

## Technology Stack

- **Frontend Framework**: Next.js (with file system routing, SSR/SSG capabilities)
- **Styling**: Tailwind CSS (responsive design, utility-first)
- **Deployment**: GitHub Pages (static site hosting)
- **Target**: Single Page Application (SPA) with routing for multi-page feel

## Development Commands

Since this is a fresh project, initial setup commands:

```bash
# Initialize Next.js project with Tailwind CSS
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install additional dependencies for GitHub Pages deployment
npm install --save-dev @next/env

# Development server
npm run dev

# Build for production
npm run build

# Export for GitHub Pages deployment
npm run export  # (requires next.config.js configuration)

# Deploy to GitHub Pages
npm run deploy  # (requires gh-pages setup)
```

## Architecture & Content Structure

### Page Organization (based on PRD requirements)

1. **主页 (Home - `/`)**: Entry point with navigation and key information summary
2. **关于 Toastmasters (`/about`)**: Mission, vision, core values, and organizational introduction
3. **会议流程与角色 (`/meeting`)**: Detailed meeting agenda and role descriptions
4. **Pathways 学习计划 (`/pathways`)**: Learning pathway explanations and guidance
5. **俱乐部贡献与领导力 (`/contribute`)**: Executive committee roles and contribution opportunities
6. **常见问题解答 (`/faq`)**: Frequently asked questions with accordion interface

### Key Content Areas

**Meeting Roles to Implement**:
- 总主持人 (Toastmaster of the Day)
- 备稿演讲者 (Prepared Speaker) 
- 即兴演讲主持人 (Table Topics Master)
- 各类点评官 (Evaluators)
- 功能角色 (Timer, Ah-Counter, Grammarian)

**Executive Committee Positions**:
- President, VP Education, VP Membership, VP Public Relations
- Secretary, Treasurer, Sergeant at Arms, Immediate Past President

## Development Phases

### Phase 1: Foundation (1-2 days)
- Next.js project initialization with Tailwind CSS
- Basic responsive layout (Header, Main, Footer)
- Navigation implementation with Next.js Link components
- Page routing structure and placeholder content
- GitHub Pages deployment configuration

### Phase 2: Content & UI (3-4 days)
- Content population for all main sections
- Meeting flow visualization (flowchart/steps)
- Role information cards with responsibilities and benefits
- Pathways explanation with icons/imagery
- FAQ accordion components
- Responsive design implementation

### Phase 3: Optimization & Deployment (1-2 days)
- Chinese content review and polish
- Performance optimization
- Cross-browser/device testing
- Final GitHub Pages deployment

## GitHub Pages Deployment Configuration

Required Next.js configuration for static export:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/toastmasters-tutorial' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/toastmasters-tutorial/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## Design Principles

- **Target Audience**: 30+ year old Chinese students with limited time
- **Content Strategy**: Concise, intuitive, easy-to-understand Chinese content
- **UI/UX**: Clean, organized, mobile-responsive design
- **Information Architecture**: Avoid information overload, focus on essentials

## Component Strategy

Create reusable components for:
- Navigation header
- Information cards (for roles, benefits, etc.)
- FAQ accordion
- Call-to-action buttons
- Section layouts
- Meeting flow visualization

## Content Localization Notes

All content should be in Chinese with:
- Clear explanations of English Toastmasters terminology
- Cultural context appropriate for Chinese audience
- Emphasis on practical benefits and participation guidance
- Professional but approachable tone

## Key Features to Implement

- Smooth navigation between sections
- Mobile-first responsive design
- Fast loading times
- Clear visual hierarchy
- Accessible design principles
- SEO-friendly structure for GitHub Pages