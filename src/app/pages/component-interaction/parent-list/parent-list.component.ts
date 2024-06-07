import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrl: './parent-list.component.scss'
})
export class ParentListComponent {
  parentMessage: number = 100;
  parentMessageValidator: number = 200
}
