import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Slide6_Economy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full snap-start flex items-center bg-black overflow-hidden">

            {/* PARALLAX BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y, height: "120%" }} className="relative w-full">
                    <Image
                        src="/globe_pollution.jpg"
                        alt="Global Economy"
                        fill
                        className="object-cover opacity-40 grayscale contrast-125 saturate-0"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2">
                {/* FROSTED GLASS CONTAINER (LEFT) */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-2xl">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                        THIỆT HẠI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">KINH TẾ</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300">
                        <p className="border-l-4 border-yellow-500 pl-6">
                            <strong className="text-yellow-400 block text-2xl mb-2">1.5% GDP</strong>
                            Mất đi mỗi năm do chi phí y tế và giảm năng suất lao động.
                        </p>
                        <p className="border-l-4 border-gray-500 pl-6">
                            <strong className="text-white block text-2xl mb-2">INVESTMENT</strong>
                            Du lịch & FDI bị ảnh hưởng nghiêm trọng do lo ngại về môi trường.
                        </p>
                    </div>
                </div>
            </div>

            {/* STOCK TICKER (BOTTOM) */}
            <div className="absolute bottom-10 left-0 w-full bg-yellow-500/10 border-y border-yellow-500/30 py-4 overflow-hidden z-20 backdrop-blur-sm">
                <div className="animate-marquee flex space-x-12 items-center text-yellow-500 font-mono text-xl font-bold uppercase">
                    <span>GDP DOWN 1.5%</span>
                    <span>///</span>
                    <span>HEALTH COST UP</span>
                    <span>///</span>
                    <span>TOURISM IMPACT: CRITICAL</span>
                    <span>///</span>
                    <span>FDI RISK: HIGH</span>
                    <span>///</span>
                    <span>HKD: -8% INCOME</span>
                    <span>///</span>
                    <span>GDP DOWN 1.5%</span>
                    <span>///</span>
                    <span>HEALTH COST UP</span>
                </div>
            </div>

        </section>
    );
}
