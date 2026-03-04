import * as THREE from 'three'

const platinum = {
  color: '#f5f0e6',
  roughness: 0.82,
  metalness: 0.03,
}

/** Long platinum blonde hair flowing naturally — Iggy-inspired */
export function Hair() {
  return (
    <group position={[0, 1.25, 0]}>
      {/* Main volume behind head and over shoulders */}
      <mesh position={[0, -0.05, -0.14]} castShadow receiveShadow>
        <sphereGeometry args={[0.28, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.68]} />
        <meshStandardMaterial {...platinum} side={THREE.DoubleSide} />
      </mesh>
      {/* Front strands — left */}
      <mesh position={[-0.11, 0.06, 0.19]} rotation={[0, 0, 0.22]} castShadow receiveShadow>
        <boxGeometry args={[0.055, 0.38, 0.035]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
      {/* Front strands — right */}
      <mesh position={[0.11, 0.06, 0.19]} rotation={[0, 0, -0.22]} castShadow receiveShadow>
        <boxGeometry args={[0.055, 0.38, 0.035]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
      {/* Side sweep — left, longer flow */}
      <mesh position={[-0.21, -0.08, 0.02]} rotation={[0, 0, 0.12]} castShadow receiveShadow>
        <boxGeometry args={[0.048, 0.42, 0.07]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
      <mesh position={[-0.24, -0.22, -0.02]} rotation={[0.08, 0, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.04, 0.28, 0.05]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
      {/* Side sweep — right, longer flow */}
      <mesh position={[0.21, -0.08, 0.02]} rotation={[0, 0, -0.12]} castShadow receiveShadow>
        <boxGeometry args={[0.048, 0.42, 0.07]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
      <mesh position={[0.24, -0.22, -0.02]} rotation={[0.08, 0, -0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.04, 0.28, 0.05]} />
        <meshStandardMaterial {...platinum} />
      </mesh>
    </group>
  )
}
