import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PortfolioWeb';
  constructor(private emailService: EmailService) {
  }

  public subscribe(e: Event) {
    e.preventDefault();
    this.emailService.subscribeEmail(e.target);
  }

}
