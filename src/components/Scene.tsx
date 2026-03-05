import { ACESFilmicToneMapping } from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { Avatar } from './Avatar'

/** Low-angle camera looking up at the figure for presence and height */
function CameraRig() {
  const { camera } = useThree()
  useEffect(() => {
    camera.lookAt(0, 1.05, 0)
  }, [camera])
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

function ToneMapping() {
  const { gl } = useThree()
  useEffect(() => {
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 0.65
  }, [gl])
  return null
}

export function Scene() {
  return (
    <>
      <color attach="background" args={['#080508']} />
      <fog attach="fog" args={['#0a0709', 4, 13]} />
      <ToneMapping />
      <CameraRig />
      <VelvetBackground />
      <Lighting />
      <Avatar />
    </>
  )
}
