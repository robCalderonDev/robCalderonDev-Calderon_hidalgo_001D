import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {


  usuario = {

    nombre:'',
    apellidos:'',
    edad:'',
    correo:'',
    password:'',
    

  }


  constructor() {}

  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }
  
}
