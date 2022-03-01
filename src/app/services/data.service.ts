import { Injectable } from '@angular/core';
import { Descriptions } from '../models/descriptions';
import { Project } from '../models/project';
import { Projects } from '../models/projects';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public projects = new Array<Projects>();

  constructor() {
  }

  private loadProjects(): Promise<Array<Projects>> {
    return new Promise(function (resolve) {
      db.getAll().then(x => {
        let projects = new Array<Projects>();
        x.projects.forEach(project => {
          let p: Projects = new Projects();
          Object.assign(p, project);
          projects.push(p);
        });
        resolve(projects);
      });
    });
  }

  private LoadDescriptions(): Promise<Descriptions> {
    return new Promise(function (resolve) {
      db.getAll().then(x => {
        let descriptions = new Descriptions(x.homeDescription);
        resolve(descriptions);
      });
    });
  }

  public async getDescriptions() {
    let descriptions;
    await this.LoadDescriptions().then(response => descriptions = response);
    return descriptions;
  }

  public async getProjectById(id: number) {
    await this.loadProjects().then(response => this.projects = response);
    
    let project;
    for (let projects of this.projects) {
      for (let item of projects.projects) {
        if (item.id == id) {
          project = item;
          break;
        }
      }
    }

    return new Promise(function (resolve) { resolve(project) });
  }

  public async getProjects() {
    await this.loadProjects().then(response => this.projects = response);
    return this.projects;
  }

}
