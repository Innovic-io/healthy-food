import { Component, OnInit } from '@angular/core';
import { mockProducts } from '../../../services/product.mock';
import { ProductSortingClass } from '../../filter/product.sorting.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products = mockProducts;
  view = 'grid';

  ngOnInit() {}

  filterData(range) {

    const [ min, max ] = range;

    this.products = mockProducts.filter((item) => {
      return Math.round(item.price) >= min && Math.round(item.price) <= max;
    });
  }

  switchView(view) {
    this.view = view;
  }

  sorting(type) {
    switch (type) {
      case 'l-h':
        this.products = this.products.sort(this.sortPriceByAscending);
        break;
      case 'h-l':
        this.products = this.products.sort(ProductSortingClass.sortPriceByDescending);
        break;
        /*
      case 'a-z':
        this.products = this.products.sort((a, b) => a.name > b.name);
        break;
      case 'z-a':
        this.products = this.products.sort((a, b) => a.name < b.name);
        break;
        */
    }
  }

  sortByCategory(selected) {
    this.products = this.isReset(selected) ? mockProducts : mockProducts.filter(item => item.category === selected);
  }

  isReset(state) {
    return state === 'reset';
  }

  private sortPriceByAscending(a, b) {

    if (a.price > b.price) {
      return 1;
    } else {
      return -1;
    }

  }
}
