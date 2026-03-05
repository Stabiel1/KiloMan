import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'
import './App.css'

/**
 * Root app: full-viewport R3F Canvas with antialiasing, fixed camera, and shadow support.
 * Renders the main 3D scene (background, lighting, avatar).
 */
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0.2, 3.3], fov: 42 }}
        dpr={[1, 2]}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
