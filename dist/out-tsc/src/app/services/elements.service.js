import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'zone.js/dist/zone'; // Included with Angular CLI.
;
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let ElementsService = class ElementsService {
    constructor(http) {
        this.http = http;
        this.managerEmail = localStorage.getItem('token');
        this.managerSnartspace = localStorage.getItem('smartspace');
    }
    addElement(model) {
        let url = "http://localhost:8089/smartspace/elements/" + localStorage.getItem('smartspace') + "/" + localStorage.getItem('token');
        this.convertToMap(model);
        this.http.post(url, model, httpOptions).subscribe(res => { location.reload(); }, err => {
            alert(model.name);
        });
    }
    convertToMap(model) {
        let obj = JSON.parse(model.elementProperties);
        model.elementProperties = obj;
    }
    retrieveElement(userSmartspace, userEmail, elementEmartspace, elementId) {
        let url = "http://localhost:8089/smartspace/elements/" + userSmartspace + "/" + userEmail + "/" + elementEmartspace + "/" + elementId;
        return this.http.get(url);
    }
    getAllElements(smartspace, email, page, size) {
        let url = "http://localhost:8089/smartspace/elements/" + smartspace + "/" + email + "?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(map((response) => response));
    }
    isInvalidLog() {
        return this.invalidLogin;
    }
};
ElementsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ElementsService);
export { ElementsService };
export class ElementBoundary {
    constructor() {
        this.creator = {
            email: '',
            smartspace: ''
        };
        this.latlng = {
            lat: null,
            lng: null
        };
    }
}
//# sourceMappingURL=elements.service.js.map