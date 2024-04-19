import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { LogrosComponent } from './logros/logros.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { RevisionComponent } from './revision/revision.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CuerpoComponent, EncabezadoComponent, PieComponent, ActualizacionComponent,
                  CertificacionesComponent,LogrosComponent, IdiomasComponent, RevisionComponent]
})
export class HomePageModule {}
