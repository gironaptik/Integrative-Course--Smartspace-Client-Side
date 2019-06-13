import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { empty } from 'rxjs';
import { ActionsService, ActionBoundary } from 'src/app/services/actions.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'find-elements',
  templateUrl: './find-elements.component.html',
  styleUrls: ['./find-elements.component.css']
})
export class FindElementsComponent implements OnInit {
  private clicked = null;
  private actionClicked = null;
  private id:string; 
  model:findInfo = {
    smartspace:'2019B.giron.aptik',
    id:''
  };

  volume:volumeInfo= {
    volume:null,
    id: null
  }

  element:ElementBoundary = {
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

  
  constructor(private serivce:ElementsService, private actionService: ActionsService) {}

  setClicked(whatClicked:any){
    this.clicked = whatClicked;
  }

  getClicked(){
    return this.clicked;
  }

  setActionClicked(whatClicked:any){
    this.actionClicked = whatClicked;
  }

  getActionClicked(){
    return this.actionClicked;
  }

  onOffChange(){
    let dateTime = new Date()
    var myMap = new Map();
    var action:ActionBoundary ={
      actionKey: {
        id: null,
        smartspace: null
      },
      type: "OnOff",
      created: "2019-06-04",
      element: {
        id: this.id,
        smartspace: '2019B.giron.aptik'
      },
      player:{
        email: localStorage.getItem('token'),
        smartspace: localStorage.getItem('smartspace')
      },
      properties: null
    }
    this.actionService.invokeAction(action).subscribe(res=> {alert("The element state changed"), location.reload()}, err=> alert("Error, Check your element ID"));
  }

  actionVolume:ActionBoundary ={
    actionKey: {
      id: null,
      smartspace: null
    },
    type: "ChangeVolume",
    created: "2019-06-04",
    element: {
      id: this.volume.id,
      smartspace: '2019B.giron.aptik'
    },
    player:{
      email: localStorage.getItem('token'),
      smartspace: localStorage.getItem('smartspace')
    },
    properties: null
  }
  volumeChange(){
    this.actionVolume.properties = JSON.parse(this.actionVolume.properties)
    this.actionService.invokeAction(this.actionVolume).subscribe(res=> {alert("The element sound changed"), location.reload()}, err=> alert("Error, Check your element ID"));
  }


  find(){
    return this.serivce.retrieveElement(localStorage.getItem('smartspace'), localStorage.getItem('token'), this.model.smartspace, this.model.id)
    .subscribe(data => {this.element = data}, err=> alert("No element to display"));
  }

  ngOnInit() {
  }

}

export class findInfo{
  smartspace: string;
  id: string;
}

export class volumeInfo{
  volume: string;
  id: string;
}

export class ElementBoundary{

  constructor(
    key: Key,
    elementType: string,
    name: string,
    expired: string,
    created: string,
    creator: Creator,
    latlng:Latlng,
    elementProperties: any
  ){
    this.key = key;
    this.elementType = elementType;
    this.name = name;
    this.expired = expired;
    this.created = created;
    this.creator = creator;
    this.latlng = latlng;
    this.elementProperties = elementProperties;
  }
  
  key:Key;
  elementType: string;
  name: string;
  expired: string;
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