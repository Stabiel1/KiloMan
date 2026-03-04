import { ACESFilmicToneMapping } from 'three'
import type { Vector3Tuple } from 'three'
import { useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { Avatar } from './Avatar'

/** Camera presets for vlog capture: full → face/eyes → boots → choker → repeat */
/** Phase 1 spec: low-angle camera (position 0, 0.5, 3; target 0, 1.2, 0). First preset = full avatar. */
const PRESETS: Array<{
  position: Vector3Tuple
  lookAt: Vector3Tuple
  fov: number
}> = [
  { position: [0, 0.5, 3], lookAt: [0, 1.2, 0], fov: 42 },         // full / avatar (spec low-angle)
  { position: [0, 1.0, 1.2], lookAt: [0, 1.25, 0], fov: 38 },     // face / eyes
  { position: [0, 0.1, 2.2], lookAt: [0, 0.2, 0], fov: 42 },      // boots
  { position: [0, 0.9, 1.8], lookAt: [0, 1.0, 0], fov: 42 },      // choker
]

/** Applies current preset to camera; cycles every 10s for live capture */
function CameraRig({
  preset,
}: {
  preset: (typeof PRESETS)[number]
}) {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(...preset.position)
    camera.lookAt(...preset.lookAt)
    camera.fov = preset.fov
    camera.updateProjectionMatrix()
  }, [camera, preset])
  return null
}

/** Luxurious dark background with soft velvet feel — gradient + subtle depth */
function VelvetBackground() {
  return (
    <>
      <mesh position={[0, 0, -4.5]} scale={[24, 24, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#080508"
          transparent
          opacity={1}
        />
      </mesh>
      <mesh position={[0, 0, -4]} scale={[20, 20, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0d080c"
          emissive="#1c0a14"
          emissiveIntensity={0.22}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </>
  )
}

/** Moody cinematic lighting: deep shadows, strong red glow accents */
function Lighting() {
  return (
    <>
      {/* Key: strong from above/side for sharp cheekbones and depth */}
      <directionalLight
        position={[2.8, 4.2, 2]}
        intensity={1.7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0001}
      />
      {/* Fill: soft, avoid crushed blacks */}
      <directionalLight position={[-2.2, 1.8, 2]} intensity={0.22} />
      {/* Moody red glow — rim and accent */}
      <pointLight position={[-2.2, 1.4, 1.2]} color="#ff2a2a" intensity={0.65} distance={9} />
      <pointLight position={[2.2, 1.2, 0.6]} color="#ff3333" intensity={0.35} distance={7} />
      <pointLight position={[0, -0.2, 2]} color="#661a1a" intensity={0.2} distance={6} />
      <ambientLight intensity={0.06} />
    </>
  )
}

/** ACES filmic tone mapping for cinematic look; exposure tuned for moody lighting */
function ToneMapping() {
  const { gl } = useThree()
  useEffect(() => {
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 0.65
  }, [gl])
  return null
}

const CYCLE_MS = 10_000

export function Scene() {
  const [viewIndex, setViewIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(
      () => setViewIndex((i) => (i + 1) % PRESETS.length),
      CYCLE_MS
    )
    return () => clearInterval(id)
  }, [])
  const preset = PRESETS[viewIndex]
  return (
    <>
      <color attach="background" args={['#080508']} />
      <fog attach="fog" args={['#0a0709', 4, 13]} />
      <ToneMapping />
      <CameraRig preset={preset} />
      {/* Phase 1: dark studio HDRI, low intensity so velvet background dominates */}
      <Environment preset="night" intensity={0.15} />
      <VelvetBackground />
      <Lighting />
      <Avatar />
    </>
  )
}
