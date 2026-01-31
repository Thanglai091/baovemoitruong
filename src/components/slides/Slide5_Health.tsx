import { motion } from "framer-motion";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import { Activity, Wind, TrendingDown } from "lucide-react";

export default function Slide5_Health() {
    return (
        <section className="relative h-screen w-full snap-start flex items-center justify-center bg-black overflow-hidden align-middle">
            <ParticleBackground color="bg-blue-500" />
            <div className="absolute inset-0 bg-blue-900/10" />

            <div className="max-w-7xl w-full px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                        CHẨN ĐOÁN <span className="text-neon-red text-glow-red">Y TẾ</span>
                    </h2>
                    <div className="w-40 h-1 bg-neon-red mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* CARD 1: Respiratory */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <Wind className="w-8 h-8 animate-pulse" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">DIAG_CODE: 001</span>
                        </div>
                        <div className="text-5xl font-bold text-white mb-2">30%</div>
                        <div className="text-gray-400 font-serif text-lg">Gia tăng bệnh hô hấp</div>

                        {/* Lungs Animation Visualization */}
                        <div className="mt-6 flex justify-center opacity-30 mt-auto">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-24 h-20 bg-blue-400/20 rounded-full blur-xl"
                            />
                        </div>
                    </motion.div>

                    {/* CARD 2: Cancer */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-red-500/5 border border-red-500/20 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-red-500/20 rounded-lg text-red-500">
                                <Activity className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">DIAG_CODE: 002</span>
                        </div>
                        <div className="text-5xl font-bold text-white mb-2">HIGH</div>
                        <div className="text-gray-400 font-serif text-lg">Nguy cơ ung thư</div>

                        {/* ECG Animation */}
                        <div className="mt-8 h-12 w-full relative overflow-hidden">
                            <svg className="w-full h-full" viewBox="0 0 300 50">
                                <path
                                    d="M0 25 H 100 L 110 5 L 120 45 L 130 25 H 300"
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                    className="animate-ecg"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* CARD 3: Cost */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-gray-500/5 border border-gray-500/20 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-gray-500/20 rounded-lg text-gray-300">
                                <TrendingDown className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">STAT_CODE: 003</span>
                        </div>
                        <div className="text-5xl font-bold text-white mb-2">8%</div>
                        <div className="text-gray-400 font-serif text-lg">Thu nhập hộ gia đình</div>

                        <div className="mt-4 text-xs text-gray-500 border-t border-gray-700 py-4">
                            ECONOMIC_LOSS_PROJECTED
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
