import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variavle',
  templateUrl: './template-variavle.component.html',
  styleUrl: './template-variavle.component.scss'
})
export class TemplateVariavleComponent {
  numberRandom = 0;

  updateNumber() {
    this.numberRandom = Math.floor((Math.random() * 10000));
  }
}
