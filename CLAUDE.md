@AGENTS.md

# NEXUS AI Website - Project Context

## Project Overview
- **Type:** Static marketing website (Next.js 16 App Router)
- **Purpose:** AI automation company landing page
- **Live:** http://localhost:3000

## Current State (as of 2026-05-09)
- ✅ **Security Hardened** - CSP, X-Frame-Options, HSTS, security headers configured
- ✅ **No Backend** - Static site, no API routes, no database
- ✅ **No Auth** - No authentication or user accounts
- ✅ **TypeScript** - Full type safety throughout
- ✅ **ESLint** - Security-focused rules enabled

## Security Status: 9/10
See README.md for full security documentation.

### Implemented Security
- Content-Security-Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security (HSTS)
- Referrer-Policy: strict-origin
- Permissions-Policy (camera/mic/geo restricted)
- External links use rel="noopener noreferrer"
- Images use Next.js Image component

### Files to Know
- `next.config.ts` - Security headers here
- `src/components/` - All React components
- `.env.example` - Template for future secrets
- `public/security.txt` - Security disclosure policy

## Stack
- Next.js 16.2.6 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion 12
- TypeScript 5

## Dependencies
```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "tailwindcss": "4",
  "framer-motion": "12.38.0",
  "lucide-react": "1.14.0"
}
```

## Last Session Summary (2026-05-09)
1. Added security headers to next.config.ts
2. Created .env.example template
3. Replaced img tags with Next.js Image component
4. Added rel="noopener noreferrer" to external links
5. Added ARIA accessibility attributes
6. Created security.txt disclosure file
7. Enhanced ESLint with security rules
8. Updated README with security documentation

## Future TODO (when adding features)
- [ ] Add API routes → Implement rate limiting, auth
- [ ] Add forms → Implement CSRF protection
- [ ] Add user auth → Use NextAuth.js
- [ ] Add external APIs → Store secrets in .env.local
- [ ] Self-host fonts (optional, for 9.5/10)
