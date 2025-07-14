import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Box } from "@mui/material";

// 3D Model Component
const Model = () => {
  const gltf = useGLTF("/base.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[4, 2, 2]}
      position={[0, -1.5, 0]}
    />
  );
};

// Loader shown while GLTF loads
const Loader = () => {
  return (
    <Html center>
      <div
        style={{
          padding: "12px 24px",
          background: "rgba(0,0,0,0.7)",
          borderRadius: "12px",
          color: "#00f0ff",
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "0 0 20px rgba(0,255,255,0.4)",
        }}
      >
        Loading Model...
      </div>
    </Html>
  );
};

const LogoModel: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 300, md: 500 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas camera={{ position: [1, 2.5, 5], fov: 45 }}>
        <ambientLight intensity={0.3} /> 
        <directionalLight
          castShadow
          position={[3, 5, 2]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={10}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </Box>
  );
};

export default LogoModel;
