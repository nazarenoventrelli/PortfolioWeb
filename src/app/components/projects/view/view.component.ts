import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NgZoom } from 'ng-zoom';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  public projectId;
  public project: any;
  public loaded = false;
  
  constructor(private route: ActivatedRoute, private dataService: DataService, private ngz: NgZoom) { }

  async ngOnInit(): Promise<void> {

    this.projectId = Number(this.route.snapshot.paramMap.get('id'));

    await this.dataService.getProjectById(this.projectId).then(p => {
      this.project = p;
    });

  }

}
