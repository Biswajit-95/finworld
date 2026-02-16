import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

// Create a lock icon texture using canvas - ENHANCED for better visibility
function createLockTexture() {
  const size = 256; // Doubled from 128 for sharper rendering
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;

  // Larger outer glow for prominence
  const outerGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 110);
  outerGlow.addColorStop(0, "rgba(0, 144, 212, 0.6)");
  outerGlow.addColorStop(0.5, "rgba(0, 144, 212, 0.3)");
  outerGlow.addColorStop(1, "rgba(0, 144, 212, 0)");
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 110, 0, Math.PI * 2);
  ctx.fill();

  // Inner bright glow
  const innerGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 50);
  innerGlow.addColorStop(0, "rgba(245, 158, 11, 0.8)");
  innerGlow.addColorStop(1, "rgba(0, 144, 212, 0.4)");
  ctx.fillStyle = innerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 50, 0, Math.PI * 2);
  ctx.fill();

  // Lock body - larger and brighter
  ctx.fillStyle = "rgba(245, 158, 11, 1)"; // Orange instead of blue
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - 24, cy - 6, 48, 40, 6);
  ctx.fill();
  ctx.stroke();

  // Lock shackle - thicker
  ctx.strokeStyle = "rgba(245, 158, 11, 1)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(cx, cy - 6, 18, Math.PI, 0);
  ctx.stroke();

  // Inner shackle highlight
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy - 6, 18, Math.PI, 0);
  ctx.stroke();

  // Keyhole - larger and more visible
  ctx.fillStyle = "#021a2e";
  ctx.beginPath();
  ctx.arc(cx, cy + 8, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(cx - 2.5, cy + 12, 5, 10);

  // White highlight on keyhole
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  ctx.arc(cx - 2, cy + 6, 2, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Simple 3D noise approximation for continent shaping
function pseudoNoise(x: number, y: number, z: number) {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719);
  return s - Math.floor(s);
}


// Seeded random for consistent land placement
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Continent regions with weights
const regions = [
  { latMin: 25, latMax: 50, lonMin: -130, lonMax: -70, weight: 3 },
  { latMin: 50, latMax: 65, lonMin: -140, lonMax: -60, weight: 2 },
  { latMin: 55, latMax: 70, lonMin: -170, lonMax: -140, weight: 1 },
  { latMin: 10, latMax: 25, lonMin: -110, lonMax: -80, weight: 1 },
  { latMin: -5, latMax: 12, lonMin: -80, lonMax: -50, weight: 2 },
  { latMin: -25, latMax: -5, lonMin: -70, lonMax: -35, weight: 3 },
  { latMin: -55, latMax: -25, lonMin: -75, lonMax: -60, weight: 1.5 },
  { latMin: 40, latMax: 55, lonMin: -10, lonMax: 15, weight: 2.5 },
  { latMin: 45, latMax: 60, lonMin: 15, lonMax: 40, weight: 2 },
  { latMin: 55, latMax: 70, lonMin: 5, lonMax: 30, weight: 1 },
  { latMin: 50, latMax: 59, lonMin: -10, lonMax: 2, weight: 1 },
  { latMin: 15, latMax: 37, lonMin: -18, lonMax: 40, weight: 3 },
  { latMin: 0, latMax: 15, lonMin: -18, lonMax: 15, weight: 2 },
  { latMin: -10, latMax: 12, lonMin: 25, lonMax: 52, weight: 2 },
  { latMin: -35, latMax: -10, lonMin: 15, lonMax: 40, weight: 2 },
  { latMin: 15, latMax: 40, lonMin: 35, lonMax: 60, weight: 2 },
  { latMin: 8, latMax: 35, lonMin: 68, lonMax: 90, weight: 3 },
  { latMin: 20, latMax: 45, lonMin: 100, lonMax: 125, weight: 3 },
  { latMin: -8, latMax: 20, lonMin: 95, lonMax: 120, weight: 2 },
  { latMin: 50, latMax: 70, lonMin: 40, lonMax: 140, weight: 3 },
  { latMin: 30, latMax: 45, lonMin: 128, lonMax: 146, weight: 1 },
  { latMin: -38, latMax: -12, lonMin: 115, lonMax: 153, weight: 3 },
  { latMin: -8, latMax: 5, lonMin: 100, lonMax: 140, weight: 1.5 },
];

const totalWeight = regions.reduce((s, r) => s + r.weight, 0);

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function generateLandPoints(count: number, radius: number) {
  const positions = new Float32Array(count * 3);

  let generated = 0;

  while (generated < count) {
    // Random lat/lon across the globe
    const lat = Math.random() * 180 - 90;
    const lon = Math.random() * 360 - 180;

    const v = latLonToVec3(lat, lon, 1);

    // Use noise to decide land vs ocean
    const n =
      pseudoNoise(v.x * 2, v.y * 2, v.z * 2) +
      pseudoNoise(v.x * 4, v.y * 4, v.z * 4) * 0.5;

    // Threshold controls continent size
    if (n > 0.62) {
      const p = latLonToVec3(lat, lon, radius);

      positions[generated * 3] = p.x;
      positions[generated * 3 + 1] = p.y;
      positions[generated * 3 + 2] = p.z;

      generated++;
    }
  }

  return positions;
}


// function generateLandPoints(count: number, radius: number, seed: number) {
//   const rand = seededRandom(seed);
//   const positions = new Float32Array(count * 3);
//   for (let i = 0; i < count; i++) {
//     let pick = rand() * totalWeight;
//     let region = regions[0];
//     for (const r of regions) {
//       pick -= r.weight;
//       if (pick <= 0) {
//         region = r;
//         break;
//       }
//     }
//     const lat = region.latMin + rand() * (region.latMax - region.latMin);
//     const lon = region.lonMin + rand() * (region.lonMax - region.lonMin);
//     const v = latLonToVec3(lat, lon, radius);
//     positions[i * 3] = v.x;
//     positions[i * 3 + 1] = v.y;
//     positions[i * 3 + 2] = v.z;
//   }
//   return positions;
// }

const cities = [
  { lat: 40.7, lon: -74 },
  { lat: 51.5, lon: -0.1 },
  { lat: 35.7, lon: 139.7 },
  { lat: 22.3, lon: 114.2 },
  { lat: -33.9, lon: 151.2 },
  { lat: 1.3, lon: 103.8 },
  { lat: 48.9, lon: 2.35 },
  { lat: 55.8, lon: 37.6 },
  { lat: 19.1, lon: 72.9 },
  { lat: -23.5, lon: -46.6 },
  { lat: 37.8, lon: -122.4 },
  { lat: 25.2, lon: 55.3 },
];

const arcPairs = [
  [0, 1],
  [0, 10],
  [1, 6],
  [1, 7],
  [2, 3],
  [2, 4],
  [3, 5],
  [5, 8],
  [8, 11],
  [0, 9],
  [6, 7],
  [11, 3],
  [10, 2],
  [4, 5],
  [9, 1],
];

function generateArcs() {
  const r = 1.005;
  const toVec = (c: { lat: number; lon: number }) =>
    latLonToVec3(c.lat, c.lon, r);

  return arcPairs.map(([a, b]) => {
    const start = toVec(cities[a]);
    const end = toVec(cities[b]);
    const dist = start.distanceTo(end);
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(1 + dist * 0.4);
    const ctrl1 = new THREE.Vector3()
      .lerpVectors(start, mid, 0.33)
      .normalize()
      .multiplyScalar(mid.length() * 0.97);
    const ctrl2 = new THREE.Vector3()
      .lerpVectors(end, mid, 0.33)
      .normalize()
      .multiplyScalar(mid.length() * 0.97);
    return new THREE.CubicBezierCurve3(start, ctrl1, ctrl2, end);
  });
}

function generateCityLights(count: number, radius: number, seed: number) {
  const rand = seededRandom(seed);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    let pick = rand() * totalWeight;
    let region = regions[0];

    for (const r of regions) {
      pick -= r.weight;
      if (pick <= 0) {
        region = r;
        break;
      }
    }

    // Bias toward coasts and populated latitudes
    const lat = region.latMin + rand() * (region.latMax - region.latMin);
    const lon = region.lonMin + rand() * (region.lonMax - region.lonMin);

    const v = latLonToVec3(lat, lon, radius);
    positions[i * 3] = v.x;
    positions[i * 3 + 1] = v.y;
    positions[i * 3 + 2] = v.z;
  }

  return positions;
}


function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const lockRefs = useRef<(THREE.Sprite | null)[]>([]);

  const landGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(generateLandPoints(8000, 1.006), 3),
    );
    return geo;
  }, []);

  const cityLightGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(generateCityLights(7000, 1.007, 99), 3),
    );
    return geo;
  }, []);

  const arcs = useMemo(() => generateArcs(), []);
  const cityVecs = useMemo(
    () => cities.map((c) => latLonToVec3(c.lat, c.lon, 1.01)),
    [],
  );

  const lockPositions = useMemo(() => {
    const lockCities = [0, 1, 2, 5, 8, 10];
    return lockCities.map((i) =>
      latLonToVec3(cities[i].lat, cities[i].lon, 1.08),
    );
  }, []);

  const lockTexture = useMemo(() => createLockTexture(), []);

  // Animate lock icons with pulsing effect
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }

    // Pulse lock icons
    lockRefs.current.forEach((lock, i) => {
      if (lock) {
        const scale =
          0.15 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.02;
        lock.scale.set(scale, scale, 1);
      }
    });
  });

  return (
    // <group ref={groupRef} rotation={[0.25, 0, 0.08]}>
    <group 
    ref={groupRef} 
    rotation={[0.25, 0, 0.08]} scale={[0.88, 0.88, 0.88]}>
      {/* Ocean sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#021a2e" />
      </mesh>

      <mesh>
  {/* Slightly larger than the globe */}
  <sphereGeometry args={[1.06, 64, 64]} />
  <meshBasicMaterial
    color="#0090d4"
    transparent
    opacity={0.08}
    side={THREE.BackSide} // Important: renders inside surface for halo effect
    depthWrite={false}
  />
</mesh>

<mesh>
  <sphereGeometry args={[1.12, 64, 64]} />
  <meshBasicMaterial
    color="#0090d4"
    transparent
    opacity={0.03}
    side={THREE.BackSide}
    depthWrite={false}
  />
</mesh>

      {/* Ocean surface highlight */}
      <mesh>
        <sphereGeometry args={[1.001, 64, 64]} />
        <meshBasicMaterial color="#0090d4" transparent opacity={0.12} />
      </mesh>

      {/* Lat/lon grid */}
      <mesh>
        <sphereGeometry args={[1.003, 48, 24]} />
        <meshBasicMaterial
          color="#0090d4"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Land masses */}
      <points geometry={landGeo}>
        <pointsMaterial
          color="#0090d4"
          size={0.009}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      {/* City lights layer */}
      <points geometry={cityLightGeo}>
        {/* <pointsMaterial
          color="#f59e0b"
          size={0.012}
          // size={0.009}
          sizeAttenuation
          transparent
          opacity={0.65}
        /> */}
        <pointsMaterial
  color="#ffb347"
  size={0.010}
  transparent
  depthWrite={false}
  blending={THREE.AdditiveBlending}
/>

      </points>

      {/* Financial hub dots */}
      {cityVecs.map((pos, i) => (
        <mesh key={`hub-${i}`} position={pos}>
          <sphereGeometry args={[0.018, 16, 16]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.95} />
        </mesh>
      ))}

      {/* Hub glow rings */}
      {cityVecs.map((pos, i) => (
        <mesh key={`glow-${i}`} position={pos}>
          <ringGeometry args={[0.02, 0.035, 32]} />
          <meshBasicMaterial
            color="#f97316"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* PROMINENT Lock icons at key financial hubs */}
      {lockPositions.map((pos, i) => (
        <sprite
          key={`lock-${i}`}
          ref={(el) => (lockRefs.current[i] = el)}
          position={pos}
          scale={[0.15, 0.15, 1]}
        >
          <spriteMaterial
            map={lockTexture}
            transparent
            depthTest={false}
            opacity={1}
          />
        </sprite>
      ))}

      {/* Primary arcs */}
      {arcs.map((curve, i) => {
        const pts = curve
          .getPoints(50)
          .map((p) => [p.x, p.y, p.z] as [number, number, number]);
        return (
          <Line
            key={`arc-o-${i}`}
            points={pts}
            color="#f97316"
            transparent
            opacity={0.6}
            lineWidth={2}
          />
        );
      })}

      {/* Secondary arcs */}
      {arcs.map((curve, i) => {
        const pts = curve
          .getPoints(50)
          .map((p) => [p.x, p.y, p.z] as [number, number, number]);
        return (
          <Line
            key={`arc-b-${i}`}
            points={pts}
            color="#0090d4"
            transparent
            opacity={0.3}
            lineWidth={1.2}
          />
        );
      })}

      {/* Shield ring 1 */}
      <mesh rotation={[Math.PI / 2.3, 0.3, 0]}>
        <ringGeometry args={[1.14, 1.155, 128]} />
        <meshBasicMaterial
          color="#0090d4"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Shield ring 2 */}
      <mesh rotation={[Math.PI / 1.8, -0.4, 0.5]}>
        <ringGeometry args={[1.18, 1.195, 128]} />
        <meshBasicMaterial
          color="#f97316"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer orbit */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.25, 1.26, 128]} />
        <meshBasicMaterial
          color="#0090d4"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function Globe1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Logo overlay - responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img
          // src={"/finworld-logo.png"}
          src={"/Group_2.png"}

          alt="FinWorld Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain drop-shadow-[0_0_50px_rgba(245,158,11,0.5)] opacity-0.8 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <Canvas
        camera={{
          position: [0, 0, isMobile ? 3.8 : 3.5],
          fov: isMobile ? 45 : 40,
          near: 0.1,
          far: 2000,
        }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <RotatingGlobe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
}
