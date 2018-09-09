import { Component, OnInit } from '@angular/core';

import {Sport} from '../sport';
import { SportsService } from '../sports.service';


@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {

  constructor(
    private sportsService:SportsService
  ) { }

  sports:Sport[];

  getSports(): void{
    this.sportsService.getSports()
    .subscribe(sports=>{this.sports=sports});
  }


  ngOnInit() {
    this.getSports();
  }

}
