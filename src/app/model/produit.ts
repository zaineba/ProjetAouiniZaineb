export class Produit {
    constructor(
       public  id: number,
       public libelle: string,
       public promotion: boolean,
       public prix : number,
       public lieu : string ,
       public categorie: string,
       public photo:string,) {
    }
}
