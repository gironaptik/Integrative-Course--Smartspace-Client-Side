import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
let UpdateComponent = class UpdateComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    updateUser() {
        this.service.update(this.model);
        if (this.model.email == localStorage.getItem(''))
            ;
    }
};
UpdateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update',
        templateUrl: './update.component.html',
        styleUrls: ['./update.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UsersService])
], UpdateComponent);
export { UpdateComponent };
//# sourceMappingURL=update.component.js.map