import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { LogrosComponent } from './logros/logros.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { RevisionComponent } from './revision/revision.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  
  {
    path: 'actualizacion',
    component: ActualizacionComponent,
  },  
  {
    path: 'certificaciones',
    component: CertificacionesComponent,
  },  
  {
    path: 'logros',
    component: LogrosComponent,
  },  
  {
    path: 'idiomas',
    component: IdiomasComponent,
  },  
  {
    path: 'revision',
    component: RevisionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
