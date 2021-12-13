import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  produit:Produit;
  constructor(private activatedRoute:ActivatedRoute,
    private produitService:ProduitService) { }

    ngOnInit(): void {
      let identifiant = this.activatedRoute.snapshot.params['id'];
       this.produit= this.produitService.getProduitsById(identifiant);
      
    }

}
