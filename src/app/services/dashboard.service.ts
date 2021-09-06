import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Dashboard } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


    constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44360/api/";

  getDashboards(): Observable<Dashboard[]> {
    return this.httpClient.get<Dashboard[]>(this.path + "Dashboards");
  }

}
