import { Component } from '@angular/core';
import { AddressLike } from '../../../../common/pipe/currency-format.pipe';

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

  now = new Date();
  user = {
    name: 'John',
    age: 34,
    address: 'New York No. 1 Lake Park'
  }

  address: AddressLike = {
    address1: 'Số 18',
    address2: 'Ngõ 72',
    city: 'Hoa Bằng',
    state: 'Yên Hòa',
    zip: 'Cầu Giấy',
    country: 'Hà Nội',
  }

}
