import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { Sport } from './sport';
import { environment } from '../../environments/environment';
const API_URL = "../../assets/"; //environment.apiURL;

const sports = '/sports.json';

@Injectable()
export class SportsService{

    constructor(private http: HttpClient) { }

    getSports():Observable<Sport[]>{
        return this.http.get<Sport[]>(API_URL + sports).catch(err => this.handleError(err));
    }

    private handleError(error: any) { 
        return throwError(error.error.errorMessage);
    }
}