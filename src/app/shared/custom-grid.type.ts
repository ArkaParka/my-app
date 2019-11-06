import {Component, OnInit, ViewChild} from '@angular/core';
import {FieldArrayType, FormlyFormBuilder} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import clone from 'lodash.clonedeep';
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'formly-field-datatable',
  templateUrl: 'custom-grid.type.html',
})

export class CustomGridTypeComponent extends FieldArrayType implements OnInit {
  @ViewChild('largeModal', {static: false}) public largeModal: ModalDirective;
  singleForm = new FormGroup({});
  singleField = [];
  ops: any = {};
  mdl = {};
  index = -1;
  showForm = false;


  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit() {
    this.singleField = clone(this.field.fieldArray.fieldGroup);
  }


  save(model) {
    this.formControl.at(this.index).patchValue(model);
    this.hideForm();
  }
  editForm(index) {
    this.index = index;
    this.mdl = clone(this.model[index]);
    this.largeModal.show();
  }

  hideForm() {
    this.showForm = false;
    this.ops.resetModel();
    this.index = -1;
    this.largeModal.hide();
  }


}

