import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visit } from './visit';
    import { from, Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class VisitsService
{
    private visitsUrl="http://localhost:63867/api/company/visits/1";

    constructor(private _http:HttpClient) {}

    getVisit(): Observable<Visit[]>
    {
        alert('avf');
        return this._http.get<Visit[]>(this.visitsUrl);

    }

}