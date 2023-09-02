import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    FooterComponent
  ]
})
export class SharedModule { }
