import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { FacturaViewComponent } from '../factura-view/factura-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [
    ClientViewComponent,
    CompanyViewComponent,
    FacturaViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent,
  ],
  templateUrl: './factura.component.html',
})
export class FacturaComponent implements OnInit {
  //variable para contener los datos de la factura
  factura!: Factura;

  //Inyeccion dependencia por medio del constructor
  constructor(private service: FacturaService) {}

  //metodo para precargar la informacion
  ngOnInit(): void {
    this.factura = this.service.getFacturaData();
  }

  //Metodo que elimina un item de la tabla
  onRemoveItem(id: number) {
    this.factura = this.service.remove(id);
  }

  //Metodo para agregar un item a la tabla de productos
  addItem(item: Item) {
    this.factura = this.service.agregarItem(item);
  }
}
