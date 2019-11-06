import {Component} from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  templateUrl: 'formly.component.html'
})
export class FormlyComponent  {

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];


  constructor(private http: HttpClient,
              private formlyJsonschema: FormlyJsonschema) {
  }


  loadExample(t) {
    this.http.get<any>(`assets/schema.json`).pipe(
      tap(({ schema, model }) => {
        console.log(schema)
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      })
    ).subscribe();
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}