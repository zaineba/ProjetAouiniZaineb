import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
 name:any;
 psw:any;
 ref:string;
   constructor() { }
  onConnect() {
    if ((this.name=="Admin" )&& (this.psw=="1111" )) {
      this.ref="/menu" ;
    }
    else {
      alert ("verify your username or your password !") ;
      this.ref="/auth" ;
    }
   
  }
 
  ngOnInit(): void {
  }
  onSubmit(f:NgForm){


    
    
  }


}
