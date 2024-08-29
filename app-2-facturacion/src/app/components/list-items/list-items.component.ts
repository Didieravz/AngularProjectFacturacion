import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {
  //creo la lista que contendra los items
  @Input() items: Item[] = [];

  //Contiene el id a eliminar
  @Output() idEventEmitter: EventEmitter<number> = new EventEmitter();

  //Metodo que emite el id a eliminar
  onRemoveItem(id: number) {
    this.idEventEmitter.emit(id);
  }
}
