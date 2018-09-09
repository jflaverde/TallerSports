import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { Injectable } from '@angular/core';
import { Athlete } from '../athlete/athlete';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import 'rxjs/add/operator/catch';

const API_URL = "../../assets/";

const athletes ='/athletes.json';

@Injectable()
export class AthleteService {

    constructor(private http:HttpClient) { }

    getAthletes():Observable<Athlete[]>{
        return this.http.get<Athlete[]>(API_URL + athletes).catch(err => this.handleError(err));
    }

    private handleError(error: any) { 
        return throwError(error.error.errorMessage);
    }
}