import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Leaf, Users, Smile, Globe, CloudSun } from 'lucide-react';

const PromiseItem = ({ icon: Icon, title, text, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
    >
        <div className="p-3 bg-golden-amber/10 rounded-lg text-golden-amber shrink-0">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-xl font-serif text-white mb-2">{title}</h4>
            <p className="text-white/60 text-sm leading-relaxed font-light">{text}</p>
        </div>
    </motion.div>
);

const CommitmentCard = ({ title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-charcoal/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center gap-4 hover:border-deep-terracotta/50 transition-colors group"
    >
        <div className="p-4 bg-deep-terracotta/10 rounded-full text-deep-terracotta group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
);

const CommitmentSection = () => {
    const commitments = [
        {
            title: "High Standards",
            description: "Every dish is prepared with precision, care, and strict hygiene standards to ensure excellence and consistency.",
            icon: ShieldCheck
        },
        {
            title: "Sustainability",
            description: "We embrace eco-friendly practices, source local ingredients whenever possible, and minimize waste to reduce our footprint.",
            icon: Leaf
        },
        {
            title: "Community Engagement",
            description: "Actively participating in local initiatives, charitable programs, and community-driven projects reflecting social responsibility.",
            icon: Users
        }
    ];

    const promises = [
        {
            title: "Joy in Flavors",
            text: "Authentic, fresh, and memorable tastes that bring comfort and satisfaction.",
            icon: CloudSun
        },
        {
            title: "Joy in Ambiance",
            text: "A warm, elegant, and inviting atmosphere designed for relaxation and connection.",
            icon: Globe
        },
        {
            title: "Joy in Service",
            text: "Attentive, personalized, and thoughtful hospitality that makes you feel valued.",
            icon: Smile
        },
        {
            title: "Joy in Moments",
            text: "Every visit is an opportunity to celebrate life with family, friends, and loved ones.",
            icon: Users
        }
    ];

    return (
        <section className="py-24 px-4 bg-night-dhaba relative z-10 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -right-[20%] w-[80vw] h-[80vw] border border-white/5 rounded-full pointer-events-none opacity-20"
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 max-w-3xl mx-auto space-y-6"
                >
                    <span className="text-deep-terracotta font-sans tracking-widest uppercase text-sm font-semibold">Our Vow</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        A Commitment to <span className="text-golden-amber italic">Quality & Community</span>
                    </h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                        We believe responsible dining involves not only serving outstanding meals but also contributing positively to society and the environment.
                    </p>
                </motion.div>

                {/* Commitments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {commitments.map((item, index) => (
                        <CommitmentCard key={index} {...item} index={index} />
                    ))}
                </div>

                {/* The Promise Section */}
                <div className="bg-charcoal rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-golden-amber blur-[150px] opacity-10 pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                                Our Promise: <br /> More Than Just <span className="text-deep-terracotta italic">Food</span>
                            </h3>
                            <p className="text-white/60 text-lg font-light">
                                At Sanjha Chulha, we promise an experience crafted to bring joy, comfort, and satisfaction. Every element is designed with you in mind.
                            </p>
                            <div className="w-20 h-1 bg-gradient-to-r from-deep-terracotta to-transparent" />
                        </motion.div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {promises.map((item, index) => (
                                <PromiseItem key={index} {...item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CommitmentSection;
