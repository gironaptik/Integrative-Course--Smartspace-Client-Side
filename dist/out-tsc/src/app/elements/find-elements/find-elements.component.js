import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
let FindElementsComponent = class FindElementsComponent {
    constructor(serivce) {
        this.serivce = serivce;
        this.clicked = null;
        this.model = {
            smartspace: '2019B.giron.aptik',
            id: ''
        };
        this.element = {
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
    setClicked(whatClicked) {
        this.clicked = whatClicked;
    }
    getClicked() {
        return this.clicked;
    }
    find() {
        return this.serivce.retrieveElement(localStorage.getItem('smartspace'), localStorage.getItem('token'), this.model.smartspace, this.model.id)
            .subscribe(data => { this.element = data; });
    }
    ngOnInit() {
    }
};
FindElementsComponent = tslib_1.__decorate([
    Component({
        selector: 'find-elements',
        templateUrl: './find-elements.component.html',
        styleUrls: ['./find-elements.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ElementsService])
], FindElementsComponent);
export { FindElementsComponent };
export class findInfo {
}
export class ElementBoundary {
    constructor(key, elementType, name, expired, created, creator, latlng, elementProperties) {
        this.creator = {
            email: '',
            smartspace: ''
        };
        this.latlng = {
            lat: null,
            lng: null
        };
        this.key = key;
        this.elementType = elementType;
        this.name = name;
        this.expired = expired;
        this.created = created;
        this.creator = creator;
        this.latlng = latlng;
        this.elementProperties = elementProperties;
    }
}
//# sourceMappingURL=find-elements.component.js.map