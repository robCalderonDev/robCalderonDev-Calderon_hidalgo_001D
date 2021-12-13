import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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


  constructor(private authSvc: AuthService, private router:Router) {}

  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }
  async onRegister(email, password){
    try{
      const usuario = await this.authSvc.register(email.value, password.value);
      if (usuario){
        console.log('User', usuario);
        const isVerified= this.authSvc.isEmailVerified(usuario);
        this.redirectUser(isVerified);
      }
    }catch(error){
    console.log('Error: ', error)
  };
 }

 redirectUser(isVerified:boolean): void{
  if(isVerified){
    this.router.navigate(["verificado"]);
  }else {
    this.router.navigate(["no-verificado"]);

  }

 }

}

