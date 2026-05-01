"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingGeometries() {
    const meshRefs = useRef<THREE.Mesh[]>([]);

    const geometries = useMemo(() => [
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.TorusGeometry(0.7, 0.2, 16, 100),
        new THREE.OctahedronGeometry(1, 0),
    ], []);

    const items = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            ] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: Math.random() * 0.5 + 0.2,
            geometry: geometries[i % geometries.length],
            speed: Math.random() * 0.5 + 0.2
        }));
    }, [geometries]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRefs.current.forEach((mesh, i) => {
            if (mesh) {
                mesh.rotation.x += 0.004 * items[i].speed;
                mesh.rotation.y += 0.004 * items[i].speed;
                mesh.position.y += Math.sin(time + i) * 0.002;
            }
        });
    });

    return (
        <>
            {items.map((item, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh
                        ref={(el) => { if (el) meshRefs.current[i] = el; }}
                        position={item.position}
                        rotation={item.rotation}
                        scale={item.scale}
                    >
                        <primitive object={item.geometry} attach="geometry" />
                        <meshPhysicalMaterial
                            color="#E8342A"
                            transmission={0.85}
                            opacity={1}
                            transparent
                            metalness={0.3}
                            roughness={0.15}
                            ior={1.6}
                            thickness={2}
                            specularIntensity={1}
                            specularColor="#ff8080"
                            clearcoat={1}
                            clearcoatRoughness={0.05}
                            envMapIntensity={1.2}
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#080808]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.15} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.6} color="#E8342A" />
                <pointLight position={[0, 5, 5]} intensity={0.4} color="#ff6b5e" />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Environment preset="city" />
                <FloatingGeometries />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/60 to-[#080808]" />
        </div>
    );
}
