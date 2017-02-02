import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";

@Component({
  moduleId: 'module.id',
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html'
})
export class ContactMeComponent {
     private mailgunUrl: string = "sandbox8250f0e8beaf48ef9ca0318e4b672279.mailgun.org";
     private apiKey: string = "key-a2b7f904fa3d820763fdce2208d63873";  //TODO: use env variable to keep this secret

     public constructor(private http: Http) {
     }

 public send(form: NgForm) {
    console.log(form.value.subject, form.value.message);
    let subject = form.value.subject;
    let text = form.value.message;
    if(subject && text) {
      let headers = new Headers(
          {
           "Content-Type": "application/x-www-form-urlencoded",
           "Authorization": "Basic " + btoa("api:" + this.apiKey)  
          }
      );
      let options = new RequestOptions({ headers: headers });
      let body = "from=test%40example.com&to=krister.torsvik%40gmail.com&subject=" + subject + "&text=" + text;
      this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, options)
               .map(result => result.json())
               .do(result => console.log("RESULT: ", JSON.stringify(result)))
               .subscribe(result => {
                 console.log("SENT!");
                 alert("Email Successfully Sent!")
               }, error => {
                 console.log(error);
               });
    }
  }

}
