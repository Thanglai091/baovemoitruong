import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import { Users, TrendingUp } from "lucide-react";

export default function Slide2_Context() {
    return (
        <section className="relative h-screen w-full snap-start flex items-center bg-black overflow-hidden border-t border-neon-orange/20">
            <ParticleBackground color="bg-neon-orange" />

            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

                {/* LEFT: Text Content (40%) */}
                <div className="md:col-span-5 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white uppercase tracking-wider">
                            Đầu Tàu <br />
                            <span className="text-neon-orange text-glow-orange">Kinh Tế</span>
                        </h2>
                        <div className="w-24 h-1 bg-neon-orange mb-6" />
                        <p className="text-xl text-gray-300 font-mono leading-relaxed">
                            TP.HCM đóng góp <span className="text-white font-bold">25% GDP</span> cả nước, nhưng đang phải đối mặt với áp lực chưa từng có lên hạ tầng và môi trường.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="border border-neon-orange/30 p-4 bg-neon-orange/5 backdrop-blur-sm">
                            <div className="text-neon-orange mb-2"><TrendingUp /></div>
                            <div className="text-2xl font-bold text-white">25%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">GDP Contrib</div>
                        </div>
                        <div className="border border-neon-orange/30 p-4 bg-neon-orange/5 backdrop-blur-sm">
                            <div className="text-neon-orange mb-2"><Users /></div>
                            <div className="text-2xl font-bold text-white">13M+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Real Pop</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Pulse Map & Massive Number (60%) */}
                <div className="md:col-span-7 relative flex justify-center items-center h-[500px]">
                    {/* Radar Pulse Effect */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-64 h-64 border border-neon-orange/30 rounded-full animate-radar delay-0" />
                        <div className="w-64 h-64 border border-neon-orange/30 rounded-full animate-radar delay-1000" />
                        <div className="w-64 h-64 border border-neon-orange/30 rounded-full animate-radar delay-2000" />
                        <div className="w-4 h-4 bg-neon-orange rounded-full shadow-[0_0_20px_#ff8533] z-20" />
                    </div>

                    {/* Massive Hollow Text */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-[8rem] md:text-[12rem] font-bold text-transparent z-10 leading-none select-none pointer-events-none"
                        style={{ WebkitTextStroke: '2px rgba(255, 133, 51, 0.5)' }}
                    >
                        10TR
                    </motion.h1>
                    <div className="absolute bottom-10 right-10 font-mono text-neon-orange/60 text-sm">
                        [ SYSTEM_LOAD: CRITICAL ]
                    </div>
                </div>
            </div>
        </section>
    );
}
