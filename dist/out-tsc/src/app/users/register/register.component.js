import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
let RegisterComponent = class RegisterComponent {
    constructor(service) {
        this.service = service;
        this.model = {
            username: '',
            email: '',
            avatar: '',
            role: ''
        };
    }
    sendNewUserForm() {
        this.service.register(this.model);
    }
    ngOnInit() {
    }
    getUserEmail() {
        return this.model.email;
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UsersService])
], RegisterComponent);
export { RegisterComponent };
export class NewUserForm {
}
//# sourceMappingURL=register.component.js.map