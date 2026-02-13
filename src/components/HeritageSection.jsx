import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Mandala = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
    >
        <circle cx="50" cy="50" r="48" />
        <path d="M50 2 C 70 20, 80 30, 98 50 C 80 70, 70 80, 50 98 C 30 80, 20 70, 2 50 C 20 30, 30 20, 50 2 Z" />
        <circle cx="50" cy="50" r="20" />
        <path d="M50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" />
    </svg>
);

const StoryCard = ({ title, text, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
    >
        <div className="flex-1 w-full">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-brass-copper/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/5 relative">
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-terracotta to-transparent opacity-30" />
                    <Mandala className="absolute inset-0 text-white/10 animate-spin-slow w-full h-full opacity-50" />
                </div>
                <div className="absolute -inset-4 border border-dashed border-golden-amber/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            </div>
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif text-golden-amber leading-tight">{title}</h3>
            <p className="text-lg text-white/70 font-light leading-relaxed">{text}</p>
        </div>
    </motion.div>
);

const HeritageSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section id="heritage" ref={ref} className="py-32 px-4 bg-charcoal relative overflow-hidden">
            {/* Background Mandala Effect */}
            <motion.div
                style={{ rotate: scrollYProgress * 360, scale, opacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] text-white/5 pointer-events-none z-0"
            >
                <Mandala className="w-full h-full" />
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div className="text-center mb-24 space-y-4">
                    <span className="text-deep-terracotta font-sans tracking-widest uppercase text-sm font-semibold">Our Heritage</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
                        The Story of <span className="text-golden-amber italic">Sanjha Chulha</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-deep-terracotta to-transparent mx-auto mt-6" />
                </motion.div>

                <StoryCard
                    index={0}
                    title="The Communal Hearth"
                    text="In the villages of Punjab, the 'Sanjha Chulha' was more than a cooking place. It was the heart of the community, where stories were shared, bonds were forged, and food was a celebration of togetherness."
                />
                <StoryCard
                    index={1}
                    title="A Legacy of Flavor"
                    text="Passed down through generations, our recipes safeguard the essence of rustic cooking. Slow-cooked over charcoal, infused with hand-ground spices, every dish is a tribute to our ancestors."
                />
                <StoryCard
                    index={2}
                    title="Modern Reverence"
                    text="Today, we bring this timeless tradition to a modern setting. We honor the past while embracing the present, serving authentic flavors with a touch of contemporary elegance."
                />
            </div>
        </section>
    );
};

export default HeritageSection;
