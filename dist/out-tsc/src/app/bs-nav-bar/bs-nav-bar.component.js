import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
let BsNavBarComponent = class BsNavBarComponent {
    constructor(userService) {
        this.userService = userService;
        this.email = localStorage.getItem('token');
    }
    ngOnInit() {
    }
};
BsNavBarComponent = tslib_1.__decorate([
    Component({
        selector: 'bs-navbar',
        templateUrl: './bs-nav-bar.component.html',
        styleUrls: ['./bs-nav-bar.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UsersService])
], BsNavBarComponent);
export { BsNavBarComponent };
//# sourceMappingURL=bs-nav-bar.component.js.map