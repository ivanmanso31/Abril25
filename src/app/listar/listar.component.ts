import { Component, OnInit } from '@angular/core';
import { Producto } from '../-modelo/producto';
import { ProductoService } from '../-servicio/producto.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  productos:Producto[] = [];
  constructor(private servicio:ProductoService){}

  ngOnInit(): void {
    this.servicio.obtenerTodos().subscribe(data => this.productos = data);
  }

}
