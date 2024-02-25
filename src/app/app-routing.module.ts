import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionalsComponent } from './pages/profesionals/profesionals.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"home", component: HomeComponent},
  { path:"profesionals", component: ProfesionalsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
