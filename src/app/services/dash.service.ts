import { Injectable } from '@angular/core';
import { Dash } from '../model/dash';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  private lesDashs:Dash[] =[ 
    
    {nom: 'Chalet Lela', nombreclient:80 , family:8, friend :40 , couple : 10 , gain :3000},
    {nom: 'The dream house', nombreclient:80, family: 2 , friend :35 ,couple:40,  gain :2800 },
    {nom: 'Chalet bni mtir', nombreclient:120, family:12 , friend : 55,couple : 10,  gain :4500},
    {nom: 'Chalet ayndrahem', nombreclient:60 , family:6 ,  friend :33 ,couple: 8,  gain :3500},
    {nom: 'Chalet Soliman', nombreclient:90 , family:10 ,  friend : 30,couple: 13 ,  gain :6000},
    

  ];

  constructor() { }
  public getDashs(){
    return this.lesDashs;
  }
}
