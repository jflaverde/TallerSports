import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../athlete/athlete';
import { AthleteService } from '../athlete.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {

  athletes:Athlete[];

  constructor(
    private athleteService:AthleteService
  ) { }

  getAthletes():void{
    this.athleteService.getAthletes()
    .subscribe(athletes=>{this.athletes=athletes});
  }



  ngOnInit() {
    this.getAthletes();
  }

}
