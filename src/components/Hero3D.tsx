"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const WARM = new THREE.Color("#ff9d6c");
const COOL = new THREE.Color("#6fe3ff");

function colorForY(y: number, range: number) {
  const t = THREE.MathUtils.clamp((y + range) / (range * 2), 0, 1);
  return WARM.clone().lerp(COOL, t);
}

function useNetworkGeometry(radius: number) {
  return useMemo(() => {
    const base = new THREE.IcosahedronGeometry(radius, 0);
    const edgesGeo = new THREE.EdgesGeometry(base);
    const pos = edgesGeo.attributes.position;
    const seen = new Map<string, THREE.Vector3>();
    const edges: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < pos.count; i += 2) {
      const a = new THREE.Vector3().fromBufferAttribute(pos, i);
      const b = new THREE.Vector3().fromBufferAttribute(pos, i + 1);
      seen.set(a.toArray().map((n) => n.toFixed(3)).join(","), a);
      seen.set(b.toArray().map((n) => n.toFixed(3)).join(","), b);
      edges.push([a, b]);
    }

    base.dispose();
    edgesGeo.dispose();
    return { nodes: Array.from(seen.values()), edges, radius };
  }, [radius]);
}

function NodeNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, edges, radius } = useNetworkGeometry(1.5);
  const reduceMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;
    if (!reduceMotion) g.rotation.y += delta * 0.16;
    const targetX = state.pointer.y * 0.22;
    const targetZ = -state.pointer.x * 0.14;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.04);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, targetZ, 0.04);
  });

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={colorForY((a.y + b.y) / 2, radius).getStyle()}
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.05, 14, 14]} />
          <meshStandardMaterial
            color={colorForY(n.y, radius)}
            emissive={colorForY(n.y, radius)}
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[radius * 0.55, 1]} />
        <meshBasicMaterial color="#8b7cff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d-canvas">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 42 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={40} color="#8b7cff" />
        <pointLight position={[-4, -2, 3]} intensity={20} color="#ff9d6c" />
        <NodeNetwork />
      </Canvas>
    </div>
  );
}
