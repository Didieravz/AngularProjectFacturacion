import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  //Emite el item hacia el padre
  @Output() itemEventEmitter = new EventEmitter();

  counterId: number = 4;

  //inicializo objeto item
  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  //Metdo para enviar nuevo item al padre
  onSubmit() {
    this.itemEventEmitter.emit({ id: this.counterId, ...this.item });
    //se limpia el objeto para que limpie el form
    this.item = {
      product: '',
      price: '',
      quantity: '',
    };
  }
}
