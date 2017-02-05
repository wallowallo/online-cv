import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

declare var emailjs:any;

@Component({
  moduleId: 'module.id',
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html'
})
export class ContactMeComponent {

     public constructor(private http: Http) {}

     send(form: NgForm) {
       const subject = form.value.subject;
       const text = form.value.message;
       const service_id = "default_service";
       const template_id = "template_Ass4sDXO";
       const params = {
         subject: subject,
         message: text
       }
       alert(typeof emailjs);
       emailjs.send(service_id, template_id, params)
         .then(function(){
            alert("Sent!");
          }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         });
        form.reset();
      }
}
