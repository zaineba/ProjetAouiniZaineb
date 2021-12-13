import { Component, OnInit } from '@angular/core';
import { Dash } from 'src/app/model/dash';
import { DashService } from 'src/app/services/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashs:Dash[]=[];
  constructor( private dashService:DashService) { }

  ngOnInit(): void {
    this.dashs=this.dashService.getDashs();
  }

}
