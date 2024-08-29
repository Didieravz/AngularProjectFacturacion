import { Factura } from '../models/factura';

export const facturaData: any = {
  id: 1,
  nombre: 'Componentes Tecnologicos',
  cliente: {
    name: 'Diego',
    lastName: 'Perez',
    adress: {
      country: 'Canada',
      city: 'Toronto',
      street: 'new york',
      number: 12345,
    },
  },
  company: {
    name: 'New Age',
    fiscalNumber: 123,
  },
  items: [
    {
      id: 1,
      product: 'pc 12',
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      product: 'ram 3',
      price: 300,
      quantity: 3,
    },
    {
      id: 3,
      product: 'monitor',
      price: 700,
      quantity: 2,
    },
  ],
};
