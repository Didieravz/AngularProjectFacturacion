import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  //variable que contiene el item de la factura
  @Input() item!: Item;

  //emite el id a eliminar hacia el padre
  @Output() idEventEmitter: EventEmitter<number> = new EventEmitter();

  //Metodo encargado de eliminar un item de la tabla
  onRemoveItem(id: number) {
    this.idEventEmitter.emit(id);
  }
}
