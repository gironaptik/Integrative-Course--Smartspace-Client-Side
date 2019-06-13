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
export class ElementsService {
  private managerEmail:string = localStorage.getItem('token');
  private managerSnartspace:string = localStorage.getItem('smartspace');
  public element: ElementBoundary;
  invalidLogin:boolean;

  constructor(private http: HttpClient) { }


  addElement(model:ElementBoundary){
    let url = "http://localhost:8089/smartspace/elements/" + localStorage.getItem('smartspace') + "/" + localStorage.getItem('token');
    this.convertToMap(model)
    this.http.post(url, model, httpOptions).subscribe(
     res => {location.replace('/')},
     err => {
       alert("Check your form")
     } 
    ) 
  }

  updateElement(userSmartspace:string, userEmail: string, elementEmartspace:string, elementId:string, model:ElementBoundary){
    let url = "http://localhost:8089/smartspace/elements/" + localStorage.getItem('smartspace') + "/" + 
    localStorage.getItem('token') +"/"+ elementEmartspace +"/"+ elementId;
    this.convertToMap(model)
    return this.http.put<ElementBoundary>(url, model, httpOptions);


  }

  convertToMap(model:ElementBoundary){
      let obj = JSON.parse(model.elementProperties);
      model.elementProperties = obj;
  }

  public retrieveElement(userSmartspace:string, userEmail: string, elementEmartspace:string, elementId:string){
    let url = "http://localhost:8089/smartspace/elements/"+userSmartspace+"/"+userEmail + "/" + elementEmartspace + "/" + elementId;
    return this.http.get<ElementBoundary>(url);
  }

  getAllElements(smartspace:string, email: string, page:any, size: any): Observable<ElementBoundary[]>{
    let url = "http://localhost:8089/smartspace/elements/"+smartspace+"/"+email+"?page="+page+"&size="+size;
    return this.http.get<ElementBoundary[]>(url).pipe(map((response:ElementBoundary[]) => response));
  }

  getAllDoors(smartspace:string, email: string, page:any, size: any){
    let url = "http://localhost:8089/smartspace/elements/"+smartspace+"/"+email+"?search=type&value=Door&page="+page+"&size="+size;
    return this.http.get<ElementBoundary[]>(url).pipe(map((response:ElementBoundary[]) => response));
  }
  

  isInvalidLog(){
    return this.invalidLogin;
  }

}

export class ElementBoundary{
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


