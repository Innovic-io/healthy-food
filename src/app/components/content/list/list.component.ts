import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../services/product.inteface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  products: IProduct[] = [
    {
      image: '/assets/images/product/1.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/2.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/3.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/4.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/5.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/6.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/7.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/8.png',
      name: 'Organic Tomato',
      price: '$30.00'
    },
    {
      image: '/assets/images/product/1.png',
      name: 'Organic Tomato',
      price: '$30.00'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }






}
