import { Component } from '@angular/core';
import { Producto } from '../-modelo/producto';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../-servicio/producto.service';

@Component({
  selector: 'app-insertar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarComponent {
  producto: Producto = {
    idProducto:1,
    nombreProducto:"Por defecto",
    precioUnitario:0,
    discontinued:0
  };
  
  constructor(private servicio:ProductoService){}

  insertar() {
    this.servicio.alta(this.producto).subscribe(respuesta=>{
      console.log("insertado",respuesta);
      this.producto = {
        idProducto:1,
        nombreProducto:"Por defecto",
        precioUnitario:0,
        discontinued:0
      };
    })
  }
}
