import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import { useState } from "react";
import QuizModal from "@/components/ui/QuizModal";

export default function Slide10_Action() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <section className="relative h-screen w-full snap-start flex items-center justify-center bg-black overflow-hidden align-middle">
            <ParticleBackground color="bg-neon-green" />

            {/* Quiz Modal */}
            <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />

            {/* TUNNEL EFFECT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full border border-neon-green/20 animate-tunnel"
                        style={{
                            width: `${(i + 1) * 20}vw`,
                            height: `${(i + 1) * 20}vw`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter"
                >
                    Tương Lai <br /> <span className="text-neon-green text-glow-green">Trong Tay Bạn</span>
                </motion.h2>

                <p className="text-2xl text-gray-400 font-light mb-16">
                    Đừng để TP.HCM chìm trong khói bụi và ô nhiễm. <br /> Hãy hành động ngay hôm nay.
                </p>

                <motion.button
                    onClick={() => setShowQuiz(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-16 py-8 bg-transparent overflow-hidden rounded-full cursor-pointer z-50"
                >
                    <div className="absolute inset-0 w-full h-full bg-neon-green opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className="absolute inset-0 w-full h-full border-2 border-neon-green rounded-full shadow-[0_0_30px_#0aff60]" />

                    <span className="relative z-10 text-3xl font-bold text-white group-hover:text-black uppercase tracking-widest transition-colors duration-300">
                        Hành Động Ngay
                    </span>
                </motion.button>
            </div>

        </section>
    );
}
