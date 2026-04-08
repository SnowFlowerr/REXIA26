import styles from "./Home.module.css";
import bg from "../../assets/bg.jpg";
// import { Suspense, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Stage } from "@react-three/drei";
// import { Box3, Vector3 } from "three";

// function Model() {
//   const { scene } = useGLTF("/model.gltf"); // 👈 your model file

//   useEffect(() => {
//     const box = new Box3().setFromObject(scene);
//     const size = new Vector3();
//     box.getSize(size);
//     const maxDim = Math.max(size.x, size.y, size.z);
//     scene.scale.setScalar(2 / maxDim);
//   }, [scene]);

//   return <primitive object={scene} position={[0, -1, 0]} />;
// }

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* 3D Model — sits between overlay and text */}
      {/* <div className={styles.modelCanvas}>
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="sunset" intensity={0.5}>
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={true}
            autoRotateSpeed={5}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div> */}

      {/* Text on top */}
      <h1 className={styles.title}>REXIA<span className={styles.comma}>,</span>26</h1>
      <p className={styles.subtitle}>REDEFINING BOUNDARIES</p>
    </div>
  );
}

// useGLTF.preload("/model.gltf");