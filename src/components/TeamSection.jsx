import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

const TeamMember = ({ name, role, image, bio, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
    >
        <div className="aspect-[3/4] overflow-hidden relative">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-golden-amber text-xs font-bold uppercase tracking-widest mb-1 block">{role}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{name}</h3>
                <p className="text-white/60 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {bio}
                </p>
            </div>
        </div>
    </motion.div>
);

const TeamSection = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Staff"));
                const teamData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.staffName,
                        role: data.staffDesignation,
                        image: data.staffImage,
                        bio: data.staffDescription
                    };
                });
                setTeam(teamData);
            } catch (error) {
                console.error("Error fetching team data: ", error);
            }
        };

        fetchTeam();
    }, []);

    return (
        <section className="py-24 px-4 bg-charcoal relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-deep-terracotta/10 rounded-full blur-[80px]" />
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-golden-amber/10 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-deep-terracotta font-sans tracking-widest uppercase text-sm font-semibold">Our People</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                            The Heart of <br /><span className="text-golden-amber italic">Sanjha Chulha</span>
                        </h2>
                        <p className="text-white/60 text-lg font-light">
                            From skilled chefs to attentive service staff, every member of our team shares a passion for hospitality, culinary excellence, and guest satisfaction.
                        </p>
                    </motion.div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <TeamMember key={member.id || index} {...member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
