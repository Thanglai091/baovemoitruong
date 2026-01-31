import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import GlitchText from "@/components/ui/GlitchText";
import Image from "next/image";
import { Droplets } from "lucide-react";

export default function Slide4_Water() {
    return (
        <section className="relative h-screen w-full snap-start flex items-center justify-center bg-black overflow-hidden border-t border-gray-800">
            <ParticleBackground color="bg-gray-500" />

            <div className="max-w-7xl w-full h-[80vh] px-6 grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 relative z-10">

                {/* BLOCK 1: Title (Top Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="md:col-span-1 row-span-1 bg-black/40 border border-white/10 p-8 flex flex-col justify-center backdrop-blur-md"
                >
                    <Droplets className="w-12 h-12 text-neon-cyan mb-6" />
                    <h2 className="text-4xl font-serif font-bold text-white leading-tight">
                        Nước & <br />
                        <span className="text-neon-cyan text-glow-cyan">Rác Thải</span>
                    </h2>
                </motion.div>

                {/* BLOCK 2: CCTV Image (Right Side - Span 2 cols, 2 rows) */}
                <motion.div
                    className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-white/20 bg-gray-900"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Image
                        src="/dirty_water.jpg"
                        alt="Dirty Water"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out grayscale contrast-125"
                    />
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    {/* Moving Scan Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,1)] animate-scanline z-20" />

                    <div className="absolute top-6 left-6 flex items-center space-x-2 z-30">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-neon-cyan">LIVE FEED :: CAM_04 // SAIGON_RIVER</span>
                    </div>
                </motion.div>

                {/* BLOCK 3: Glass Stat Card (Bottom Left) */}
                <motion.div
                    className="md:col-span-1 row-span-1 bg-neon-red/10 border border-neon-red/30 p-8 flex flex-col justify-center backdrop-blur-xl relative overflow-hidden group hover:bg-neon-red/20 transition-colors"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-neon-red rounded-full blur-3xl opacity-20" />

                    <div className="text-sm font-mono text-neon-red mb-2">DAILY WASTE (BY WEIGHT)</div>
                    <GlitchText as="div" className="text-6xl font-bold text-white group-hover:translate-x-2 transition-transform">
                        9.000
                    </GlitchText>
                    <div className="text-xl text-white/60 font-serif italic mt-2">Tấn / Ngày</div>
                </motion.div>

            </div>
        </section>
    );
}
