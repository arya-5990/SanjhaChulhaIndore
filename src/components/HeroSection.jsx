import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ChefHat, Sparkles } from 'lucide-react';
import heroVideo from '../assets/chulhaHero.mp4';

const SpiceParticle = ({ delay, x, y, size }) => (
    <motion.div
        style={{ x, y }}
        className="absolute rounded-full bg-gradient-to-br from-golden-amber to-deep-terracotta opacity-60 blur-sm mix-blend-screen pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360]
        }}
        transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: delay
        }}
        width={size}
        height={size}
    >
        <div style={{ width: size, height: size }} />
    </motion.div>
);

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    const xSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const ySpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const spiceX = useTransform(xSpring, [-0.5, 0.5], [-50, 50]);
    const spiceY = useTransform(ySpring, [-0.5, 0.5], [-50, 50]);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full overflow-hidden bg-night-dhaba flex items-center justify-center isolate"
        >
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                >
                    {/* Replace with actual video URL */}
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-night-dhaba via-transparent to-night-dhaba opacity-90" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Parallax Spice Cloud */}
            <motion.div style={{ x: spiceX, y: spiceY }} className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <SpiceParticle
                        key={i}
                        delay={i * 0.2}
                        x={`${Math.random() * 100}%`}
                        y={`${Math.random() * 100}%`}
                        size={Math.random() * 20 + 8}
                    />
                ))}
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-20 max-w-4xl px-4 text-center space-y-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass p-12 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-golden-amber to-transparent opacity-50" />

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block mb-4 text-golden-amber text-sm font-sans tracking-[0.2em] uppercase font-semibold"
                    >
                        Est. 1984
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Taste <span className="text-deep-terracotta italic">Redefined</span>
                        <br />
                        <span className="text-3xl md:text-5xl font-light text-white/90 mt-2 block">Tradition Served with Love</span>
                    </h1>

                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed">
                        Experience the warmth of a traditional Punjabi hearth meets ultra-premium fine dining.
                        A culinary journey where spices tell a story.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-deep-terracotta text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-deep-terracotta/30"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                Book A Table <ChefHat size={18} />
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(181, 166, 66, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border border-golden-amber/50 text-golden-amber hover:bg-golden-amber/10 font-semibold rounded-full transition-all flex items-center gap-2"
                        >
                            Explore Menu <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Sticky Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Discover</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </div>
    );
};

export default HeroSection;
