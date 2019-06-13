import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    login(smartspace, email) {
        let url = "http://localhost:8089/smartspace/users/login/" + smartspace + "/" + email;
        this.userEmail = email;
        return this.http.get(url).subscribe(response => {
            location.replace('/'),
                localStorage.setItem('role', response.role),
                localStorage.setItem('token', email),
                localStorage.setItem('smartspace', smartspace);
        }, (error) => {
            this.invalidLogin = true;
        });
    }
    update(model) {
        let url = "http://localhost:8089/smartspace/users/login/" + localStorage.getItem('smartspace') + "/" + localStorage.getItem('token');
        return this.http.put(url, model, httpOptions);
    }
    register(model) {
        let url = "http://localhost:8089/smartspace/users";
        this.http.post(url, model, httpOptions).subscribe(res => { location.reload(); }, err => {
            alert(model.username);
        });
    }
    getUserEmail() {
        return this.userEmail;
    }
    logoutUser() {
        localStorage.removeItem('token');
    }
    isInvalidLog() {
        return this.invalidLogin;
    }
    isLoggedIn() {
        if (localStorage.getItem('token'))
            return true;
        return false;
    }
    userRole() {
        if (localStorage.getItem('role') == "MANAGER")
            return true;
        return false;
    }
};
UsersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], UsersService);
export { UsersService };
export class NewUserForm {
}
export class UserBoundary {
    constructor(obj) {
        Object.assign(this, obj);
    }
}
//# sourceMappingURL=users.service.js.map