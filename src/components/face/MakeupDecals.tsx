/**
 * Makeup: bold red lipstick, dramatic winged eyeliner, signature beauty mark.
 * Positioned to align with placeholder head (sphere at 0, 0.25, 0 in avatar body group).
 */
export function MakeupDecals() {
  return (
    <group position={[0, 0, 0]}>
      {/* Beauty mark - right cheek */}
      <mesh position={[0.1, 0.02, 0.19]} castShadow={false}>
        <sphereGeometry args={[0.012, 12, 8]} />
        <meshStandardMaterial color="#2a1810" roughness={0.6} metalness={0} />
      </mesh>
      {/* Bold red lipstick */}
      <mesh position={[0, -0.02, 0.2]} rotation={[0, 0, 0]} castShadow={false}>
        <boxGeometry args={[0.12, 0.04, 0.02]} />
        <meshStandardMaterial color="#b03030" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Winged eyeliner - left */}
      <mesh position={[-0.08, 0.06, 0.195]} rotation={[0, 0, 0.15]} castShadow={false}>
        <boxGeometry args={[0.08, 0.008, 0.005]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0} />
      </mesh>
      <mesh position={[-0.12, 0.08, 0.19]} rotation={[0, 0, -0.5]} castShadow={false}>
        <boxGeometry args={[0.04, 0.006, 0.005]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0} />
      </mesh>
      {/* Winged eyeliner - right */}
      <mesh position={[0.08, 0.06, 0.195]} rotation={[0, 0, -0.15]} castShadow={false}>
        <boxGeometry args={[0.08, 0.008, 0.005]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0} />
      </mesh>
      <mesh position={[0.12, 0.08, 0.19]} rotation={[0, 0, 0.5]} castShadow={false}>
        <boxGeometry args={[0.04, 0.006, 0.005]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0} />
      </mesh>
    </group>
  )
}
