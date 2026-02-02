"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";

// --- QUIZ DATA ---
const questions = [
    {
        id: 1,
        question: "Biện pháp nào sau đây giúp khắc phục ô nhiễm không khí hiệu quả nhất?",
        options: ["A. Xây dựng thêm nhà máy nhiệt điện", "B. Trồng nhiều cây xanh", "C. Tăng lượng xe máy cá nhân", "D. Đốt rác tại nguồn"],
        correct: 1 // Index B
    },
    {
        id: 2,
        question: "Việc xử lý nước thải trước khi xả ra môi trường có tác dụng gì?",
        options: ["A. Tăng lượng nước thải", "B. Làm chết sinh vật dưới nước", "C. Giảm thiểu ô nhiễm nước", "D. Tăng chi phí vô ích"],
        correct: 2 // Index C
    },
    {
        id: 3,
        question: "Để khắc phục ô nhiễm đất, biện pháp nào sau đây là phù hợp nhất?",
        options: ["A. Chôn lấp rác thải bừa bãi", "B. Sử dụng nhiều phân bón hóa học", "C. Thu gom và xử lý rác thải đúng quy định", "D. Đổ dầu thải ra đất"],
        correct: 2 // Index C
    },
    {
        id: 4,
        question: "Việc tái chế rác thải có ý nghĩa gì trong bảo vệ môi trường?",
        options: ["A. Tăng lượng rác thải", "B. Gây ô nhiễm môi trường", "C. Giảm tài nguyên thiên nhiên bị khai thác", "D. Tốn kém không cần thiết"],
        correct: 2 // Index C
    },
    {
        id: 5,
        question: "Sử dụng năng lượng tái tạo giúp khắc phục hậu quả ô nhiễm môi trường như thế nào?",
        options: ["A. Tăng phát thải khí gây ô nhiễm", "B. Làm cạn kiệt tài nguyên thiên nhiên", "C. Giảm phát thải khí gây ô nhiễm", "D. Gây hiệu ứng nhà kính"],
        correct: 2 // Index C
    },
    {
        id: 6,
        question: "Hoạt động nào sau đây góp phần phục hồi hệ sinh thái bị ô nhiễm?",
        options: ["A. Khai thác rừng bừa bãi", "B. Săn bắt động vật hoang dã", "C. Trồng rừng và bảo vệ rừng", "D. Lấp hồ để xây chung cư"],
        correct: 2 // Index C
    }
];

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
    // Game States: 'IDLE' | 'SUSPENSE' | 'REVEAL' | 'FINISHED'
    const [gameState, setGameState] = useState<'IDLE' | 'SUSPENSE' | 'REVEAL' | 'FINISHED'>('IDLE');
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [soundEnabled, setSoundEnabled] = useState(true);

    // Audio Refs
    const sfxSuspense = useRef<HTMLAudioElement | null>(null);
    const sfxCorrect = useRef<HTMLAudioElement | null>(null);
    const sfxWrong = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio
    useEffect(() => {
        sfxSuspense.current = new Audio("/sfx/suspense.mp3");
        sfxCorrect.current = new Audio("/sfx/correct.mp3");
        sfxWrong.current = new Audio("/sfx/wrong.mp3");
    }, []);

    const playSound = (type: 'suspense' | 'correct' | 'wrong') => {
        if (!soundEnabled) return;
        try {
            if (type === 'suspense') sfxSuspense.current?.play();
            if (type === 'correct') sfxCorrect.current?.play();
            if (type === 'wrong') sfxWrong.current?.play();
        } catch (e) {
            console.warn("Audio play failed (user interaction needed first)", e);
        }
    };

    const handleOptionClick = (index: number) => {
        if (gameState !== 'IDLE') return; // Locked during other phases

        setSelectedOption(index);
        setGameState('SUSPENSE');
        playSound('suspense');

        // Suspense Phase (2 seconds)
        setTimeout(() => {
            const correct = index === questions[currentQ].correct;
            setIsCorrect(correct);
            setGameState('REVEAL');
            playSound(correct ? 'correct' : 'wrong');
        }, 2000);
    };

    const handleNextQuestion = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(c => c + 1);
            setGameState('IDLE');
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            setGameState('FINISHED');
        }
    };

    const resetGame = () => {
        setCurrentQ(0);
        setGameState('IDLE');
        setSelectedOption(null);
        setIsCorrect(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* CINEMATIC BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />

            {/* WRONG ANSWER FLASH OVERLAY */}
            <AnimatePresence>
                {gameState === 'REVEAL' && isCorrect === false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0, 0.8, 0] }} // Flash effect
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-red-600/50 z-10 pointer-events-none mix-blend-overlay"
                    />
                )}
            </AnimatePresence>

            {/* MAIN GAME STAGE */}
            <motion.div
                className={clsx(
                    "relative z-20 w-full max-w-7xl h-full flex flex-col p-6 md:p-12",
                    gameState === 'REVEAL' && isCorrect === false && "animate-shake" // Screen shake logic
                )}
            >
                {/* TOP BAR */}
                <div className="flex justify-between items-start mb-12">
                    <div className="flex items-center space-x-4">
                        <span className="text-neon-cyan font-mono text-xl tracking-widest border border-neon-cyan px-4 py-2 rounded">
                            Q{currentQ + 1}/{questions.length}
                        </span>
                        <button onClick={() => setSoundEnabled(!soundEnabled)} className="text-gray-500 hover:text-white transition-colors">
                            {soundEnabled ? <Volume2 /> : <VolumeX />}
                        </button>
                    </div>
                    <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <X className="w-8 h-8 text-white" />
                    </button>
                </div>

                {gameState !== 'FINISHED' ? (
                    <>
                        {/* QUESTION AREA */}
                        <div className="flex-1 flex items-center justify-center mb-12">
                            <motion.h1
                                key={currentQ}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-4xl md:text-6xl font-black text-white text-center leading-tight drop-shadow-2xl"
                            >
                                {questions[currentQ].question}
                            </motion.h1>
                        </div>

                        {/* ACTIONS / CONTROLS */}
                        <AnimatePresence>
                            {gameState === 'REVEAL' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-8 right-12 z-50"
                                >
                                    <button
                                        onClick={handleNextQuestion}
                                        className="px-10 py-5 bg-white text-black font-black text-2xl rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-3"
                                    >
                                        <span>NEXT</span> <ArrowRight className="w-8 h-8" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ANSWERS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/3">
                            {questions[currentQ].options.map((opt, idx) => {
                                const isSelected = selectedOption === idx;
                                const isThinking = gameState === 'SUSPENSE' && isSelected;
                                const isRevealed = gameState === 'REVEAL';
                                const isCorrectAnswer = idx === questions[currentQ].correct;

                                // VISUAL LOGIC
                                let stateClass = "border-white/20 bg-white/5 text-gray-300"; // Default Idle

                                if (gameState === 'IDLE' || gameState === 'SUSPENSE') {
                                    if (isSelected) {
                                        // Suspense State (Yellow/Orange)
                                        stateClass = "border-yellow-400 bg-yellow-400/20 text-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.2)] scale-[1.02]";
                                    } else if (selectedOption !== null) {
                                        // Dim others
                                        stateClass = "opacity-30 border-transparent";
                                    }
                                } else if (gameState === 'REVEAL') {
                                    if (isCorrectAnswer) {
                                        // Always highlight correct answer in Green at end
                                        stateClass = "border-neon-green bg-neon-green text-black font-bold shadow-[0_0_50px_rgba(10,255,100,0.6)] scale-[1.05]";
                                    } else if (isSelected && !isCorrectAnswer) {
                                        // Wrong Selection (Red)
                                        stateClass = "border-red-600 bg-red-600 text-white shadow-[0_0_50px_rgba(220,38,38,0.6)]";
                                    } else {
                                        stateClass = "opacity-20";
                                    }
                                }

                                return (
                                    <motion.button
                                        key={idx}
                                        onClick={() => handleOptionClick(idx)}
                                        disabled={gameState !== 'IDLE'}
                                        className={clsx(
                                            "w-full h-full text-left px-8 py-6 rounded-2xl border-2 transition-all duration-300 text-2xl md:text-3xl font-bold flex items-center relative overflow-hidden",
                                            stateClass
                                        )}
                                        animate={isThinking ? { scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 0.5 } } : {}}
                                    >
                                        <span className="relative z-10">{opt}</span>
                                        {/* Suspense Progress Bar */}
                                        {isThinking && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2, ease: "linear" }}
                                                className="absolute bottom-0 left-0 h-2 bg-yellow-400"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    /* FINISHED SCREEN */
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-white"
                        >
                            <h2 className="text-6xl md:text-9xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
                                GAME OVER
                            </h2>
                            <p className="text-3xl text-gray-400">Survival Mode Completed.</p>
                        </motion.div>

                        <div className="flex gap-6">
                            <button onClick={resetGame} className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-xl font-bold text-white transition-colors">
                                Play Again
                            </button>
                            <button onClick={onClose} className="px-8 py-4 bg-neon-green text-black rounded-full text-xl font-bold hover:scale-105 transition-transform">
                                Exit Game
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
