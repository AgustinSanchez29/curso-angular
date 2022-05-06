import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[//aqui se definen los componentes del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//componentes que se quieren exportar a otros modulos
        ListadoComponent
    ],
    imports:[//modulos a importar
        CommonModule//modulo para las directivas *NgIf &NgFor
    ]

})

export class HeroesModule{
    
}