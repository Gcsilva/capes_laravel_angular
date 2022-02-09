import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { MainSideBarComponent } from './main/main-side-bar/main-side-bar.component';
import { FooterComponent } from './main/footer/footer.component';
import { ControlSideBarComponent } from './main/control-side-bar/control-side-bar.component';
import { ContentComponent } from './main/content/content.component';
import { CursoComponent } from './curso/curso.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaravelApiService } from './service/laravel-api.service';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MinhaApresentacaoComponent } from './home/minha-apresentacao/minha-apresentacao.component';
import { ProjetoApresentacaoComponent } from './home/projeto-apresentacao/projeto-apresentacao.component';
import { ProjetoTecnologiasComponent } from './home/projeto-tecnologias/projeto-tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    MainSideBarComponent,
    FooterComponent,
    ControlSideBarComponent,
    ContentComponent,
    CursoComponent,
    HomeComponent,
    MinhaApresentacaoComponent,
    ProjetoApresentacaoComponent,
    ProjetoTecnologiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClientModule, LaravelApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
