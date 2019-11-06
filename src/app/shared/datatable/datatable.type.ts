import {Component, OnInit} from '@angular/core';
import {FieldArrayType, FormlyFormBuilder} from '@ngx-formly/core';


@Component({
  selector: 'app-formly-datatable',
  templateUrl: 'datatable.type.html',
})

export class DatatableType extends FieldArrayType implements OnInit {

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit () {
    console.log(this.formControl.value);

  }


}

