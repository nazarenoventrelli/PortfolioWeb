import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public homeDescription:string;
  constructor(private dataService:DataService) { }

  async ngOnInit(): Promise<void> {
    this.homeDescription = (await this.dataService.getDescriptions()).homeDescription;
  }
}
