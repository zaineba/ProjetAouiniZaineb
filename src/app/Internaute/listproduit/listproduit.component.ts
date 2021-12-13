import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  produits:Produit[]=[];
  constructor(private produitService:ProduitService) { }




  ngOnInit(): void {
    this.produits = this.produitService.getProduits();
  }
  onAffiche1(categ:string){
    this.produits = this.produitService.getProduitsByCategorie('chalet');
  }
  onAffiche2(lieu:string){
    this.produits = this.produitService.getProduitsByLieu('Nabeul');
  }

  onAfficheAll(){
    this.produits = this.produitService.getProduits();
  }

}
