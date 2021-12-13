import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {

  

  ngOnInit(): void {
  }
  lesCategories: string[] = [
    'Chalet', 'House', 'Tree house', 'Bangaloue'];

    lesLieux :string[]=[
      'Nabeul','Kleibya','Sousse','Aindrahem'
    ];
    produit:Produit= new Produit(0," ",false,0," "," "," ");
    msg:string="Your product is updated succufully !";
  constructor( private  produitService :ProduitService) { }
  

  onSubmit(f:NgForm){
    console.log(this.produit);
    console.log(f.value);
    console.log(f.value.id+ " "+ f.value["lib"]);
    this.produitService.addProduit(this.produit);
    
    
  }


  onVider(f:NgForm){
    f.resetForm({categorie:'Centre de camping', lieu:'Sousse'});
    
}

}
