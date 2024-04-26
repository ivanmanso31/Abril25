import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,ListarComponent, InsertarComponent, EliminarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril25';
}
