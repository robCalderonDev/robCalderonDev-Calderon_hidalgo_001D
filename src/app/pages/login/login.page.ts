import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if (user){
        const isVerified = this.authSvc.isEmailVerified(user);
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