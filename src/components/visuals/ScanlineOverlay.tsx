"use client";

import { clsx } from "clsx";

export default function ScanlineOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-30">
            {/* Scanline moving bar */}
            <div className="w-full h-1 bg-white/10 absolute animate-scanline shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

            {/* Static interference lines */}
            <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000000_3px)] opacity-20" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
        </div>
    );
}
