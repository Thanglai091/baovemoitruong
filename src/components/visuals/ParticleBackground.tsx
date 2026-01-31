"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleBackgroundProps {
    color?: string; // e.g. "bg-neon-red" or hex
}

export default function ParticleBackground({ color = "bg-white" }: ParticleBackgroundProps) {
    // Create fixed number of particles to avoid hydration mismatch
    const particleCount = 20;
    // Use state to handle random positions only on client
    const [particles, setParticles] = useState<Array<{ top: string, left: string, duration: number, delay: number, size: number }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 10, // 10-20s float
            delay: Math.random() * 5,
            size: Math.random() * 3 + 1, // 1-4px
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Ambient Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] ${color} blur-[120px] opacity-10 rounded-full`} />

            {/* Particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${color} opacity-40`}
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Abstract Grid Floor (Perspectve) */}
            <div className="absolute bottom-0 w-full h-1/3 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))] z-0" />
            <div
                className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-10 origin-bottom transform-3d rotate-x-60"
                style={{
                    backgroundImage: `
             linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
           `,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg)'
                }}
            />
        </div>
    );
}
