import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-template',
  templateUrl: './directive-template.component.html',
  styleUrl: './directive-template.component.scss'
})
export class DirectiveTemplateComponent {
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
}
