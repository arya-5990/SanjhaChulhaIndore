import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-golden-amber to-transparent opacity-30" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Brand */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif font-bold tracking-wider">
                        Sanjha <span className="text-deep-terracotta">Chulha</span>
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Where tradition meets taste. A culinary journey through the heart of Punjab, redefined for the modern palate.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-golden-amber transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-golden-amber transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-golden-amber transition-colors"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Links */}
                <div className="space-y-6">
                    <h3 className="text-golden-amber font-serif font-semibold tracking-widest text-sm uppercase">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li><a href="#" className="hover:text-deep-terracotta transition-colors">Home</a></li>
                        <li><a href="#menu" className="hover:text-deep-terracotta transition-colors">Our Menu</a></li>
                        <li><a href="#heritage" className="hover:text-deep-terracotta transition-colors">Our Story</a></li>
                        <li><a href="#contact" className="hover:text-deep-terracotta transition-colors">Reservations</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-6">
                    <h3 className="text-golden-amber font-serif font-semibold tracking-widest text-sm uppercase">Contact Us</h3>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="flex items-center justify-center md:justify-start gap-3">
                            <MapPin size={16} className="text-deep-terracotta" />
                            <span>123 Culinary Road, Food District</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-3">
                            <Phone size={16} className="text-deep-terracotta" />
                            <span>+91 987 654 3210</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-3">
                            <Mail size={16} className="text-deep-terracotta" />
                            <span>reservations@sanjhachulha.com</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div className="space-y-6">
                    <h3 className="text-golden-amber font-serif font-semibold tracking-widest text-sm uppercase">Opening Hours</h3>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li className="flex justify-between md:justify-start gap-8">
                            <span>Mon - Fri</span>
                            <span>11:00 AM - 11:00 PM</span>
                        </li>
                        <li className="flex justify-between md:justify-start gap-8">
                            <span>Sat - Sun</span>
                            <span>10:00 AM - 12:00 AM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-white/30 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Sanjha Chulha. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
