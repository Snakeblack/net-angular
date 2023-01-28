import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  { path: '', redirectTo: '/listMascotas', pathMatch: 'full' },
  { path: 'listMascotas', component: ListadoMascotaComponent },
  { path: 'addMascota', component: AgregarEditarMascotaComponent },
  { path: 'viewMascota/:id', component: VerMascotaComponent },
  { path: 'editMascota/:id', component: AgregarEditarMascotaComponent },
  { path: '**', redirectTo: '/listMascotas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
