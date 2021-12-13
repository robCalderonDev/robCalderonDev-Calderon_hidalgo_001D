import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {

  usuario = {


    correo:'',
    password:'',


  }

  constructor(private authSvc: AuthService, private router: Router) { }

 
  async onResetPassword(email){
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    }catch (error) {
      console.log('Error: ', error);
    }
  }

}