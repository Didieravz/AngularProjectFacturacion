import { Cliente } from './cliente';
import { Company } from './company';
import { Item } from './item';

export class Factura {
  id!: number;
  nombre!: string;
  cliente!: Cliente;
  company!: Company;
  items!: Item[];
  total!: number;
}
