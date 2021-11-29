import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/api/getapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
getdata:any[]=[];

  constructor( public _services:GetapiService) { 

    this._services.getdata<any[]>("").subscribe(data =>{

      this.getdata = data
      console.log(this.getdata)

    })
  }

  ngOnInit() {
  }

}