import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { facturaData } from '../data/factura.data';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  //recupero el json con la data
  private factura: Factura = facturaData;

  constructor() {}

  //Metodo para recuperar la data quemda de la factura
  getFacturaData(): Factura {
    return this.factura;
  }
}
