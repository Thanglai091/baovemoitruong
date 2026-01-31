"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
    // Removed framer-motion useScroll/useTransform opacities.
    // This was likely causing the "Black Screen" issue where opacity stayed at 0.
    // Now we just return a clean snap-start section.

    return (
        <section
            id={id}
            className={clsx(
                "relative h-screen w-full snap-start flex flex-col justify-center items-center p-8",
                className
            )}
        >
            {children}
        </section>
    );
}
