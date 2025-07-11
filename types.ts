
import { ReactNode } from 'react';

export interface ApartmentFeature {
  icon: ReactNode;
  label: string;
  value: string;
}

export interface Apartment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  features: ApartmentFeature[];
}
