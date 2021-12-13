import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  getProduitById(identifiant: any): any {
    throw new Error('Method not implemented.');
  }

  private lesProduits:Produit[] =[ 
    
    
    {id: 1 ,libelle:'Chalet Lela', promotion:false, prix :500, lieu:"Nabeul", categorie:"chalet", photo:"/assets/chaletlela.jpg",},
    {id: 2 ,libelle:'Chalet Soliman', promotion:true, prix: 450,lieu:"Kleibia", categorie:"chalet", photo:'/assets/chaletsoliman.jpg'},
    {id: 3  , libelle:'The dream house', promotion:false, prix:650, lieu:"Sousse", categorie:"house", photo:'/assets/retiba.jpg'} ,
    {id: 4 ,libelle:'Chalet bni mtir', promotion:true, prix:700 ,lieu:"Aindrahem", categorie:"chalet", photo:'/assets/chaletbnimtir.jpg'},
    {id: 5 , libelle:'Chalet ayndrahem',promotion:false, prix:800,  lieu:"kleibya", categorie:"chalet", photo:'/assets/aindrahem.jpg'},
    {id: 6 , libelle:'Khoukh',promotion:true, prix:450,  lieu:"Aindrahem", categorie:"bangaloue", photo:'/assets/aindrahem.jpg'},
    {id: 7 , libelle:'House compagne',promotion:false, prix:600,  lieu:"Sousse", categorie:"house", photo:'/assets/maisoncompagne.jpg'},
    {id: 8, libelle:'Matarus',promotion:true, prix:320,  lieu:"Nabeul", categorie:"tree house", photo:'/assets/matarus.jpg'},
       
  ];
  constructor() { }
  public getProduits(){
    return this.lesProduits;
  }
  public addProduit(p:Produit){
    let p1:Produit = Object.assign({}, p);
    this.lesProduits.push(p1);
}
public getProduitsById(id:number){
  return this.lesProduits.find(l=>l.id ==id);
}

public getProduitsByCategorie(categ:string){
  return this.lesProduits.filter(l => l.categorie == categ);
}
public getProduitsByLieu (lieu:string) {
  return this.lesProduits.filter(l=>l.lieu== lieu);
}
/*
public modifierProduit ( p: Produit ){
 let p1:Produit = Object.assign ({},p);
  return this.lesProduits.put();
}*/
 public deleteProduit(p: Produit){

  return this.lesProduits.shift();
  }
  



}
