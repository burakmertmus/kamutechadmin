import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  dashboardCounts:Dashboard;
  ngOnInit() {
    this.dashboardService.getCounts().subscribe(data => {
      this.dashboardCounts = data;
    })
  }

 
}
