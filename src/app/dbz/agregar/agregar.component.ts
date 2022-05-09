import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{
  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }
/*   @Input() personajes: Personaje[]=[]
 */

  //@Output() onNewPersonaje: EventEmitter<Personaje>= new EventEmitter()


  constructor(private dbzService: DbzService){}

  agregar(){
    if(this.nuevo.nombre.trim().length===0){return;}
/*     this.personajes.push(this.nuevo)
 */    
      // this.onNewPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
