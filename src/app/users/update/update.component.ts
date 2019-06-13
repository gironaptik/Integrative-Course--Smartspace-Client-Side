import { Component, OnInit } from '@angular/core';
import { UsersService, UserBoundary, NewUserForm, BoundaryEmailKey } from '../../services/users.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateModel:UserBoundary = {

    key: {
      email:null,
      smartspace:null},
    username: '',
      avatar: '',
      role: '',
      points: null
  }
  
  existingModel:UserBoundary = {

    key: {
      email:null,
      smartspace:null},
    username: '',
      avatar: '',
      role: '',
      points: null
  }

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.currentUser();
  }

  currentUser():void{
    this.service.curretUser(localStorage.getItem('smartspace'), localStorage.getItem('token'))
    .subscribe(current=> {this.existingModel = current});
  }

  updateUser():void{
    this.service.update(this.updateModel).subscribe(
      res => {location.reload(); 
        if(this.updateModel.role != localStorage.getItem('role')){
          localStorage.removeItem('role');
          localStorage.setItem('role', this.updateModel.role);
          alert(localStorage.getItem('role'))
        }},
      err => alert("Can't update the User"));
    }
}


