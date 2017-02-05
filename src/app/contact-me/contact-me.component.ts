import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  moduleId: 'module.id',
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html'
})
export class ContactMeComponent {
    //  private mailgunUrl = 'sandbox8250f0e8beaf48ef9ca0318e4b672279.mailgun.org';
    //  private apiKey = 'key-a2b7f904fa3d820763fdce2208d63873'; // TODO: use env variable to keep this secret

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
       emailjs.send(service_id, template_id, params)
         .then(function(){
            alert("Sent!");
          }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         });
      }

 // public send(form: NgForm) {
 //    console.log(form.value.subject, form.value.message);
 //    const subject = form.value.subject;
 //    const text = form.value.message;
 //    if (subject && text) {
 //      const headers = new Headers(
 //          {
 //           'Content-Type': 'application/x-www-form-urlencoded, charset=UTF-8',
 //           'Authorization': 'Basic ' + btoa('api:' + this.apiKey)
 //          }
 //      );
 //      const options = new RequestOptions({ headers: headers });
 //      const body = 'from=test%40example.com&to=krister.torsvik%40gmail.com&subject=' + subject + '&text=' + text;
 //      this.http.post('https://api.mailgun.net/v3/' + this.mailgunUrl + '/messages', body, options)
 //               .map(result => result.json())
 //               .do(result => console.log('RESULT: ', JSON.stringify(result)))
 //               .subscribe(result => {
 //                 console.log('SENT!');
 //                 alert('Email Successfully Sent!');
 //               }, error => {
 //                 alert('Email couldnt be sent, Internal Error!')
 //                 console.log(error);
 //               });
 //    }
 //  }
}
