'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  Menu as MenuIcon,
  X,
  ArrowRight,
  ArrowDown,
  Star,
  Info,
  Mail,
} from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/contact' },
];

const searchLinks = [
  { label: 'Back to Home', href: '/', icon: ArrowRight },
  { label: 'Browse Categories', href: '/categories', icon: ArrowDown },
  { label: 'Latest Articles', href: '/articles', icon: Star },
  { label: 'About Us', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail },
];

/**
 * All colors use tokens from globals.css (--background, --primary,
 * --accent, --border, etc.) so they follow light/dark mode automatically.
 */
function Candle() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Flame + glow */}
      <div className="relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full animate-pulse"
          style={{
            background:
              'radial-gradient(circle, color-mix(in oklab, var(--accent) 45%, transparent) 0%, transparent 70%)',
          }}
        />
        <div
          className="relative w-5 h-12"
          style={{
            background:
              'linear-gradient(180deg, var(--chart-1) 0%, var(--accent) 40%, var(--chart-4) 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow:
              '0 0 20px color-mix(in oklab, var(--accent) 60%, transparent), 0 0 40px color-mix(in oklab, var(--accent) 30%, transparent)',
          }}
        >
          <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-7 bg-card"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          />
        </div>
      </div>

      {/* Wick */}
      <div className="w-0.5 h-2 bg-foreground/60" />

      {/* Candle body */}
      <div
        className="w-10 h-24 rounded-t-sm relative overflow-hidden border border-border bg-card"
        style={{
          boxShadow: '0 4px 20px color-mix(in oklab, var(--foreground) 25%, transparent)',
        }}
      >
        <div className="absolute top-0 left-2 w-1.5 h-4 rounded-b-full bg-muted" />
        <div className="absolute top-0 right-3 w-1 h-3 rounded-b-full bg-muted" />
      </div>

      {/* Holder */}
      <div
        className="w-16 h-3 rounded-b-lg"
        style={{
          background: 'linear-gradient(180deg, var(--chart-4) 0%, var(--chart-5) 100%)',
          boxShadow: '0 4px 12px color-mix(in oklab, var(--foreground) 20%, transparent)',
        }}
      />
      <div className="w-20 h-1 rounded-full bg-chart-5" />
    </div>
  );
}

function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen relative flex flex-col bg-background text-foreground"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--primary) 14%, var(--background)) 0%, var(--background) 70%)',
      }}
    >
      <main className="relative z-10 flex-1 flex flex-col items-center px-6 sm:px-10 pt-8 sm:pt-10">
        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-center tracking-wide underline underline-offset-8 decoration-1 decoration-accent uppercase text-primary">
          Page Not Found.
        </h1>

        {/* Image */}
        <figure className="mt-8 w-full max-w-[640px]">
          <div
            className="relative w-full aspect-[4/3] overflow-hidden flex items-end justify-center rounded-lg border border-border"
            style={{
              background:
                'linear-gradient(180deg, var(--secondary) 0%, var(--muted) 45%, color-mix(in oklab, var(--primary) 18%, var(--muted)) 62%, color-mix(in oklab, var(--primary) 30%, var(--card)) 62.5%, color-mix(in oklab, var(--primary) 45%, var(--card)) 100%)',
            }}
            role="img"
            aria-label="An empty, misty landscape with a single lit candle"
          >
            {/* Fog on the horizon */}
            <div
              className="absolute inset-x-0 top-[48%] h-[24%]"
              style={{
                background:
                  'linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--background) 55%, transparent) 50%, transparent 100%)',
              }}
            />
            <div className="relative mb-6 scale-75 origin-bottom">
              <Candle />
            </div>
          </div>
          <figcaption className="mt-1 text-[10px] tracking-wide uppercase text-muted-foreground">
            Placeholder: Confronting void – a blank or vast landscape photo
          </figcaption>
        </figure>

        {/* Paragraph text */}
        <p className="mt-6 max-w-3xl text-center text-base sm:text-lg font-serif leading-[1.7] text-foreground/90">
          Sometimes, the path we take leads nowhere. This is not an ending, but an invitation to
          pause, sit with the silence, and find a new way back. Mistakes are part of the journey.
        </p>
      </main>
    </div>
  );
}

export default NotFound;