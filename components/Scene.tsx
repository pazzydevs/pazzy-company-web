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
                mesh.rotation.x += 0.005 * items[i].speed;
                mesh.rotation.y += 0.005 * items[i].speed;
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
                            color="#d4af37"
                            transmission={0.9}
                            opacity={1}
                            transparent
                            metalness={0.6}
                            roughness={0.2}
                            ior={1.5}
                            thickness={2}
                            specularIntensity={1}
                            specularColor="#ffffff"
                            clearcoat={1}
                            clearcoatRoughness={0.1}
                            envMapIntensity={1.5}
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4af37" />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Environment preset="city" />
                <FloatingGeometries />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        </div>
    );
}
