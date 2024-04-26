import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

export const routes: Routes = [

    {path: "listar", title:"App Listar", component:ListarComponent},
    {path: "insertar", title:"App Insertar", component:InsertarComponent},
    {path: "eliminar", title:"App Eliminar", component:EliminarComponent}
];
