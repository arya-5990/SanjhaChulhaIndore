import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../services/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Leaf, Drumstick, ArrowLeftRight } from 'lucide-react';

const menuItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 20px 40px -10px rgba(181, 166, 66, 0.3)" }
};

const MenuSection = () => {
    const [filter, setFilter] = useState('all');
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'menu'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMenuItems(items);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching menu:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const filteredMenu = filter === 'all'
        ? menuItems
        : menuItems.filter(item => item.type && item.type.toLowerCase() === filter);


    return (
        <section id="menu" className="py-24 px-4 bg-night-dhaba relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-golden-amber font-sans tracking-widest uppercase text-sm font-semibold">Our Culniary Art</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                        Explore the <span className="text-deep-terracotta italic">Flavors</span>
                    </h2>

                    <div className="flex justify-center gap-4 mt-8">
                        {['all', 'veg', 'non-veg'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-full border border-white/10 transition-all font-medium capitalize
                  ${filter === f ? 'bg-deep-terracotta text-white shadow-lg shadow-deep-terracotta/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredMenu.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                variants={menuItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                className="group relative bg-charcoal rounded-2xl overflow-hidden border border-white/5 shadow-xl glass-dark"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <motion.img
                                        src={item.image || item.imageUrl || item.url}
                                        alt={item.name || item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                                    {/* Dietary Tag */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-md border border-white/20
                    ${item.type && item.type.toLowerCase() === 'veg' ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
                                        {item.type && item.type.toLowerCase() === 'veg' ? <Leaf size={12} /> : <Drumstick size={12} />}
                                        {item.type}
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-serif text-white group-hover:text-golden-amber transition-colors">{item.name || item.title}</h3>
                                        <span className="text-xl font-bold text-deep-terracotta">₹{item.price}</span>
                                    </div>
                                    <p className="text-white/60 text-sm font-light mb-6 line-clamp-2">{item.desc || item.description || item.shortDescription}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuSection;
