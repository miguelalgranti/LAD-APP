import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from '../placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { QuienesComponent } from '../quienes/quienes.component';
import { ConsultoraComponent } from '../consultora/consultora.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';
import { TransferenciaComponent } from '../transferencia/transferencia.component';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    QuienesComponent,
    ConsultoraComponent,
    TecnologiaComponent,
    TransferenciaComponent
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}