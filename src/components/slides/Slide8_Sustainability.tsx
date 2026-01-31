import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import { Globe } from "lucide-react";

export default function Slide8_Sustainability() {
    return (
        <section className="relative h-screen w-full snap-start flex items-center bg-black overflow-hidden">
            <ParticleBackground color="bg-neon-green" />

            <div className="w-full h-full flex">

                {/* LEFT: Massive Vertical Text (The WALL) */}
                <div className="w-1/3 md:w-1/4 h-full bg-neon-green/10 border-r border-neon-green/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#0aff60_1px,#0aff60_2px)] opacity-10 bg-[length:100%_20px]" />
                    <motion.h1
                        className="text-[12rem] md:text-[20rem] font-black text-transparent rotate-90 whitespace-nowrap select-none opacity-50"
                        style={{ WebkitTextStroke: '4px #0aff60' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 0.5, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        ESG
                    </motion.h1>
                </div>

                {/* RIGHT: Content */}
                <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <Globe className="w-12 h-12 text-neon-green" />
                            <div className="h-px flex-1 bg-neon-green/50" />
                            <span className="font-mono text-neon-green uppercase tracking-widest">Global Challenge</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
                            THÁCH THỨC <br />
                            <span className="text-neon-green text-glow-green">PHÁT TRIỂN BỀN VỮNG</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-neon-green pl-8 py-2">
                            "Tiêu chuẩn ESG (Môi trường - Xã hội - Quản trị) đang là rào cản thu hút vốn FDI công nghệ cao. Chúng ta đang mất lợi thế cạnh tranh với <span className="text-white font-bold">Singapore</span> hay <span className="text-white font-bold">Bangkok</span>."
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
