import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {

  model:NewElement = {
    key: {
      id:null,
      smartspace:null},
    elementType:'',
    name: '',
    expired: '',
    created:'',
    creator: {
      email:'',
      smartspace:'2019B.giron.aptik'},
    latlng:{
        lat:null,
        lng:null
      },
    elementProperties:null
  };

  constructor(private service: ElementsService) { }

  sendNewElement():void{
    this.service.addElement(this.model);
  }

  ngOnInit() {
  }

}

export class NewElement{
  
  key:Key;
  elementType: string;
  name: string;
  expired: string
  created: string;
  creator:Creator = {
    email:'',
    smartspace:''
  };
  latlng:Latlng ={
    lat:null,
    lng:null
  };
  elementProperties: any;
}

interface Key{
  id:null;
  smartspace:null;
}

interface Creator{
  email:string;
  smartspace:string;
}

interface Latlng{
  lat:number;
  lng:number;
}
