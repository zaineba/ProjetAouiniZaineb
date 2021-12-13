import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Admin/authentification/authentification.component';
import { AddproduitComponent } from './Admin/addproduit/addproduit.component';
import { ModifierproduitComponent } from './Admin/modifierproduit/modifierproduit.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DetailproduitComponent } from './Admin/detailproduit/detailproduit.component';
import { HomeComponent } from './Internaute/home/home.component';
import { ListproduitComponent } from './Internaute/listproduit/listproduit.component';
import { AboutComponent } from './Internaute/about/about.component';
import { ContactComponent } from './Internaute/contact/contact.component';
import { HeaderComponent } from './Internaute/header/header.component';
import { ProduitsComponent } from './Admin/produits/produits.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { EtoiléPipe } from './pipes/etoilé.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AddproduitComponent,
    ModifierproduitComponent,
    DashboardComponent,
    DetailproduitComponent,
    HomeComponent,
    ListproduitComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ProduitsComponent,
    MenuComponent,
    ErrorComponent,
    EtoiléPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
