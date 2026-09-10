import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';

const NODE_COUNT = 72;
const NEIGHBORS_PER_NODE = 2;

// Evenly distribute points on a sphere (Fibonacci sphere)
function generateNodes(count) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
}

function buildConnections(points, kNeighbors) {
  const positions = [];
  const seen = new Set();
  points.forEach((p, i) => {
    const distances = points
      .map((q, j) => ({ j, d: i === j ? Infinity : p.distanceTo(q) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, kNeighbors);
    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return;
      seen.add(key);
      positions.push(p.x, p.y, p.z, points[j].x, points[j].y, points[j].z);
    });
  });
  return new Float32Array(positions);
}

function Network() {
  const groupRef = useRef();
  const nodes = useMemo(() => generateNodes(NODE_COUNT), []);
  const linePositions = useMemo(() => buildConnections(nodes, NEIGHBORS_PER_NODE), [nodes]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.09;
    groupRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={groupRef} scale={1.3}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#5578c9" transparent opacity={0.28} />
      </lineSegments>

      <Instances limit={NODE_COUNT}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#8fa8e8" toneMapped={false} />
        {nodes.map((p, i) => (
          <Instance key={i} position={[p.x, p.y, p.z]} />
        ))}
      </Instances>
    </group>
  );
}

export default function NetworkSphere({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
            <Network />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
