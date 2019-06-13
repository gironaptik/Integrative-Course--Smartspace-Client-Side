import { Component, OnInit } from '@angular/core';
import { findInfo } from '../find-elements/find-elements.component';
import { ElementsService, ElementBoundary } from 'src/app/services/elements.service';

@Component({
  selector: 'update-element',
  templateUrl: './update-element.component.html',
  styleUrls: ['./update-element.component.css']
})
export class UpdateElementComponent implements OnInit {
  private clicked = null;

  model:findInfo = {
    smartspace:'2019B.giron.aptik',
    id:''
  };

  excitingElement:ElementBoundary = {
    key: {
      id:null,
      smartspace:null},
    elementType:null,
    name: null,
    expired: null,
    created:null,
    creator: {
      email:null,
      smartspace:'2019B.giron.aptik'},
    latlng:{
        lat:null,
        lng:null
      },
    elementProperties:null
  };

  newElement:ElementBoundary = {
    key: {
      id:null,
      smartspace:null},
    elementType:null,
    name: null,
    expired: null,
    created:null,
    creator: {
      email:null,
      smartspace:'2019B.giron.aptik'},
    latlng:{
        lat:null,
        lng:null
      },
    elementProperties:null
  };
  
  constructor(private serivce:ElementsService) {}

  setClicked(whatClicked:any){
    this.clicked = whatClicked;
  }

  updateElement(){
    return this.serivce.updateElement(localStorage.getItem('smartspace'), localStorage.getItem('token'), this.model.smartspace, this.model.id, this.newElement)
    .subscribe(update=> {location.reload()}, error=> alert("Can't update the Element"));
  }

  find(){
    return this.serivce.retrieveElement(localStorage.getItem('smartspace'), localStorage.getItem('token'), this.model.smartspace, this.model.id)
    .subscribe(data => {this.excitingElement = data}, err=> alert("Sorry, cant get this Element"));
  }

  getClicked(){
    return this.clicked;
  }
  ngOnInit() {
  }

}
