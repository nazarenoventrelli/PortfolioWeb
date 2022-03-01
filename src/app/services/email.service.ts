import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as M from 'materialize-css'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public sendEmail(data: any) {
    let contactTemplate = 'template_n6aut9l';
    this.internalSendEmail(data, contactTemplate);
  }

  public subscribeEmail(data: any) {
    let subsrcibeTemplate = 'template_f75pswt';
    this.internalSendEmail(data, subsrcibeTemplate);
  }

  private internalSendEmail(data: any, template: string) {
    emailjs.sendForm('service_ksu67aj', template, data, 'user_GVwaXQ3DI9zxrQZN0BFnk')
      .then((result: EmailJSResponseStatus) => {
        M.toast({ html: 'Message sent!', classes: 'rounded' });
        document.querySelectorAll('form').forEach(f => f.reset());
      }, () => {
        M.toast({ html: 'Failed to send ', classes: 'rounded' });
      });
  }

}
