// src/components/VirtualEnvironment.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Plane, Sphere, ambientLight, SpotLight } from '@react-three/drei';

const VirtualEnvironment = ({ objects }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#7c7c7c" />
      </Plane>

      {objects.map((obj, index) => {
        if (obj.type === 'Box') {
          return <Box key={index} args={[2, 2, 2]} position={[Math.random() * 10, 1, Math.random() * 10]} />;
        } else if (obj.type === 'Sphere') {
          return <Sphere key={index} args={[1.5, 32, 32]} position={[Math.random() * 10, 1, Math.random() * 10]} />;
        }
        return null;
      })}
      <OrbitControls />
    </Canvas>
  );
};

export default VirtualEnvironment;
