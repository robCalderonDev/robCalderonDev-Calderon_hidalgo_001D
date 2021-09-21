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
      icon :'bug-outline',
      name :'Recetas',
      redirecTo:'/recetas'
    },
    {
      icon :'cafe-outline',
      name :'Registrarse',
      redirecTo:'/formulario'
    },
    
  ];
  constructor() {}
}
