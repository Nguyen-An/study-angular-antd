import { Component, ElementRef, ViewChild } from '@angular/core';
import { Author, authors } from '../constain';
import { TemplateVariavleComponent } from './template-variavle/template-variavle.component';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrl: './parent-list.component.scss'
})
export class ParentListComponent {
  @ViewChild('templateVariavle') templateVariavle!: ElementRef<TemplateVariavleComponent>;
  parentMessage: number = 100;
  parentMessageValidator: number = 200;

  authors: Author[] = authors;

  handleDelete(id: number) {
    this.authors = this.authors.filter( item => item.id != id)
  }
}
