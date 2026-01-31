import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Leaf, Users } from "lucide-react";

const solutions = [
    {
        id: "gov",
        title: "NHÀ NƯỚC",
        subtitle: "Policy & Infrastructure",
        desc: "Hoàn thiện khung pháp lý về môi trường. Đầu tư hệ thống quan trắc tự động và xử lý rác thải công nghệ cao.",
        icon: <ShieldCheck className="w-16 h-16" />,
        color: "neon-cyan",
        bg: "bg-neon-cyan",
        text: "text-neon-cyan",
        border: "border-neon-cyan"
    },
    {
        id: "ent",
        title: "DOANH NGHIỆP",
        subtitle: "Green Tech & ESG",
        desc: "Chuyển đổi xanh, áp dụng tiêu chuẩn ESG. Sử dụng năng lượng tái tạo và công nghệ sản xuất sạch.",
        icon: <Leaf className="w-16 h-16" />,
        color: "neon-green",
        bg: "bg-neon-green",
        text: "text-neon-green",
        border: "border-neon-green"
    },
    {
        id: "ppl",
        title: "NGƯỜI DÂN",
        subtitle: "Awareness & Action",
        desc: "Thay đổi thói quen tiêu dùng. Sử dụng giao thông công cộng và phân loại rác tại nguồn.",
        icon: <Users className="w-16 h-16" />,
        color: "neon-orange",
        bg: "bg-neon-orange",
        text: "text-neon-orange",
        border: "border-neon-orange"
    }
];

export default function Slide9_Solutions() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="relative h-screen w-full snap-start flex bg-black overflow-hidden">

            {solutions.map((item) => {
                const isHovered = hoveredId === item.id;
                const isFaded = hoveredId !== null && !isHovered;

                return (
                    <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`relative h-full border-r ${item.border}/20 flex flex-col justify-center items-center overflow-hidden cursor-pointer transition-colors duration-500`}
                        animate={{
                            flex: isHovered ? 3 : 1,
                            backgroundColor: isHovered ? `rgba(0,0,0,0.8)` : `rgba(0,0,0,0.95)`
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* Background Glow */}
                        <div className={`absolute inset-0 ${item.bg} opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`} />

                        {/* Content Container */}
                        <div className="relative z-10 p-8 flex flex-col items-center text-center min-w-[300px]">
                            <motion.div
                                animate={{ scale: isHovered ? 1.2 : 1, color: isHovered ? '#fff' : 'inherit' }}
                                className={`mb-8 ${item.text} transition-colors`}
                            >
                                {item.icon}
                            </motion.div>

                            <h3 className={`text-4xl font-bold uppercase mb-2 ${isHovered ? 'text-white' : item.text}`}>
                                {item.title}
                            </h3>

                            <p className={`text-sm font-mono tracking-widest mb-8 ${isFaded ? 'opacity-0' : 'text-gray-500'}`}>
                                {item.subtitle}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                                className="overflow-hidden"
                            >
                                <p className="text-xl text-gray-300 max-w-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )
            })}

        </section>
    );
}
