import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../users/login/login.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent implements OnInit {

  email: string = localStorage.getItem('token');
  points: string = localStorage.getItem('points');
  test:string;
  constructor(private userService: UsersService) {
  }
  
  ngOnInit(): void {
  }



}
