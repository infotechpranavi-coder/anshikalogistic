import type { ReactNode } from 'react';
import WorldMapOverlay from '@/components/WorldMapOverlay';

export const brandGradientBg = 'relative overflow-hidden bg-dark-navy';

export const brandPatternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
};

export function BrandGradientBg({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={brandPatternStyle}
      />
      <WorldMapOverlay className="opacity-[0.14]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-navy/40" />
      {children}
    </>
  );
}
