"use client"

import {useRef} from "react"
import {Canvas, useFrame, useLoader} from "@react-three/fiber"
import {OrbitControls, Environment} from "@react-three/drei"
import {TextureLoader} from "three"
import type * as THREE from "three"

function Earth() {
    const meshRef = useRef<THREE.Mesh>(null)

    // Load the Earth texture
    const earthTexture = useLoader(TextureLoader, "https://8.haory.top/j/j11/datanews//part4/ddd.png")

    // Rotate the Earth continuously
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]}/>
            <meshStandardMaterial map={earthTexture} roughness={0.8} metalness={0.1}/>
        </mesh>
    )
}

export default function Component() {
    return (
        <div className="w-full h-screen ">
            <Canvas camera={{position: [0, 0, 6], fov: 45}}>
                {/* Lighting */}
                <ambientLight intensity={0.3}/>
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow/>
                <pointLight position={[-5, -5, -5]} intensity={0.5}/>

                {/* Earth */}
                <Earth/>

                {/* Environment and Controls */}
                <Environment preset="night"/>
                <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={10} autoRotate={false}/>
            </Canvas>
        </div>
    )
}
