document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            navAbout: 'O Nas', navApartments: 'Apartamenty', navAmenities: 'Atuty', navContact: 'Kontakt',
            videoError: 'Twoja przeglądarka nie obsługuje wideo w tle.',
            heroTitle: 'Odkryj Swój Raj',
            heroSubtitle: 'Luksusowe apartamenty w Międzyzdrojach z widokiem na Bałtyk – bezpośrednio przy plaży.',
            heroCta: 'Zobacz Apartamenty',
            aboutTitle: 'Wyobraź sobie...',
            aboutText: '...poranek, słońce delikatnie muskające Twoją twarz, a w tle kojący szum fal. Otwierasz oczy i pierwsze, co widzisz, to niekończący się błękit Bałtyku. To nie sen, to Twoja nowa rzeczywistość w naszym ekskluzywnym apartamencie w Międzyzdrojach.',
            apartmentsTitle: 'Twój Prywatny Kawałek Nieba',
            apartmentsSubtitle: 'Każdy apartament to esencja luksusu i dobrego smaku, zaprojektowana by zapewnić Ci maksymalny komfort.',
            perlaSubtitle: 'Elegancja z panoramicznym widokiem', perlaTitle: 'Apartament Perła', perlaDesc: 'Apartament Perła to kwintesencja nadmorskiego luksusu. Zaprojektowany z myślą o najbardziej wymagających gościach, oferuje niezapomniany, panoramiczny widok na Bałtyk.',
            bursztynSubtitle: 'Komfort i styl dla całej rodziny', bursztynTitle: 'Apartament Bursztyn', bursztynDesc: 'Przestronne i stylowe wnętrze, stworzone z myślą o rodzinnych wakacjach. Dwie oddzielne sypialnie zapewniają komfort i prywatność, a duży salon jest idealnym miejscem do wspólnego spędzania czasu.',
            featureGuests: 'Goście', featureBedrooms: 'Sypialnie', featureArea: 'Pow.', galleryTitle: 'Galeria Zdjęć',
            amenitiesTitle: 'Luksus w każdym detalu',
            amenitiesSubtitle: 'Zapewniamy wszystko, czego potrzebujesz do idealnego wypoczynku.',
            amenity1Title: 'Bezpieczeństwo i Prywatność', amenity1Desc: 'Nowe, kameralne osiedle zamknięte. Cały teren jest całodobowo strzeżony i monitorowany, co daje Ci pełen spokój ducha.',
            amenity2Title: 'Komfort bez Kompromisów', amenity2Desc: 'Do Twojej dyspozycji jest prywatne, dedykowane miejsce parkingowe. W Międzyzdrojach, zwłaszcza w sezonie, to prawdziwe złoto.',
            amenity3Title: 'Krok od Morza', amenity3Desc: 'Wystarczy kilka kroków, by poczuć pod stopami ciepły piasek i zanurzyć się w orzeźwiających falach morza. Lepszej lokalizacji nie znajdziesz.',
            locationTitle: 'Nasza Lokalizacja', locationDesc: 'Znajdziesz nas w samym sercu nadmorskiego kurortu. Poniższa mapa pomoże Ci bez trudu do nas dotrzeć.',
            contactTitle: 'Skontaktuj się z Nami', contactDesc: 'Masz pytania lub chcesz zarezerwować termin? Czekamy na Twoją wiadomość.',
            contactRole: 'Ekspert Rynku Nieruchomości Premium', contactBtnCall: 'Zadzwoń: +48 123 456 789', contactBtnMail: 'Napisz: kontakt@balticluxury.pl',
            footerRights: '© 2025 BalticLuxury Apartments. Wszelkie prawa zastrzeżone.', footerPrivacy: 'Polityka Prywatności',
            cookieTitle: 'Cenimy Twoją prywatność',
            cookieText: 'Używamy plików cookie, aby personalizować treści, udostępniać funkcje mediów społecznościowych i analizować nasz ruch. Udostępniamy również informacje o Twoim korzystaniu z naszej witryny naszym partnerom.',
            cookieDeny: 'Odrzuć',
            cookieCustomize: 'Dostosuj',
            cookieAccept: 'Akceptuj wszystkie',
            cookieDetailsTitle: 'Dostosuj zgodę',
            cookieNecessaryDesc: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony i nie mogą zostać wyłączone.',
            cookieAnalyticsDesc: 'Te pliki cookie pozwalają nam analizować ruch na stronie i ulepszać jej działanie.',
            cookieMarketingDesc: 'Te pliki cookie pomagają nam dostarczać spersonalizowane reklamy, które mogą Cię zainteresować.',
            cookieSave: 'Zapisz ustawienia',
            privacyTitle: 'Polityka Prywatności',
            privacyIntro: 'Niniejsza polityka prywatności opisuje, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe. Dbamy o Twoją prywatność i dokładamy wszelkich starań, aby Twoje dane były u nas bezpieczne.',
            privacyAdminTitle: 'Administrator Danych',
            privacyAdminText: 'Administratorem Twoich danych osobowych jest BalticLuxury Apartments z siedzibą w Międzyzdrojach. W sprawach związanych z przetwarzaniem danych możesz się z nami skontaktować pod adresem email: kontakt@balticluxury.pl.',
            privacyDataTitle: 'Jakie dane zbieramy?',
            privacyDataText: 'Zbieramy dane, które nam podajesz w sposób dobrowolny podczas kontaktu telefonicznego lub mailowego, takie jak imię i nazwisko, numer telefonu, adres e-mail, w celu obsługi Twojego zapytania i rezerwacji.',
            privacyCookiesTitle: 'Pliki Cookie',
            privacyCookiesText: 'Nasza strona internetowa używa plików cookie, aby zapamiętać Twoją zgodę na ich używanie. Są to małe pliki tekstowe przechowywane na Twoim urządzeniu. Używamy tylko niezbędnych plików cookie do podstawowego funkcjonowania serwisu.',
            privacyRightsTitle: 'Twoje Prawa',
            privacyRightsText: 'Zgodnie z RODO, masz prawo do:',
            privacyRight1: 'Dostępu do swoich danych osobowych.',
            privacyRight2: 'Sprostowania swoich danych.',
            privacyRight3: 'Usunięcia danych („prawo do bycia zapomnianym”).',
            privacyRight4: 'Ograniczenia przetwarzania danych.',
            privacyRight5: 'Wniesienia sprzeciwu wobec przetwarzania.',
            privacyChangesTitle: 'Zmiany w polityce',
            privacyChangesText: 'Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O wszelkich zmianach będziemy informować poprzez publikację nowej wersji polityki na tej stronie.'
        },
        en: {
            navAbout: 'About Us', navApartments: 'Apartments', navAmenities: 'Amenities', navContact: 'Contact',
            videoError: 'Your browser does not support background video.',
            heroTitle: 'Discover Your Paradise',
            heroSubtitle: 'Luxury apartments in Międzyzdroje with a view of the Baltic Sea – right on the beach.',
            heroCta: 'View Apartments',
            aboutTitle: 'Imagine...',
            aboutText: '...a morning with the sun gently touching your face, and the soothing sound of waves in the background. You open your eyes, and the first thing you see is the endless blue of the Baltic Sea. This is not a dream; it\'s your new reality in our exclusive apartment in Międzyzdroje.',
            apartmentsTitle: 'Your Private Piece of Heaven',
            apartmentsSubtitle: 'Each apartment is the essence of luxury and good taste, designed to provide you with maximum comfort.',
            perlaSubtitle: 'Elegance with a panoramic view', perlaTitle: 'Pearl Apartment', perlaDesc: 'The Pearl Apartment is the quintessence of seaside luxury. Designed for the most demanding guests, it offers an unforgettable, panoramic view of the Baltic Sea.',
            bursztynSubtitle: 'Comfort and style for the whole family', bursztynTitle: 'Amber Apartment', bursztynDesc: 'A spacious and stylish interior, created for family holidays. Two separate bedrooms ensure comfort and privacy, and a large living room is the perfect place to spend time together.',
            featureGuests: 'Guests', featureBedrooms: 'Bedrooms', featureArea: 'Area', galleryTitle: 'Photo Gallery',
            amenitiesTitle: 'Luxury in Every Detail',
            amenitiesSubtitle: 'We provide everything you need for a perfect getaway.',
            amenity1Title: 'Security & Privacy', amenity1Desc: 'A new, intimate, gated community. The entire area is guarded and monitored 24/7, giving you complete peace of mind.',
            amenity2Title: 'Comfort without Compromise', amenity2Desc: 'A private, dedicated parking space is at your disposal. In Międzyzdroje, especially in high season, this is as good as gold.',
            amenity3Title: 'A Step from the Sea', amenity3Desc: 'It only takes a few steps to feel the warm sand under your feet and immerse yourself in the refreshing waves. You won\'t find a better location.',
            locationTitle: 'Our Location', locationDesc: 'You will find us in the very heart of the seaside resort. The map below will help you reach us with ease.',
            contactTitle: 'Contact Us', contactDesc: 'Do you have questions or want to book a date? We are waiting for your message.',
            contactRole: 'Premium Real Estate Market Expert', contactBtnCall: 'Call: +48 123 456 789', contactBtnMail: 'Email: contact@balticluxury.pl',
            footerRights: '© 2025 BalticLuxury Apartments. All rights reserved.', footerPrivacy: 'Privacy Policy',
            cookieTitle: 'We value your privacy', cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.', cookieDeny: 'Deny', cookieCustomize: 'Customize', cookieAccept: 'Allow all',
            cookieDetailsTitle: 'Customize consent', cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may be of interest to you.',
            cookieSave: 'Save settings',
            privacyTitle: 'Privacy Policy', privacyIntro: 'This privacy policy describes how we collect, use, and protect your personal data. We care about your privacy and make every effort to ensure your data is secure with us.',
            privacyAdminTitle: 'Data Administrator', privacyAdminText: 'The administrator of your personal data is BalticLuxury Apartments, based in Międzyzdroje. For matters related to data processing, you can contact us at the email address: contact@balticluxury.pl.',
            privacyDataTitle: 'What data do we collect?', privacyDataText: 'We collect data that you voluntarily provide to us during phone or email contact, such as your name, phone number, and email address, to handle your inquiry and reservation.',
            privacyCookiesTitle: 'Cookies', privacyCookiesText: 'Our website uses cookies to remember your consent to their use. These are small text files stored on your device. We only use essential cookies for the basic functionality of the service.',
            privacyRightsTitle: 'Your Rights', privacyRightsText: 'In accordance with GDPR, you have the right to:',
            privacyRight1: 'Access your personal data.', privacyRight2: 'Rectify your data.', privacyRight3: 'Erase your data ("right to be forgotten").', privacyRight4: 'Restrict data processing.', privacyRight5: 'Object to processing.',
            privacyChangesTitle: 'Changes to the policy', privacyChangesText: 'We reserve the right to make changes to the privacy policy. We will inform you of any changes by publishing a new version of the policy on this page.'
        },
        de: {
            navAbout: 'Über uns', navApartments: 'Apartments', navAmenities: 'Vorteile', navContact: 'Kontakt',
            videoError: 'Ihr Browser unterstützt keine Hintergrundvideos.',
            heroTitle: 'Entdecken Sie Ihr Paradies',
            heroSubtitle: 'Luxuriöse Apartments in Misdroy mit Blick auf die Ostsee – direkt am Strand.',
            heroCta: 'Apartments ansehen',
            aboutTitle: 'Stellen Sie sich vor...',
            aboutText: '...einen Morgen, an dem die Sonne sanft Ihr Gesicht berührt und im Hintergrund das beruhigende Rauschen der Wellen zu hören ist. Sie öffnen die Augen und das Erste, was Sie sehen, ist das endlose Blau der Ostsee. Das ist kein Traum, das ist Ihre neue Realität in unserem exklusiven Apartment in Misdroy.',
            apartmentsTitle: 'Ihr privates Stück Himmel',
            apartmentsSubtitle: 'Jedes Apartment ist die Essenz von Luxus und gutem Geschmack, entworfen, um Ihnen maximalen Komfort zu bieten.',
            perlaSubtitle: 'Eleganz mit Panoramablick', perlaTitle: 'Perle Apartment', perlaDesc: 'Das Perle Apartment ist die Quintessenz des Küstenluxus. Es wurde für die anspruchsvollsten Gäste entworfen und bietet einen unvergesslichen Panoramablick auf die Ostsee.',
            bursztynSubtitle: 'Komfort und Stil für die ganze Familie', bursztynTitle: 'Bernstein Apartment', bursztynDesc: 'Ein geräumiges und stilvolles Interieur, geschaffen für einen Familienurlaub. Zwei separate Schlafzimmer sorgen für Komfort und Privatsphäre, und ein großes Wohnzimmer ist der perfekte Ort, um Zeit miteinander zu verbringen.',
            featureGuests: 'Gäste', featureBedrooms: 'Schlafzimmer', featureArea: 'Fläche', galleryTitle: 'Fotogalerie',
            amenitiesTitle: 'Luxus in jedem Detail',
            amenitiesSubtitle: 'Wir bieten alles, was Sie für einen perfekten Urlaub benötigen.',
            amenity1Title: 'Sicherheit & Privatsphäre', amenity1Desc: 'Eine neue, intime, geschlossene Wohnanlage. Das gesamte Gelände wird rund um die Uhr bewacht und überwacht, was Ihnen absolute Sorgenfreiheit gibt.',
            amenity2Title: 'Komfort ohne Kompromisse', amenity2Desc: 'Ein privater, dedizierter Parkplatz steht Ihnen zur Verfügung. In Misdroy, besonders in der Hochsaison, ist das so wertvoll wie Gold.',
            amenity3Title: 'Ein Schritt vom Meer', amenity3Desc: 'Es dauert nur wenige Schritte, um den warmen Sand unter Ihren Füßen zu spüren und in die erfrischenden Wellen einzutauchen. Eine bessere Lage werden Sie nicht finden.',
            locationTitle: 'Unser Standort', locationDesc: 'Sie finden uns im Herzen des Badeortes. Die untenstehende Karte hilft Ihnen, uns mühelos zu erreichen.',
            contactTitle: 'Kontaktieren Sie uns', contactDesc: 'Haben Sie Fragen oder möchten Sie einen Termin buchen? Wir warten auf Ihre Nachricht.',
            contactRole: 'Experte für Premium-Immobilien', contactBtnCall: 'Anrufen: +48 123 456 789', contactBtnMail: 'Schreiben: kontakt@balticluxury.pl',
            footerRights: '© 2025 BalticLuxury Apartments. Alle Rechte vorbehalten.', footerPrivacy: 'Datenschutz-Bestimmungen',
            cookieTitle: 'Wir schätzen Ihre Privatsphäre', cookieText: 'Wir verwenden Cookies, um Inhalte zu personalisieren, Social-Media-Funktionen bereitzustellen und unseren Datenverkehr zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Partnern.', cookieDeny: 'Ablehnen', cookieCustomize: 'Anpassen', cookieAccept: 'Alle erlauben',
            cookieDetailsTitle: 'Zustimmung anpassen', cookieNecessaryDesc: 'Diese Cookies sind für das reibungslose Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
            cookieAnalyticsDesc: 'Diese Cookies ermöglichen es uns, den Website-Verkehr zu analysieren und ihre Leistung zu verbessern.',
            cookieMarketingDesc: 'Diese Cookies helfen uns, personalisierte Anzeigen zu liefern, die für Sie von Interesse sein könnten.',
            cookieSave: 'Einstellungen speichern',
            privacyTitle: 'Datenschutz-Bestimmungen', privacyIntro: 'Diese Datenschutzrichtlinie beschreibt, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen. Ihre Privatsphäre ist uns wichtig und wir bemühen uns, die Sicherheit Ihrer Daten zu gewährleisten.',
            privacyAdminTitle: 'Datenverwalter', privacyAdminText: 'Der Verwalter Ihrer personenbezogenen Daten ist BalticLuxury Apartments mit Sitz in Misdroy. In Angelegenheiten bezüglich der Datenverarbeitung können Sie uns unter der E-Mail-Adresse kontaktieren: kontakt@balticluxury.pl.',
            privacyDataTitle: 'Welche Daten erheben wir?', privacyDataText: 'Wir erheben Daten, die Sie uns freiwillig bei telefonischem oder E-Mail-Kontakt zur Verfügung stellen, wie z.B. Name, Telefonnummer, E-Mail-Adresse, um Ihre Anfrage und Reservierung zu bearbeiten.',
            privacyCookiesTitle: 'Cookies', privacyCookiesText: 'Unsere Website verwendet Cookies, um Ihre Zustimmung zu deren Verwendung zu speichern. Dies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Wir verwenden nur notwendige Cookies für die grundlegende Funktionalität des Dienstes.',
            privacyRightsTitle: 'Ihre Rechte', privacyRightsText: 'Gemäß der DSGVO haben Sie das Recht auf:',
            privacyRight1: 'Zugang zu Ihren personenbezogenen Daten.', privacyRight2: 'Berichtigung Ihrer Daten.', privacyRight3: 'Löschung Ihrer Daten („Recht auf Vergessenwerden“).', privacyRight4: 'Einschränkung der Verarbeitung.', privacyRight5: 'Widerspruch gegen die Verarbeitung.',
            privacyChangesTitle: 'Änderungen der Richtlinie', privacyChangesText: 'Wir behalten uns das Recht vor, Änderungen an der Datenschutzrichtlinie vorzunehmen. Über alle Änderungen werden wir Sie durch die Veröffentlichung einer neuen Version der Richtlinie auf dieser Seite informieren.'
        }
    };
    
    // === Logika Menu Hamburger ===
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-links');
    const navMenuLinks = navMenu.querySelectorAll('a');
    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('is-active');
        navMenu.classList.toggle('is-open');
    };
    hamburgerBtn.addEventListener('click', toggleMenu);
    navMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });

    // === Logika Przełączania Języków ===
    const languageSwitcher = document.querySelector('.language-switcher');
    const flags = languageSwitcher.querySelectorAll('img');
    const translatableElements = document.querySelectorAll('[data-key]');
    const setLanguage = (lang) => {
        const langTranslations = translations[lang];
        if (!langTranslations) return;
        translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (langTranslations[key]) {
                element.textContent = langTranslations[key];
            }
        });
        flags.forEach(flag => {
            flag.classList.remove('lang-active');
            if (flag.dataset.lang === lang) {
                flag.classList.add('lang-active');
            }
        });
        document.documentElement.lang = lang;
    };
    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.dataset.lang) {
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        }
    });

    // === Logika Monitu Cookie ===
    const cookiePopup = document.getElementById('cookie-consent-popup');
    const cookieOverlay = document.getElementById('cookie-overlay');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    const customizeBtn = document.getElementById('cookie-customize');
    const saveBtn = document.getElementById('cookie-save');
    const mainCookieContent = document.getElementById('cookie-main');
    const detailsCookieContent = document.getElementById('cookie-details');

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const hidePopup = () => {
        cookiePopup.classList.remove('active');
        cookieOverlay.classList.remove('active');
    };

    acceptBtn.addEventListener('click', () => {
        setCookie('cookie_consent_given', 'true', 365);
        setCookie('cookie_analytics', 'true', 365);
        setCookie('cookie_marketing', 'true', 365);
        hidePopup();
    });

    rejectBtn.addEventListener('click', () => {
        setCookie('cookie_consent_given', 'true', 365);
        setCookie('cookie_analytics', 'false', 365);
        setCookie('cookie_marketing', 'false', 365);
        hidePopup();
    });

    customizeBtn.addEventListener('click', () => {
        mainCookieContent.style.display = 'none';
        detailsCookieContent.style.display = 'block';
    });
    
    saveBtn.addEventListener('click', () => {
        const analyticsConsent = document.getElementById('cookie-analytics').checked;
        const marketingConsent = document.getElementById('cookie-marketing').checked;
        setCookie('cookie_consent_given', 'true', 365);
        setCookie('cookie_analytics', analyticsConsent, 365);
        setCookie('cookie_marketing', marketingConsent, 365);
        hidePopup();
    });

    // Pokaż popup, jeśli zgoda nie została jeszcze udzielona
    if (!getCookie('cookie_consent_given')) {
        setTimeout(() => {
            cookiePopup.classList.add('active');
            cookieOverlay.classList.add('active');
        }, 1500);
    }

    // Ustawienie języka na starcie
    setLanguage('pl');
});