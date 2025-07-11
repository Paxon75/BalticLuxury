
import React from 'react';
import type { Apartment } from './types';
import { BedIcon } from './components/icons/BedIcon';
import { AreaIcon } from './components/icons/AreaIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { ParkingIcon } from './components/icons/ParkingIcon';
import { WaveIcon } from './components/icons/WaveIcon';

const commonIconClass = "w-8 h-8 text-amber-600";

export const APARTMENTS_DATA: Apartment[] = [
  {
    id: 'perla',
    name: 'Apartament Perła',
    subtitle: 'Elegancja z panoramicznym widokiem',
    description: 'Apartament Perła to kwintesencja nadmorskiego luksusu. Zaprojektowany z myślą o najbardziej wymagających gościach, oferuje niezapomniany, panoramiczny widok na Bałtyk z przestronnego tarasu. Idealny na romantyczny pobyt we dwoje lub relaksujące wakacje w małym gronie.',
    images: [
      'https://picsum.photos/seed/perla1/800/600',
      'https://picsum.photos/seed/perla2/800/600',
      'https://picsum.photos/seed/perla3/800/600'
    ],
    features: [
      { icon: <UsersIcon className={commonIconClass} />, label: 'Goście', value: '2-4' },
      { icon: <BedIcon className={commonIconClass} />, label: 'Sypialnie', value: '1' },
      { icon: <AreaIcon className={commonIconClass} />, label: 'Powierzchnia', value: '55 m²' },
      { icon: <WaveIcon className={commonIconClass} />, label: 'Plaża', value: '20m' },
      { icon: <ParkingIcon className={commonIconClass} />, label: 'Parking', value: 'Tak' },
    ]
  },
  {
    id: 'bursztyn',
    name: 'Apartament Bursztyn',
    subtitle: 'Komfort i styl dla całej rodziny',
    description: 'Apartament Bursztyn to przestronne i stylowe wnętrze, stworzone z myślą o rodzinnych wakacjach. Dwie oddzielne sypialnie zapewniają komfort i prywatność, a duży salon z aneksem kuchennym jest idealnym miejscem do wspólnego spędzania czasu. Bliskość plaży i placu zabaw to jego dodatkowe atuty.',
    images: [
      'https://picsum.photos/seed/bursztyn1/800/600',
      'https://picsum.photos/seed/bursztyn2/800/600',
      'https://picsum.photos/seed/bursztyn3/800/600'
    ],
    features: [
      { icon: <UsersIcon className={commonIconClass} />, label: 'Goście', value: '4-6' },
      { icon: <BedIcon className={commonIconClass} />, label: 'Sypialnie', value: '2' },
      { icon: <AreaIcon className={commonIconClass} />, label: 'Powierzchnia', value: '70 m²' },
      { icon: <WaveIcon className={commonIconClass} />, label: 'Plaża', value: '50m' },
      { icon: <ParkingIcon className={commonIconClass} />, label: 'Parking', value: 'Tak' },
    ]
  }
];
