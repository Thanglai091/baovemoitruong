import { motion } from "framer-motion";

export default function Slide7_Inequality() {
    return (
        <section className="relative h-screen w-full snap-start overflow-hidden bg-black">

            {/* DIAGONAL SPLIT CONTAINER */}
            <div className="absolute inset-0 flex flex-col md:flex-row">

                {/* TOP-LEFT: Clean/Rich (Dark Teal) */}
                <div
                    className="relative w-full md:w-full h-[50%] md:h-full bg-teal-900 clip-diagonal-top flex items-center justify-center md:items-start md:justify-start p-10 md:p-20 z-10"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)' }}
                >
                    <div className="max-w-lg text-left">
                        <h2 className="text-4xl md:text-5xl font-mono text-teal-200 font-bold mb-4 opacity-80">
                            KHU ĐÔ THỊ <br /> CAO CẤP
                        </h2>
                        <p className="text-teal-100 text-lg font-serif italic">"Không gian xanh, lọc khí hiện đại."</p>
                    </div>
                </div>

                {/* BACKGROUND TEXTURE for Bottom Right */}
                <div className="absolute inset-0 bg-[#1a1a1a] z-0 flex items-end justify-end p-10 md:p-20">
                    <div className="max-w-lg text-right">
                        <h2 className="text-4xl md:text-5xl font-mono text-gray-500 font-bold mb-4">
                            VEN KÊNH RẠCH <br /> Ô NHIỄM
                        </h2>
                        <p className="text-gray-400 text-lg font-serif italic">"Thiếu nước sạch, không khí độc hại."</p>
                    </div>
                </div>
            </div>

            {/* NEON LINE SEPARATOR */}
            <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <svg className="w-full h-full">
                    <line
                        x1="0" y1="100%"
                        x2="100%" y2="30%"
                        stroke="#00f0ff"
                        strokeWidth="4"
                        className="drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                    />
                </svg>
            </motion.div>

            {/* CENTER TEXT */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-5xl md:text-8xl font-black text-white uppercase tracking-widest text-center mix-blend-overlay"
                >
                    BẤT CÔNG
                </motion.h2>
            </div>

        </section>
    );
}
