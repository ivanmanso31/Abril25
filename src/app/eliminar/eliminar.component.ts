import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../-servicio/producto.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
id:number=0;

constructor(private servicio:ProductoService){}

eliminar() {
  this.servicio.eliminar(this.id).subscribe(respuesta=>{
    console.log("borrado",respuesta);
    this.id=0;
  })
}
}