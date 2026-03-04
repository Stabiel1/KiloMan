/**
 * Elegant black look: structured top (not tight), long gloves, stiletto boots, statement choker.
 * Gloves follow pose — left relaxed, right hand on hip.
 */
const blackFabric = {
  color: '#0d0d0d',
  roughness: 0.88,
  metalness: 0.04,
}
const blackLeather = {
  color: '#0a0a0a',
  roughness: 0.38,
  metalness: 0.12,
}

export function Outfit() {
  return (
    <group position={[0, 1, 0]}>
      {/* Statement choker */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.12, 0.016, 16, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.28} metalness={0.65} />
      </mesh>
      {/* Sleek black structured top — elegant, not tight; slight volume at shoulders */}
      <mesh position={[0, -0.25, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.24, 0.46, 16]} />
        <meshStandardMaterial {...blackFabric} />
      </mesh>
      {/* Long black glove — left arm (relaxed at side) */}
      <mesh position={[-0.26, -0.08, 0]} castShadow>
        <cylinderGeometry args={[0.052, 0.05, 0.36, 12]} />
        <meshStandardMaterial {...blackFabric} />
      </mesh>
      {/* Long black glove — right arm (bent, hand on hip) */}
      <group position={[0.18, -0.12, 0.06]}>
        <group rotation={[0, 0, -0.55]}>
          <mesh position={[0.12, -0.08, 0]} castShadow>
            <cylinderGeometry args={[0.052, 0.05, 0.2, 12]} />
            <meshStandardMaterial {...blackFabric} />
          </mesh>
          <group position={[0.2, -0.18, 0]} rotation={[0, 0, 0.9]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.038, 0.048, 0.18, 12]} />
              <meshStandardMaterial {...blackFabric} />
            </mesh>
            <mesh position={[0.08, -0.12, 0]} castShadow>
              <sphereGeometry args={[0.034, 12, 10]} />
              <meshStandardMaterial {...blackFabric} />
            </mesh>
          </group>
        </group>
      </group>
      {/* Tall black stiletto boots */}
      <group position={[-0.07, -0.6, -0.02]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.07, 0.062, 0.4, 12]} />
          <meshStandardMaterial {...blackLeather} />
        </mesh>
        <mesh position={[0, -0.26, 0.07]} rotation={[0.14, 0, 0]} castShadow>
          <cylinderGeometry args={[0.038, 0.022, 0.1, 12]} />
          <meshStandardMaterial {...blackLeather} />
        </mesh>
      </group>
      <group position={[0.07, -0.6, 0.02]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.07, 0.062, 0.4, 12]} />
          <meshStandardMaterial {...blackLeather} />
        </mesh>
        <mesh position={[0, -0.26, 0.07]} rotation={[0.14, 0, 0]} castShadow>
          <cylinderGeometry args={[0.038, 0.022, 0.1, 12]} />
          <meshStandardMaterial {...blackLeather} />
        </mesh>
      </group>
    </group>
  )
}
