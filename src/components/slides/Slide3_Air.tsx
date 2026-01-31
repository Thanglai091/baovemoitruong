import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import GlitchText from "@/components/ui/GlitchText";
import { AlertTriangle, Wind } from "lucide-react";

export default function Slide3_Air() {
    return (
        <section className="relative h-screen w-full snap-start flex items-center justify-center bg-black overflow-hidden">
            {/* Background Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-red/20 via-black to-black animate-pulse" />
            <ParticleBackground color="bg-neon-red" />

            {/* Hazard Stripes Top/Bottom */}
            <div className="absolute top-0 left-0 w-full h-4 bg-hazard-stripes opacity-70" />
            <div className="absolute bottom-0 left-0 w-full h-4 bg-hazard-stripes opacity-70" />

            <div className="max-w-6xl w-full px-6 relative z-10 text-center">

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center space-x-3 text-neon-red border border-neon-red px-6 py-2 rounded-full bg-neon-red/10 animate-pulse mb-8"
                >
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-lg font-bold uppercase tracking-[0.2em]">Air Quality Warning</span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12">
                    KHÔNG KHÍ <br />
                    <span className="text-gray-500 text-2xl font-sans tracking-tight">"Phổi của thành phố đang bị tấn công"</span>
                </h2>

                {/* Glitch Gauge */}
                <div className="relative inline-block p-12 border-2 border-neon-red/50 bg-black/60 backdrop-blur-md">
                    {/* Corner Decors */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-neon-red" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-red" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-neon-red" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-red" />

                    <div className="text-neon-red/40 text-sm font-mono absolute top-2 right-2">AQI INDEX</div>

                    <div className="animate-glitch-clip">
                        <GlitchText as="div" className="text-8xl md:text-9xl font-bold text-neon-red text-glow-red">
                            150-200
                        </GlitchText>
                    </div>

                    <div className="mt-4 text-neon-red/80 font-bold uppercase tracking-widest animate-pulse">
                        Dangerous Levels
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 max-w-lg mx-auto gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">99%</div>
                        <div className="text-xs text-gray-500 uppercase">Dust Pollution</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">PM2.5</div>
                        <div className="text-xs text-gray-500 uppercase">Fine Particles</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
