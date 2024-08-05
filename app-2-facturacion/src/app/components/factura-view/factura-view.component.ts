import { Component, Input } from '@angular/core';

@Component({
  selector: 'factura-view',
  standalone: true,
  imports: [],
  templateUrl: './factura-view.component.html',
})
export class FacturaViewComponent {
  //variables para el componente
  @Input() nombre!: string;
  @Input() id!: number;
}
