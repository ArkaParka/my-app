import {Component} from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';


@Component({
  templateUrl: 'input-grid.component.html'
})
export class InputGridComponent {

  form = new FormGroup({});
  model: any = {
    items: [
      {
        investmentName: 'project1',
        investmentDate: '',
        stockIdentifier: 1,
      },
      {
        investmentName: 'project2',
        investmentDate: '2004-06-20',
        stockIdentifier: 2,
      },
      {
        investmentName: 'project3',
        investmentDate: '',
        stockIdentifier: 3,
      },
      {
        investmentName: 'project4',
        investmentDate: '',
        stockIdentifier: 4,
      },
      {
        investmentName: 'project5',
        investmentDate: '',
        stockIdentifier: 5,
      },
      {
        investmentName: 'project6',
        investmentDate: '',
        stockIdentifier: 6,
      }
    ]
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Персональные данные</h5>',
    },
    {
    type: 'datatable',
    key: 'items',
    templateOptions: {
      columns: ['investmentName', 'investmentDate', 'actions'],
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'input',
          key: 'investmentName',
          templateOptions: { label: 'investmentName' },
        },
        {
          type: 'input',
          key: 'stockIdentifier',
          templateOptions: { label: 'stockIdentifier' },
        },
        {
          type: 'input',
          key: 'investmentDate',
          templateOptions: {
            label: 'investmentDate',
            type: 'date',
          }
        }
      ]
    }
  }];



  submit() {
    alert(JSON.stringify(this.model));
  }
}