import React from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Avatar() {
    const gltf = useLoader(GLTFLoader, "./assets/scene.gltf");
  return (
    <>
        <primitive object={gltf.scene} scale={0.5} />
    </>
  )
}

export default Avatar
