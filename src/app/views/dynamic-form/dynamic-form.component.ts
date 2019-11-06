import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: 'dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  jsonFormSchema;
  jsonFormObject;
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password",
        "buttons": [{
          "id": "reset",
          "label": "Reset"
        }]
      },
      "rememberMe": {
        "type": "boolean",
        "default": true,
        "description": "Remember me"
      }
    },
    "required": ["email", "password", "rememberMe"],
    "buttons": [{
      "id": "alert", // the id of the action callback
      "label": "Alert !" // the text inside the button
    }]
  }


  myModel = {email :"john.doe@example.com"};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadSelectedExample();
  }
  loadSelectedExample(
  ) {
    const exampleURL = `assets/shema.json`;
    this.http
      .get(exampleURL, { responseType: 'text' })
      .subscribe(schema => {
        this.jsonFormSchema = schema;
        this.generateForm(this.jsonFormSchema);
      });
  }


  generateForm(newFormString: string) {
    if (!newFormString) { return; }
    this.jsonFormObject = JSON.parse(newFormString);
  }
}