import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:userLoginInfo = {
    smartspace:'',
    email:''
  };
  constructor(private service: UsersService) {
  }

  ngOnInit() {
  }

  loginUser(){
    this.service.login(this.model.smartspace, this.model.email);
    }

    
    
 }


export class userLoginInfo{
  smartspace: string;
  email: string;
}
