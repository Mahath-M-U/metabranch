import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Avatar from "./3d/Avatar";

import './home.css'
function Home() {
  return (
    <div className="Canvas">
      <Canvas>
        <Suspense fallback={null}>
          <Avatar/>
          <OrbitControls />
          <Environment preset="apartment" false />
        </Suspense>
      </Canvas>
    </div>
)}
export default Home