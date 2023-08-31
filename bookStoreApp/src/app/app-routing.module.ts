import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-us', pathMatch: 'full'}, 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
