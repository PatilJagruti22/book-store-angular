import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    // AuthModule,
    // UserModule,
    // PublicModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
