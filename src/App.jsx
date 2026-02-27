import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import HeritageSection from './components/HeritageSection';
import PhilosophySection from './components/PhilosophySection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import CommitmentSection from './components/CommitmentSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import CateringLanding from './components/CateringLanding';

function App() {
    const [activeBusiness, setActiveBusiness] = useState('restaurant'); // 'restaurant' | 'catering'

    return (
        <div className="bg-night-dhaba min-h-screen text-off-white font-sans selection:bg-golden-amber selection:text-night-dhaba overflow-x-hidden">
            <Navbar
                activeBusiness={activeBusiness}
                onToggle={setActiveBusiness}
            />
            <main>
                {activeBusiness === 'restaurant' ? (
                    <>
                        <HeroSection />
                        <HeritageSection />
                        <MenuSection />
                        <PhilosophySection />
                        <EventsSection />
                        <TeamSection />
                        <CommitmentSection />
                        <BookingSection />
                    </>
                ) : (
                    <CateringLanding />
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
