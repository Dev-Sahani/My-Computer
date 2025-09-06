import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model(props) {
  const groupRef = useRef();
  const gltf = useGLTF('/PC.glb');

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    gltf.scene.position.sub(center); // move model to center of group
  }, [gltf]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // rotate around Y-axis
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}
