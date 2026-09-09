// Lightweight CSS/SVG version of NetworkSphere for mobile — same "connected
// systems" visual language, no WebGL, near-zero runtime cost.

const NODES = [
  { x: 60, y: 40, r: 3.5, delay: 0 },
  { x: 140, y: 25, r: 2.5, delay: 0.4 },
  { x: 210, y: 55, r: 4, delay: 0.8 },
  { x: 30, y: 110, r: 2.5, delay: 1.2 },
  { x: 110, y: 95, r: 3, delay: 0.2 },
  { x: 190, y: 120, r: 2.5, delay: 1.6 },
  { x: 255, y: 90, r: 3.5, delay: 0.6 },
  { x: 75, y: 170, r: 2.5, delay: 1 },
  { x: 155, y: 185, r: 3, delay: 1.8 },
  { x: 230, y: 165, r: 2.5, delay: 0.3 },
  { x: 20, y: 200, r: 2, delay: 1.4 },
  { x: 270, y: 210, r: 3, delay: 0.9 },
];

const EDGES = [
  [0, 1], [1, 2], [0, 4], [4, 1], [3, 4], [4, 5], [2, 6], [5, 6],
  [3, 7], [4, 8], [5, 9], [7, 8], [8, 9], [6, 9], [3, 10], [7, 10],
  [8, 11], [9, 11],
];

export default function NetworkSphereLite({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 290 230" className="h-full w-full">
        <g stroke="#5578c9" strokeOpacity="0.28" strokeWidth="1">
          {EDGES.map(([a, b], i) => {
            const n1 = NODES[a];
            const n2 = NODES[b];
            return <line key={i} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} />;
          })}
        </g>
        <g fill="#8fa8e8">
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              style={{
                animation: `network-pulse 3.6s ease-in-out ${n.delay}s infinite`,
                transformOrigin: `${n.x}px ${n.y}px`,
              }}
            />
          ))}
        </g>
      </svg>
      <style>{`
        @keyframes network-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          circle { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
