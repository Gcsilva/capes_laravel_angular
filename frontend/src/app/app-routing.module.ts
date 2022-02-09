import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Home', breadcrumbs: {alias: 'Home'} }
      },
      {
        path: 'cursos',
        component: CursoComponent,
        data: {title: 'Cursos', breadcrumbs: {alias: 'Cursos'} }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
