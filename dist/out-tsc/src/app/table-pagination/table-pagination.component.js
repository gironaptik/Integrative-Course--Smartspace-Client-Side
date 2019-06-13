import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablePaginationDataSource } from './table-pagination-datasource';
import { ElementsService } from '../services/elements.service';
let TablePaginationComponent = class TablePaginationComponent {
    constructor(elementService) {
        this.elementService = elementService;
        this.info = null;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name', 'elementType', 'expired', 'creator'];
    }
    ngOnInit() {
        this.elementService.getAllElements(localStorage.getItem('smartspace'), localStorage.getItem('token'), 0, 10)
            .subscribe(response => {
            this.info = response, console.log(this.info.length),
                this.dataSource = new TablePaginationDataSource(this.paginator, this.sort, this.elementService, response);
        }, err => { console.error(err); });
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", MatPaginator)
], TablePaginationComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], TablePaginationComponent.prototype, "sort", void 0);
TablePaginationComponent = tslib_1.__decorate([
    Component({
        selector: 'table-pagination',
        templateUrl: './table-pagination.component.html',
        styleUrls: ['./table-pagination.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ElementsService])
], TablePaginationComponent);
export { TablePaginationComponent };
//# sourceMappingURL=table-pagination.component.js.map