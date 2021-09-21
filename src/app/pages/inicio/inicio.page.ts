import { Component, OnInit } from '@angular/core';
import { RecetasPage } from '../recetas/recetas.page';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  constructor( private menuController:MenuController) { }
  option={
     centeredSlides:true,
     loop:true,
     
  }

  ngOnInit() {
  }

  mostrarMenu(){

    this.menuController.open('first');

  }

}
