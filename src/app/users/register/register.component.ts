import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:NewUserForm = {
    username:'',
    email:'',
    avatar:'',
    role:''
  };
  constructor(private service: UsersService) { 
  }

  sendNewUserForm():void{
    this.service.register(this.model);
  }

  ngOnInit() {
  }

  getUserEmail(): string{
    return this.model.email;
  }

}

export class NewUserForm{
  username: string;
  email: string;
  avatar: string;
  role: string;

}
