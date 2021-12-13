import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usuario = {

   
    correo:'',
    password:'',
    

  }
  field:string='';

  constructor(private authSvc: AuthService, public toastController: ToastController, public alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }

  async onLogin(email, password){
    try{
      const usuario = await this.authSvc.login(email.value, password.value);
      if (usuario){
        const isVerified = this.authSvc.isEmailVerified(usuario);
        this.redirectUser(isVerified);
      }
      else{
        const toast = await this.toastController.create({
          message:'tu cuenta no existe o no la has verificado',
          duration:2000
        })
        toast.present();
      
      }
    }catch(error){
   
  }
 

  
  
 }
 
  
 redirectUser(isVerified:boolean): void{
  if(isVerified){
    this.router.navigate(["verificado"]);
  }else {
    this.router.navigate(["no-verificado"]);

  }

 }
 
  
}