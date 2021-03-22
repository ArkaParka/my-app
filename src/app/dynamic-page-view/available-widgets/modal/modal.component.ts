import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {initialState} from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';
import {IFormWidget} from '../../interfaces/IFormWidget';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
  }

  data: IFormWidget;

  ngOnInit(): void {
  }

  get updateData() {
    return this.data;
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  public submit() {
    console.log('modal data', this.updateData);
    this.onSubmit.emit(this.updateData);
    this.bsModalRef.hide();
  }

  public hideModal(): void {
    this.onSubmit.emit(null);
    this.bsModalRef.hide();
  }
}
