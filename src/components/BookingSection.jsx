import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Flame } from 'lucide-react';
import clsx from 'clsx';

const BookingSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        occasion: 'none',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Data:', formData);
        // Add logic to submit data
        alert("Reservation Request Sent!");
    };

    return (
        <section id="contact" className="relative py-24 bg-night-dhaba overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-deep-terracotta blur-[120px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden-amber blur-[120px] opacity-20" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                        Reserve Your <br /> <span className="text-golden-amber italic">Table</span>
                    </h2>
                    <p className="text-white/60 text-lg font-light max-w-md leading-relaxed">
                        Experience the warmth of our hospitality. Whether it's a romantic dinner or a family gathering, let us serve you an unforgettable meal.
                    </p>

                    <div className="flex gap-4 items-center text-deep-terracotta">
                        <div className="p-3 bg-white/5 rounded-full backdrop-blur-md">
                            <Flame size={24} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-white/80">Authentic Ambiance Guaranteed</span>
                    </div>
                </motion.div>

                {/* Booking Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full max-w-lg bg-charcoal/80 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brass-copper to-transparent opacity-50" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date Picker Custom Style */}
                            <div className="relative group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Date</label>
                                <div className="relative flex items-center">
                                    <Calendar className="absolute left-3 text-brass-copper" size={18} />
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brass-copper transition-colors appearance-none"
                                    />
                                </div>
                            </div>
                            {/* Time Picker Custom Style */}
                            <div className="relative group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Time</label>
                                <div className="relative flex items-center">
                                    <Clock className="absolute left-3 text-brass-copper" size={18} />
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brass-copper transition-colors appearance-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Number of Guests</label>
                            <div className="relative flex items-center">
                                <Users className="absolute left-3 text-brass-copper" size={18} />
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brass-copper transition-colors appearance-none"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(num => (
                                        <option key={num} value={num} className="bg-charcoal text-white">{num} Guests</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brass-copper transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brass-copper transition-colors"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-deep-terracotta to-burnt-sienna text-white font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-deep-terracotta/40 hover:shadow-deep-terracotta/60 transition-all mt-4"
                        >
                            Confirm Reservation
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
