import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { facturaData } from '../data/factura.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  //recupero el json con la data
  private factura: Factura = facturaData;

  constructor() {}

  //Metodo para recuperar la data quemda de la factura
  getFacturaData(): Factura {
    //obtiene el total de la factura
    const total = this.calculateTotal();
    return { ...this.factura, total };
  }

  //metodo para remover un item y para recalcular el total
  remove(id: number): Factura {
    this.factura.items = this.factura.items.filter((item) => item.id != id);
    //despues de eliminar calcula el total de la factura
    const total = this.calculateTotal();
    return { ...this.factura, total };
  }

  //Agrega un nuevo item
  agregarItem(item: Item): Factura {
    //esparce los mismos elementos y le agrega uno mas
    this.factura.items = [...this.factura.items, item];
    //despues de agregar calcula el total de la factura
    const total = this.calculateTotal();
    return { ...this.factura, total };
  }

  //Metodo para calcular el total de la factura
  calculateTotal() {
    return this.factura.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
