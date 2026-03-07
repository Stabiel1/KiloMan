import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { Outfit } from './Outfit'
import { Hair } from './Hair'
import { Mic } from './Mic'
import { MakeupDecals } from './face/MakeupDecals'

const skin = { color: '#e8c4a8', roughness: 0.75, metalness: 0 }

/** Phase 1: Avatar alive — subtle idle breathing for presence. Managed by Anna. */
const BREATH_AMPLITUDE = 0.008
const BREATH_SPEED = 0.6

/**
 * Avatar: strong commanding pose — hand on hip, low-angle emphasis.
 * Iggy-inspired: sharp presence, confident gaze. R3F + Three.js.
 * Placeholder body with idle breathing. Option A: load base female GLTF
 * from public/models/avatar-base.glb via Drei useGLTF.
 */
export function Avatar() {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    const t = performance.now() * 0.001 * BREATH_SPEED
    const s = 1 + Math.sin(t) * BREATH_AMPLITUDE
    groupRef.current.scale.set(s, s, s)
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1}>
      <group position={[0, 1, 0]}>
        {/* Head — slight chin-up for confident gaze */}
        <group position={[0, 0.25, 0]} rotation={[-0.06, 0, 0]}>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial {...skin} />
          </mesh>
          <MakeupDecals />
        </group>
        {/* Neck */}
        <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.06, 0.08, 0.18, 16]} />
          <meshStandardMaterial {...skin} />
        </mesh>
        {/* Torso (elegant, covered by top) */}
        <mesh position={[0, -0.25, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.19, 0.21, 0.5, 16]} />
          <meshStandardMaterial {...skin} />
        </mesh>
        {/* Left arm — relaxed at side; mic in hand — "click that mic" */}
        <group position={[-0.26, -0.08, 0]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.048, 0.05, 0.36, 12]} />
            <meshStandardMaterial {...skin} />
          </mesh>
          <group position={[-0.02, -0.26, 0.05]}>
            <Mic />
          </group>
        </group>
        {/* Right arm — bent, hand on hip */}
        <group position={[0.18, -0.12, 0.06]}>
          <group rotation={[0, 0, -0.55]}>
            {/* Upper arm */}
            <mesh position={[0.12, -0.08, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.048, 0.05, 0.2, 12]} />
              <meshStandardMaterial {...skin} />
            </mesh>
            {/* Forearm + hand on hip */}
            <group position={[0.2, -0.18, 0]} rotation={[0, 0, 0.9]}>
              <mesh castShadow receiveShadow>
                <cylinderGeometry args={[0.04, 0.048, 0.18, 12]} />
                <meshStandardMaterial {...skin} />
              </mesh>
              <mesh position={[0.08, -0.12, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.035, 12, 10]} />
                <meshStandardMaterial {...skin} />
              </mesh>
            </group>
          </group>
        </group>
        {/* Hips */}
        <mesh position={[0, -0.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.24, 16]} />
          <meshStandardMaterial {...skin} />
        </mesh>
        {/* Legs (weight slightly on one for attitude) */}
        <mesh position={[0.07, -0.84, 0.02]} castShadow receiveShadow>
          <cylinderGeometry args={[0.068, 0.058, 0.5, 12]} />
          <meshStandardMaterial {...skin} />
        </mesh>
        <mesh position={[-0.07, -0.84, -0.02]} castShadow receiveShadow>
          <cylinderGeometry args={[0.068, 0.058, 0.5, 12]} />
          <meshStandardMaterial {...skin} />
        </mesh>
      </group>
      <Outfit />
      <Hair />
    </group>
  )
}
