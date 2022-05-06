import { Component } from '@angular/core';

@Component({
    selector:"app-contador",
    template:`
    <h1>{{titulo}}</h1>

    <h3>La base es {{base}}</h3>

    <button (click)="menos()">-{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="mas()">+{{base}}</button>
    `
})
export class ContadorComponent{
    titulo: string = 'klk';
    numero: number =0;
    base: number=5
  
    mas():void{
      this.numero+=this.base
    }
    menos(){
      this.numero-=this.base
    }   
}