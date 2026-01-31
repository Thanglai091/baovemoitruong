"use client";

import ScanlineOverlay from "@/components/visuals/ScanlineOverlay";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import GlitchText from "@/components/ui/GlitchText";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Import New Slide Components
import Slide2_Context from "@/components/slides/Slide2_Context";
import Slide3_Air from "@/components/slides/Slide3_Air";
import Slide4_Water from "@/components/slides/Slide4_Water";
import Slide5_Health from "@/components/slides/Slide5_Health";
import Slide6_Economy from "@/components/slides/Slide6_Economy";
import Slide7_Inequality from "@/components/slides/Slide7_Inequality";
import Slide8_Sustainability from "@/components/slides/Slide8_Sustainability";
import Slide9_Solutions from "@/components/slides/Slide9_Solutions";
import Slide10_Action from "@/components/slides/Slide10_Action";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white font-sans selection:bg-clean-green selection:text-pollution-black">
      <ScanlineOverlay />

      {/* SLIDE 1: INTRO (Kept as is - Red Theme) */}
      <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <ParticleBackground color="bg-neon-red" />

        <div className="relative z-20 text-center max-w-6xl px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-6xl md:text-9xl font-heading font-bold mb-4 tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              TP. Hồ Chí Minh
            </h1>
            <GlitchText className="text-5xl md:text-7xl font-bold text-neon-red tracking-wide uppercase mb-8 block">
              Cái Giá Của Sự Phát Triển
            </GlitchText>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl font-mono text-neon-orange/80 tracking-widest border-t border-b border-neon-orange/30 py-4 inline-block"
          >
            [ SYSTEM WARNING: ENVIRONMENTAL CRITICAL ]
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, repeat: Infinity, duration: 2 }}
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <ArrowDown className="w-8 h-8 text-neon-red animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* NEW SLIDES */}
      <Slide2_Context />
      <Slide3_Air />
      <Slide4_Water />
      <Slide5_Health />
      <Slide6_Economy />
      <Slide7_Inequality />
      <Slide8_Sustainability />
      <Slide9_Solutions />
      <Slide10_Action />

    </main>
  );
}
