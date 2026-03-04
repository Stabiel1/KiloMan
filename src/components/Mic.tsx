/**
 * Performance / dominatrix mic — "click that mic".
 * Vintage-style capsule: black metallic body, spherical head, subtle neon ring when "on".
 */
const micBody = {
  color: '#1a1a1a',
  roughness: 0.25,
  metalness: 0.85,
}
const micHead = {
  color: '#0d0d0d',
  roughness: 0.2,
  metalness: 0.9,
}

export function Mic() {
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0.15]}>
      {/* Shaft — held at angle toward viewer */}
      <mesh position={[0, -0.08, 0.02]} rotation={[0.12, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.018, 0.022, 0.2, 16]} />
        <meshStandardMaterial {...micBody} />
      </mesh>
      {/* Head — spherical pop filter / capsule end */}
      <mesh position={[0, 0.02, 0.025]} castShadow receiveShadow>
        <sphereGeometry args={[0.032, 20, 16]} />
        <meshStandardMaterial {...micHead} />
      </mesh>
      {/* Subtle "on" ring — neon cyan in cyberpunk haze */}
      <mesh position={[0, -0.14, 0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.02, 0.004, 8, 24]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00eeff"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  )
}
