import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { APARTMENTS_DATA } from './constants';
import { ApartmentCard } from './components/ApartmentCard';
import { BedIcon } from './components/icons/BedIcon';
import { ParkingIcon } from './components/icons/ParkingIcon';
import { WaveIcon } from './components/icons/WaveIcon';
import { handleSmoothScroll } from './utils/smoothScroll';

const HeroSection = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center text-white">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/beach/1920/1080')" }}></div>
    <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
        Odkryj Swój Raj
      </h1>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light text-slate-200">
        Luksusowe apartamenty w Międzyzdrojach z widokiem na Bałtyk – bezpośrednio przy plaży.
      </p>
      <a href="#apartamenty" onClick={handleSmoothScroll} className="mt-8 inline-block bg-amber-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl">
        Zobacz Apartamenty
      </a>
    </div>
  </section>
);

const AboutSection = () => (
    <section id="o-nas" className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Wyobraź sobie...</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    ...poranek, słońce delikatnie muskające Twoją twarz, a w tle kojący szum fal. Otwierasz oczy i pierwsze, co widzisz, to niekończący się błękit Bałtyku. To nie sen, to Twoja nowa rzeczywistość w naszym ekskluzywnym apartamencie w Międzyzdrojach. Prawdziwa oaza spokoju, położona w sercu kurortu, a jednocześnie tuż przy plaży.
                </p>
            </div>
        </div>
    </section>
);

const ApartmentsSection = () => (
  <section id="apartamenty" className="py-20 lg:py-32 bg-slate-100">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Twój Prywatny Kawałek Nieba</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Każdy apartament to esencja luksusu i dobrego smaku, zaprojektowana by zapewnić Ci maksymalny komfort.</p>
      </div>
      {APARTMENTS_DATA.map(apartment => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  </section>
);

const AmenitiesSection = () => {
    const amenities = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
            title: 'Bezpieczeństwo i Prywatność',
            description: 'Nowe, kameralne osiedle zamknięte. Cały teren jest całodobowo strzeżony i monitorowany, co daje Ci pełen spokój ducha.'
        },
        {
            icon: <ParkingIcon className="h-12 w-12 text-amber-500" />,
            title: 'Komfort bez Kompromisów',
            description: 'Do Twojej dyspozycji jest prywatne, dedykowane miejsce parkingowe. W Międzyzdrojach, zwłaszcza w sezonie, to prawdziwe złoto.'
        },
        {
            icon: <WaveIcon className="h-12 w-12 text-amber-500" />,
            title: 'Krok od Morza',
            description: 'Wystarczy kilka kroków, by poczuć pod stopami ciepły piasek i zanurzyć się w orzeźwiających falach morza. Lepszej lokalizacji nie znajdziesz.'
        },
    ];

    return (
        <section id="atuty" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Luksus w każdym detalu</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Zapewniamy wszystko, czego potrzebujesz do idealnego wypoczynku.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {amenities.map(item => (
                        <div key={item.title} className="text-center">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => (
  <section id="kontakt" className="py-20 lg:py-32 bg-slate-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">Zarezerwuj Swój Pobyt</h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
        Nie czekaj! Takie perełki rzadko trafiają na rynek. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej. Liczba dostępnych terminów jest ograniczona!
      </p>
      <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-2">BalticLuxury Apartments</h3>
        <p className="text-slate-300 mb-6">Ekspert Rynku Nieruchomości Premium</p>
        <div className="space-y-4">
            <a href="tel:+48123456789" className="block w-full text-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300">
                Zadzwoń: +48 123 456 789
            </a>
            <a href="mailto:kontakt@balticluxury.pl" className="block w-full text-center bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-all duration-300">
                Napisz: kontakt@balticluxury.pl
            </a>
        </div>
      </div>
    </div>
  </section>
);


function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ApartmentsSection />
        <AmenitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;