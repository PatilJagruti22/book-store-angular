import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorAddressComponent } from './components/author-address/author-address.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorAddressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    FooterComponent,
    AuthorsComponent,
    AuthorAddressComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
