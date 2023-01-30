
import { Category } from './category';
import { Image } from './image';

export enum CharacteristicName {
  Cocina = 'Cocina',
  Wifi = 'Wifi',
  Piscina = 'Piscina',
  Televisor = 'Televisor',
  'Estacionamiento gratuito' = 'Estacionamiento gratuito',
  'Aire acondicionado' = 'Aire acondicionado',
  'Apto mascotas' = 'Apto mascotas'
}

export interface Characteristic {
  id: number;
  title: keyof typeof CharacteristicName;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  distance: number;
  image_list?: Image[];
  characteristics?: Characteristic[];
  booking_set?: any;
}
