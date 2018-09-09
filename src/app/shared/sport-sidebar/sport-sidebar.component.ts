import { Component, OnInit, Input } from '@angular/core';
import { Sport } from '../../sports/sport';

@Component({
    selector: 'app-sport-sidebar',
    templateUrl: './sport-sidebar.component.html',
    styleUrls: ['./sport-sidebar.component.css']
})
export class SportSidebarComponent implements OnInit {

    
    @Input() sports: Sport[];

    /**
    * The component's constructor
    */
    constructor() { }

    /**
    * The method which initializes the component
    */
    ngOnInit() { }

}
