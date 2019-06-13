import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablePaginationDataSource, TablePaginationItem } from './table-pagination-datasource';
import { ElementBoundary, ElementsService } from 'src/app/services/elements.service';


@Component({
  selector: 'table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: TablePaginationDataSource;
  info:ElementBoundary[] = null;
  

  constructor(private elementService: ElementsService){
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'elementType', 'expired', 'creator', 'elementProperties'];


  ngOnInit():void {
    this.elementService.getAllElements(localStorage.getItem('smartspace'), localStorage.getItem('token'), 0, 10)
    .subscribe(response=> {this.info = response,
    this.dataSource = new TablePaginationDataSource(this.paginator, this.sort, this.elementService, response);
    }, 
    err => {console.error(err)});
  }

}