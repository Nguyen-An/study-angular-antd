import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Author, authorNull } from '../../constain';
import { TemplateVariavleComponent } from '../template-variavle/template-variavle.component';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrl: './child-detail.component.scss'
})
export class ChildDetailComponent {
  @Input() childMessage: number = 0;
  @Input() templateVariavle!: TemplateVariavleComponent;
  @Input() set childMessageValidator(val: number) {
    this._childMessageValidator = val;
  };
  private _childMessageValidator = 0;
  get childMessageValidator() {
    return this._childMessageValidator;
  }

  @Input() author: Author = authorNull;
  @Output() deleteAuthor = new EventEmitter();
  handleDelete(id: number) {
    this.templateVariavle.updateNumber();
    this.deleteAuthor.emit(id);
  }

  // constructor() {
  //   console.log('constructor: ', this.templateVariavle);
  // }

  // ngOnChanges() {
  //   console.log('ngOnChanges: ', this.templateVariavle);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit: ', this.templateVariavle);
  // }
}
