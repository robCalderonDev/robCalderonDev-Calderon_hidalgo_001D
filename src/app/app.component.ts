import { Component } from '@angular/core';
interface Componente {
  icon: string ;
  name: string ;
  redirecTo: string ;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes : Componente []=[
    {
      icon :'car-sport-outline',
      name :'Autos',
      redirecTo:'/recetas'
    },
    {
      icon :'person-outline',
      name :'Sugerencias',
      redirecTo:'/datos'
    },
    {
      icon :'albums-outline',
      name :'Api',
      redirecTo:'/api'
    },
    
    
    
  ];
  constructor() {}
}
