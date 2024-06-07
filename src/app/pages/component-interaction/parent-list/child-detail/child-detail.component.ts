import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrl: './child-detail.component.scss'
})
export class ChildDetailComponent {
  @Input() childMessage: number = 0;
  @Input() set childMessageValidator(val: number) {
    this._childMessageValidator = val;
  };
  private _childMessageValidator = 0;
  get childMessageValidator() {
    return this._childMessageValidator;
  }
}
