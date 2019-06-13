import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
let LoginComponent = class LoginComponent {
    constructor(service) {
        this.service = service;
        this.model = {
            smartspace: '',
            email: ''
        };
    }
    ngOnInit() {
    }
    loginUser() {
        this.service.login(this.model.smartspace, this.model.email);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UsersService])
], LoginComponent);
export { LoginComponent };
// private handleError(error: Response){
//   if(error.status == 400)
//     return Observable.throw(new BedInput(error.json()));
//   if(error.status == 404)
//     return Observable.throw(new NotFounderError());
//   return Observable.throw(new AppError(error));
// }
export class userLoginInfo {
}
//# sourceMappingURL=login.component.js.map