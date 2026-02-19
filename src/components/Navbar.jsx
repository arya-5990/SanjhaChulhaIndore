import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
                isScrolled ? 'bg-night-dhaba/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
            )}
        >
            <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-white tracking-wider">
                    Sanjha <span className="text-deep-terracotta">Chulha</span>
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#menu" className="text-sm font-medium hover:text-golden-amber transition-colors">Menu</a>
                <a href="#heritage" className="text-sm font-medium hover:text-golden-amber transition-colors">Our Story</a>
                <a href="#contact" className="text-sm font-medium hover:text-golden-amber transition-colors">Contact</a>

                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-deep-terracotta hover:bg-burnt-sienna text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-deep-terracotta/50 backdrop-blur-sm border border-white/10"
                >
                    Book Table
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-16 right-4 w-64 bg-night-dhaba border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden"
                >
                    <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg hover:text-deep-terracotta">Menu</a>
                    <a href="#heritage" onClick={() => setIsOpen(false)} className="text-lg hover:text-deep-terracotta">Our Story</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-deep-terracotta">Contact</a>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 w-full bg-deep-terracotta py-3 rounded-xl font-bold"
                    >
                        Book Table
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
