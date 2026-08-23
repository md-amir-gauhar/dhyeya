/**
 * The desk is the recurring set piece of the whole story — drawn rather than
 * photographed so it can be re-lit (night / dawn) without swapping assets.
 * The surface bleeds edge to edge while the props stay centred on a baseline.
 * Replace with commissioned photography when available.
 */
export function DeskScene({ light = 'night' }: { light?: 'night' | 'dawn' }) {
  const dawn = light === 'dawn';

  return (
    <div className="relative h-full w-full">
      {/* desk surface — full bleed */}
      <div
        className="absolute inset-x-0 bottom-0 h-[20%]"
        style={{
          background: dawn
            ? 'linear-gradient(to bottom, #3a3128, #14120f)'
            : 'linear-gradient(to bottom, #1d1d22, #0b0b0d)',
        }}
      >
        <div className="h-px w-full bg-ivory-400/25" />
      </div>

      {/* props */}
      <svg
        viewBox="0 0 900 320"
        fill="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[calc(20%-10px)] mx-auto h-auto w-full max-w-5xl"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* lamp */}
        <path
          d="M256 84 L330 84 L350 132 L236 132 Z"
          fill={dawn ? '#2a2a31' : '#191920'}
          stroke="#3d3d46"
          strokeWidth="1.5"
        />
        <ellipse
          cx="293"
          cy="134"
          rx="50"
          ry="7"
          fill={dawn ? '#f6d9a8' : '#e5a95c'}
          opacity="0.8"
        />
        <rect x="290" y="134" width="6" height="172" fill="#2a2a31" />
        <rect x="256" y="304" width="74" height="8" rx="3" fill="#33333c" />

        {/* open book */}
        <path d="M404 286 L500 272 L500 306 L404 318 Z" fill="#e6e0d3" opacity="0.92" />
        <path d="M596 286 L500 272 L500 306 L596 318 Z" fill="#cfc7b6" opacity="0.88" />
        <path d="M500 272 L500 306" stroke="#a89f8d" strokeWidth="1.5" />
        {[288, 295].map((y) => (
          <g key={y}>
            <line x1="420" y1={y} x2="486" y2={y - 9} stroke="#a89f8d" strokeWidth="1.3" />
            <line x1="514" y1={y - 9} x2="580" y2={y} stroke="#a89f8d" strokeWidth="1.3" />
          </g>
        ))}

        {/* notebook + pen */}
        <rect x="150" y="278" width="128" height="36" rx="3" fill="#191920" stroke="#3d3d46" />
        <rect x="150" y="278" width="8" height="36" fill="#d4893a" opacity="0.5" />
        <rect
          x="168"
          y="268"
          width="76"
          height="3.5"
          rx="2"
          fill="#a89f8d"
          transform="rotate(-7 168 268)"
        />

        {/* tea glass — someone else left it there */}
        <path d="M636 282 L668 282 L664 314 L640 314 Z" fill="#26262d" stroke="#3d3d46" />
        <path d="M639 288 L665 288 L662 306 L642 306 Z" fill="#b06e29" opacity="0.6" />

        {/* water bottle */}
        <rect x="694" y="210" width="38" height="104" rx="12" fill="#191920" stroke="#3d3d46" />
        <rect x="705" y="194" width="16" height="20" rx="4" fill="#2a2a31" />

        {/* laptop */}
        <path d="M760 226 L866 226 L878 306 L748 306 Z" fill="#141418" stroke="#3d3d46" />
        <path d="M768 234 L858 234 L868 298 L758 298 Z" fill="#0b0b0d" />
      </svg>
    </div>
  );
}
