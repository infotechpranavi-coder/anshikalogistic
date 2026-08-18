interface WorldMapOverlayProps {
  className?: string;
  showMarkers?: boolean;
  centered?: boolean;
}

export default function WorldMapOverlay({
  className = 'opacity-[0.18]',
  showMarkers = false,
  centered = false,
}: WorldMapOverlayProps) {
  return (
    <>
      <div
        className={`pointer-events-none absolute ${
          centered
            ? 'left-1/2 top-1/2 h-[160%] w-[70%] -translate-x-1/2 -translate-y-1/2'
            : 'inset-0'
        } ${className}`}
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1.2px)',
          backgroundSize: '7px 7px',
          WebkitMaskImage: 'url(/images/world-map.svg)',
          maskImage: 'url(/images/world-map.svg)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center center',
          maskPosition: 'center center',
          WebkitMaskSize: centered ? 'contain' : '90% 130%',
          maskSize: centered ? 'contain' : '90% 130%',
        }}
      />
      {showMarkers && (
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[38%] top-[42%] h-1.5 w-1.5 rounded-full bg-primary/80" />
          <span className="absolute left-[50%] top-[40%] h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="absolute left-[58%] top-[44%] h-1.5 w-1.5 rounded-full bg-primary/80" />
          <span className="absolute left-[64%] top-[52%] h-1.5 w-1.5 rounded-full bg-primary/60" />
        </div>
      )}
    </>
  );
}
