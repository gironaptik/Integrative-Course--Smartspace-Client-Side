import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FindRoomsDataSource} from './find-rooms-datasource';
import { ElementBoundary, ElementsService } from 'src/app/services/elements.service';
import { ActionsService, ActionBoundary } from 'src/app/services/actions.service';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'find-rooms',
  templateUrl: './find-rooms.component.html',
  styleUrls: ['./find-rooms.component.css']
})
export class FindRoomsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: FindRoomsDataSource;
  info:ElementBoundary[] = null;
  

  constructor(private elementService: ElementsService, private actionService: ActionsService, private userService:UsersService){
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'elementType', 'expired', 'creator', 'elementProperties'];


  id:string = null;

  ngOnInit():void {
    this.elementService.getAllDoors(localStorage.getItem('smartspace'), localStorage.getItem('token'), 0, 10)
    .subscribe(response=> {this.info = response, console.log(this.info.length),
    this.dataSource = new FindRoomsDataSource(this.paginator, this.sort, this.elementService, response);
    }, 
    err => {console.error(err)});
  }

  doorChange(){
    let dateTime = new Date()
    var action:ActionBoundary ={
      actionKey: {
        id: null,
        smartspace: null
      },
      type: "CheckInOut",
      created: "2019-06-04",
      element: {
        id: this.id,
        smartspace: '2019B.giron.aptik'
      },
      player:{
        email: localStorage.getItem('token'),
        smartspace: localStorage.getItem('smartspace')
      },
      properties: null
    }

    this.actionService.invokeAction(action).subscribe(res=> {alert("The door status changed"), location.reload()}, err=> alert("Error, Check your room ID"));
    this.userService.updatePoints(action.player.smartspace, localStorage.getItem('token'));
  }

}

