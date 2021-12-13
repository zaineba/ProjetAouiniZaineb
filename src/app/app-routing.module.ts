import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproduitComponent } from './Admin/addproduit/addproduit.component';
import { AuthentificationComponent } from './Admin/authentification/authentification.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DetailproduitComponent } from './Admin/detailproduit/detailproduit.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { ModifierproduitComponent } from './Admin/modifierproduit/modifierproduit.component';
import { ProduitsComponent } from './Admin/produits/produits.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './Internaute/about/about.component';
import { ContactComponent } from './Internaute/contact/contact.component';
import { HeaderComponent } from './Internaute/header/header.component';
import { HomeComponent } from './Internaute/home/home.component';
import { ListproduitComponent } from './Internaute/listproduit/listproduit.component';

const routes: Routes = [
  {path:'auth', component:AuthentificationComponent},
  {path:'add', component:AddproduitComponent},
  {path:'dash',component:DashboardComponent},
  {path:'detail',component:DetailproduitComponent},
  {path:'modifier', component:ModifierproduitComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home', component:HomeComponent},
  {path:'listproduit',component:ListproduitComponent},
  {path:'head',component:HeaderComponent},
  {path:'menu', component :MenuComponent},
  {path:'produit' , component : ProduitsComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'} ,
  /*{path:'**', component:ErrorComponent},*/
  {path: 'listproduit/:id', component: DetailproduitComponent},
  {path:'modifier/:id', component:ModifierproduitComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
