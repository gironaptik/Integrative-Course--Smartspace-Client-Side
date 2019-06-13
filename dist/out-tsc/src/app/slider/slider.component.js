import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
let SliderComponent = class SliderComponent {
    constructor(config) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
};
SliderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-slider',
        templateUrl: './slider.component.html',
        styleUrls: ['./slider.component.css'],
        providers: [NgbCarouselConfig]
    }),
    tslib_1.__metadata("design:paramtypes", [NgbCarouselConfig])
], SliderComponent);
export { SliderComponent };
//# sourceMappingURL=slider.component.js.map