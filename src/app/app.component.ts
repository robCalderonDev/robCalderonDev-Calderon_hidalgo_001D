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
      icon :'book-outline',
      name :'Recetas',
      redirecTo:'/recetas'
    },
    {
      icon :'clipboard-outline',
      name :'Registrarse',
      redirecTo:'/formulario'
    },
    {
      icon :'enter-outline',
      name :'Login',
      redirecTo:'/login'
    },
    {
      icon :'person-outline',
      name :'Datos',
      redirecTo:'/datos'
    },
    
    
  ];
  constructor() {}
}
