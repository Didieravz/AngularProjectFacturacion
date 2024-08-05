import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
  @Input() cliente: Cliente = new Cliente();
}
