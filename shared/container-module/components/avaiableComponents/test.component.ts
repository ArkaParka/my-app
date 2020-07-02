import { Component, Input } from '@angular/core';
import { TestService } from './test.servise';

@Component({
  template: `<h3>Hello {{ name }}!</h3>`,
})
export class TestComponent  {
  name;
  constructor(private testService: TestService) {
    this.testService.hello().subscribe(data => {
      this.name = data;
    });
  }
}