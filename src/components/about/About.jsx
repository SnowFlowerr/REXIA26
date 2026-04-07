import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
import { Box3, Vector3 } from 'three'

function Model() {
  const { scene } = useGLTF('/model.gltf') // 👈 change this to your file name

  useEffect(() => {
    // Auto-fit model to a good size
    const box = new Box3().setFromObject(scene)
    const size = new Vector3()
    box.getSize(size)
    const maxDim = Math.max(size.x, size.y, size.z)
    scene.scale.setScalar(2 / maxDim)
  }, [scene])

  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}          // adjust Y to move up/down
      rotation={[0, Math.PI / 4, 0]} // optional: rotate 45° on Y axis
    />
  )
}

export default function About() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a2e' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>

        {/* Loading fallback while model loads */}
        <Suspense fallback={null}>

          {/* Nice auto-lighting and centering */}
          <Stage environment="dawn" intensity={0.6}>
            <Model />
          </Stage>

        </Suspense>

        {/* Mouse controls: rotate, zoom, pan */}
        <OrbitControls
  enableZoom={false}
  enablePan={true}
  enableRotate={true}
  autoRotate={true}
  autoRotateSpeed={1.5}
  minPolarAngle={Math.PI / 2}  // 👈 add this
  maxPolarAngle={Math.PI / 2}  // 👈 add this
/>

      </Canvas>
    </div>
  )
}

// Preload for better performance
useGLTF.preload('/model.gltf') // 👈 match the same file name above