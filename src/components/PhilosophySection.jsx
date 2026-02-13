import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Leaf, Sparkles } from 'lucide-react';

const PhilosophyCard = ({ icon: Icon, title, text, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center space-y-6 hover:bg-white/10 transition-colors group"
    >
        <div className="w-16 h-16 mx-auto bg-deep-terracotta/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} className="text-golden-amber" />
        </div>
        <h3 className="text-2xl font-serif text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed font-light">
            {text}
        </p>
    </motion.div>
);

const PhilosophySection = () => {
    const principles = [
        {
            icon: Flame,
            title: "Authenticity",
            text: "We honor traditional recipes and time-honored cooking techniques, preserving the genuine flavors of each dish."
        },
        {
            icon: Leaf,
            title: "Freshness",
            text: "Only the highest-quality, fresh ingredients are used, ensuring meals that are wholesome, vibrant, and satisfying."
        },
        {
            icon: Sparkles,
            title: "Innovation",
            text: "While rooted in tradition, our chefs explore contemporary techniques, seasonal ingredients, and creative presentations to keep the menu dynamic and exciting."
        }
    ];

    return (
        <section className="py-24 px-4 bg-charcoal relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-deep-terracotta rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-golden-amber rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="text-deep-terracotta font-sans tracking-widest uppercase text-sm font-semibold">Our Values</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Our Culinary <span className="text-golden-amber italic">Philosophy</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg font-light">
                        At Sanjha Chulha Restaurant, food is both an art and a tradition. Our culinary philosophy is guided by three core principles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((item, index) => (
                        <PhilosophyCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
