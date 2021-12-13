import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
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
onDelete (p:Produit) {
  console.log ("delete")
  this.produitService.deleteProduit(p);

}
}
