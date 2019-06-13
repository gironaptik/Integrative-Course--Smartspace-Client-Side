import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
let NewElementComponent = class NewElementComponent {
    constructor(service) {
        this.service = service;
        this.model = {
            key: {
                id: null,
                smartspace: null
            },
            elementType: '',
            name: '',
            expired: '',
            created: '',
            creator: {
                email: '',
                smartspace: '2019B.giron.aptik'
            },
            latlng: {
                lat: null,
                lng: null
            },
            elementProperties: null
        };
    }
    sendNewElement() {
        this.service.addElement(this.model);
        //this.service.retrieveElement("2019B.giron.aptik", "manager", "2019B.giron.aptik", "1");
    }
    ngOnInit() {
    }
};
NewElementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-element',
        templateUrl: './new-element.component.html',
        styleUrls: ['./new-element.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ElementsService])
], NewElementComponent);
export { NewElementComponent };
export class NewElement {
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
//# sourceMappingURL=new-element.component.js.map