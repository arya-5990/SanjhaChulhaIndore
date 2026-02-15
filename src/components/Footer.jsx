import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

const Footer = () => {
    const [contactInfo, setContactInfo] = useState({
        address: 'Loading...',
        phone: 'Loading...',
        email: 'Loading...',
        workingHours: 'Loading...',
        facebook: '',
        instagram: ''
    });

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "basic_details"));
                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data();

                    // Format phones
                    let phoneStr = 'Phone not available';
                    if (data.phones && Array.isArray(data.phones) && data.phones.length > 0) {
                        phoneStr = data.phones.join(', ');
                    } else if (data.phone) {
                        phoneStr = data.phone;
                    }

                    // Format emails
                    let emailStr = 'Email not available';
                    if (data.emails) {
                        if (Array.isArray(data.emails) && data.emails.length > 0) {
                            emailStr = data.emails.join(', ');
                        } else if (typeof data.emails === 'string') {
                            emailStr = data.emails;
                        }
                    } else if (data.email) {
                        emailStr = data.email;
                    }

                    // Format Working Hours
                    let hoursData = [];
                    if (data.monFriOpen && data.monFriClose) {
                        hoursData.push({ label: 'Mon - Fri', time: `${data.monFriOpen} - ${data.monFriClose}` });
                    }
                    if (data.satSunOpen && data.satSunClose) {
                        hoursData.push({ label: 'Sat - Sun', time: `${data.satSunOpen} - ${data.satSunClose}` });
                    } else if (data.satSunOpen) {
                        hoursData.push({ label: 'Sat - Sun', time: data.satSunOpen });
                    }

                    if (hoursData.length === 0) {
                        if (data.workingHours) {
                            // If it's a string with newlines, try to parse or just use as is
                            hoursData = [{ label: '', time: data.workingHours }];
                        } else {
                            hoursData = [{ label: '', time: 'Hours not available' }];
                        }
                    }

                    setContactInfo({
                        address: data.address || 'Address not available',
                        phone: phoneStr,
                        email: emailStr,
                        workingHours: hoursData,
                        facebook: data.facebookUrl || data.facebook || '',
                        instagram: data.instagramUrl || data.instagram || ''
                    });
                }
            } catch (error) {
                console.error("Error fetching contact info: ", error);
            }
        };

        fetchContactInfo();
    }, []);

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
                        {contactInfo.facebook && (
                            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-golden-amber transition-colors">
                                <Facebook size={18} />
                            </a>
                        )}
                        {contactInfo.instagram && (
                            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-golden-amber transition-colors">
                                <Instagram size={18} />
                            </a>
                        )}
                        {/* Twitter removed as not mentioned in requirements, kept structure just in case */}
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
                        <li className="flex items-start justify-center md:justify-start gap-3">
                            <MapPin size={20} className="text-deep-terracotta shrink-0 mt-0.5" />
                            <span className="text-left leading-tight">{contactInfo.address}</span>
                        </li>
                        <li className="flex items-start justify-center md:justify-start gap-3">
                            <Phone size={20} className="text-deep-terracotta shrink-0 mt-0.5" />
                            <span className="text-left leading-tight">{contactInfo.phone}</span>
                        </li>
                        <li className="flex items-start justify-center md:justify-start gap-3">
                            <Mail size={20} className="text-deep-terracotta shrink-0 mt-0.5" />
                            <span className="text-left leading-tight">{contactInfo.email}</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div className="space-y-6">
                    <h3 className="text-golden-amber font-serif font-semibold tracking-widest text-sm uppercase">Opening Hours</h3>
                    <ul className="space-y-3 text-sm text-white/70">
                        {Array.isArray(contactInfo.workingHours) ? (
                            contactInfo.workingHours.map((item, index) => (
                                <li key={index} className="flex justify-between md:justify-start gap-8">
                                    <span className="w-20 font-medium text-white/90">{item.label}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))
                        ) : (
                            <li className="flex justify-between md:justify-start gap-8">
                                <span>{contactInfo.workingHours}</span>
                            </li>
                        )}
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
