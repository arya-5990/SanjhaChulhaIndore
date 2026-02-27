import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video 1.mp4';
import video2 from '../assets/video 2.mp4';
import video3 from '../assets/Video 3.mp4';

const CateringLanding = () => {
    return (
        <div className="relative h-screen w-full bg-night-dhaba overflow-hidden flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="relative flex-1 h-full border-r border-white/5 group overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />

                {/* Replace src with actual video URL later */}
                <video className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 opacity-60" autoPlay loop muted playsInline>
                    <source src={video1} type="video/mp4" />
                </video>
            </div>

            {/* Center Column - Text Content */}
            <div className="relative flex-1 h-full border-r border-white/5 group overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500 z-10" />

                {/* Replace src with actual video URL later */}
                <video className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 opacity-60" autoPlay loop muted playsInline>
                    <source src={video2} type="video/mp4" />
                </video>

                <div className="relative z-20 text-center px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-6"
                    >
                        <h2 className="text-sm md:text-base font-sans tracking-[0.3em] text-golden-amber uppercase mb-2">Since 1990</h2>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                            AFB <br /><span className="italic text-deep-terracotta">Caterings</span>
                        </h1>
                        <div className="h-1 w-24 bg-golden-amber mx-auto rounded-full mb-6" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed drop-shadow-lg"
                    >
                        Turning your special moments into<br />unforgettable culinary experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-4 items-center"
                    >
                        <button className="bg-deep-terracotta hover:bg-burnt-sienna text-white px-10 py-4 rounded-full font-medium text-lg transition-all shadow-xl hover:shadow-deep-terracotta/40 border border-white/10 hover:-translate-y-1">
                            Request a Quote
                        </button>
                        <span className="text-white/60 text-sm tracking-wider">Weddings • Corporates • Private Parties</span>
                    </motion.div>
                </div>
            </div>

            {/* Right Column */}
            <div className="relative flex-1 h-full group overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />

                {/* Replace src with actual video URL later */}
                <video className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 opacity-60" autoPlay loop muted playsInline>
                    <source src={video3} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default CateringLanding;
