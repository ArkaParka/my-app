import {IFormWidget} from '../../interfaces/IFormWidget';
import {Component, Inject, EventEmitter, Output} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IFormWidget) {
  }

  get updateData() {
    return this.data;
  }

  public submit() {
    console.log('modal data', this.updateData);
    this.dialogRef.close(this.updateData);
  }

  public hideModal(): void {
    this.dialogRef.close(null);
  }
}
