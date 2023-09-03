import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //AppRoutingModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    FooterComponent,
    AuthorsComponent
  ]
})
export class SharedModule { }
