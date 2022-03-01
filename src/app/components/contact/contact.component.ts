import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as M from 'materialize-css'
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {

    let textArea = document.querySelector(".messageTextArea");
    M.textareaAutoResize(textArea);
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.emailService.sendEmail(e.target);
  }
}
