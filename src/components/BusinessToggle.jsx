import React from 'react';
import { motion } from 'framer-motion';

const BusinessToggle = ({ activeBusiness, onToggle }) => {
    return (
        <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-inner w-fit mx-auto md:mx-0">
            <button
                onClick={() => onToggle('restaurant')}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${activeBusiness === 'restaurant' ? 'text-night-dhaba' : 'text-white/70 hover:text-white'
                    }`}
            >
                {activeBusiness === 'restaurant' && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-md"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                )}
                <span className="relative z-10">Sanjha Chulha</span>
            </button>
            <button
                onClick={() => onToggle('catering')}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${activeBusiness === 'catering' ? 'text-night-dhaba' : 'text-white/70 hover:text-white'
                    }`}
            >
                {activeBusiness === 'catering' && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-md"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                )}
                <span className="relative z-10">AFB Caterings</span>
            </button>
        </div>
    );
};

export default BusinessToggle;
