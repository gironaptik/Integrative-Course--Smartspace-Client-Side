import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import 'zone.js/dist/zone';  // Included with Angular CLI.
import { Observable, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private managerEmail:string = localStorage.getItem('token');
  private managerSnartspace:string = localStorage.getItem('smartspace');
  public action: ActionBoundary;
  invalidLogin:boolean;

  constructor(private http: HttpClient) { }

  invokeAction(action:ActionBoundary){
    let url = "http://localhost:8089/smartspace/actions";
    return this.http.post<ActionBoundary>(url, action, httpOptions);
  }

  convertToMap(model:ActionBoundary){
    let obj = JSON.parse(model.properties);
    model.properties = obj;
}
}

export class ActionBoundary{
  actionKey:Key;
  type: string;
  created: string;
  element:Key;
  player:Creator = {
    email:'',
    smartspace:''
  };
  properties: any;
}

interface Key{
  id:string;
  smartspace:string;
}

interface Creator{
  email:string;
  smartspace:string;
}

interface Latlng{
  lat:number;
  lng:number;
}