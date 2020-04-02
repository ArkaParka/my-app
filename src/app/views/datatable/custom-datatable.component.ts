import {Component, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {ModalDirective} from "ngx-bootstrap";


@Component({
  templateUrl: 'custom-datatable.component.html'
})
export class CustomDatatableComponent {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  gridApi;
  form = new FormGroup({});
  model: any = {};
  colors = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    }
  };

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Персональные данные</h5>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Имя',
            required: true
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'progress',
          templateOptions: {
            label: 'Прогресс',
            required: true
          },
        },
        {
          className: 'col-12',
          type: 'select',
          key: 'color',
          templateOptions: {
            label: 'Цвет',
            options: this.colors.map(item => {
              return {label: item, value: item};
            }),
          }
        },
      ],
    }
  ];

  columnDefs = [
    {headerName: 'id', field: 'id' , resizable: true, sortable: true},
    {headerName: 'Имя', field: 'name', resizable: true, sortable: true, filter: 'agTextColumnFilter'},
    {headerName: 'Прогресс', field: 'progress', resizable: true, sortable: true},
    // {headerName: 'Цвет', field: 'color', resizable: true, sortable: true}
  ];

  rowData = [];

  constructor() {
    // Create 100 users
    for (let i = 1; i <= 100; i++) { this.rowData.push(createNewUser(i)); }

  }


  editForm(selectRow) {
    this.model = selectRow;
    this.largeModal.show();
  }

  hideForm() {
    this.largeModal.hide();
  }

  save() {
    this.rowData.forEach((item) => {
      if (this.model.id === item.id) {
        return this.model;
      }
    })
    this.gridApi.refreshView()
    this.largeModal.hide();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.sizeToFit();
  }

  onRowClick(event) {
    console.log(event.data)
    this.editForm(event.data);
  }



  submit() {
    alert(JSON.stringify(this.model));
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}