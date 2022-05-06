import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[]= ['goku','ironman','batman']
  borrado: string= ''

  borrarHeroe(){
    console.log(this.heroes)
    this.borrado= this.heroes.pop() || ""//siginifa que si es undefined le asigna un string vacio
  }
}
