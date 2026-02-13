import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Users, Heart, Briefcase } from 'lucide-react';

const EventCard = ({ title, description, icon: Icon, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-deep-terracotta/90 backdrop-blur-sm rounded-lg text-white">
                            <Icon size={20} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white tracking-wide">{title}</h3>
                    </div>

                    <p className="text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {description}
                    </p>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <button className="text-sm uppercase tracking-widest font-bold text-golden-amber hover:text-white transition-colors flex items-center gap-2">
                            Plan Your Event <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-4 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />
        </motion.div>
    );
};

const EventsSection = () => {
    const events = [
        {
            title: "Family Gatherings",
            description: "With spacious seating, comforting meals, and attentive service, we are perfect for birthdays, reunions, and family celebrations.",
            icon: Users,
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Romantic Evenings",
            description: "Soft lighting, intimate seating, and beautifully presented dishes create the ideal setting for couples to enjoy memorable moments.",
            icon: Heart,
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Corporate Events",
            description: "Professionals seeking a welcoming yet sophisticated environment for business meetings, lunches, or team dinners.",
            icon: Briefcase,
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Festivals & Occasions",
            description: "Curated menus, festive décor, and personalized service enhance the joy of holidays, cultural celebrations, and personal milestones.",
            icon: Sparkles,
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    return (
        <section className="py-24 px-4 bg-night-dhaba relative z-10 w-full">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-golden-amber font-sans tracking-widest uppercase text-sm font-semibold">Celebrations</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Celebrating Life’s <span className="text-deep-terracotta italic">Special Moments</span>
                    </h2>
                    <p className="mt-4 text-white/60 max-w-2xl mx-auto font-light">
                        Sanjha Chulha is more than a place to eat—it is a destination to celebrate life’s milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
