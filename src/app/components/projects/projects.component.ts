import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  public projectsByYear = Array<Projects>();

  constructor(private dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    this.projectsByYear = await this.dataService.getProjects();
  }

}
