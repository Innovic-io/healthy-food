import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// @TODO create component for starts above product

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  quantity = 1;
  productID;
  imageSrc = [
    '/assets/images/product/1.png',
    '/assets/images/product/2.png',
    '/assets/images/product/3.png',
    '/assets/images/product/4.png'
  ];
  src = this.imageSrc[0];

  ourProducts = [
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
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    setTimeout(() => {
      this.productID = this.activatedRoute.snapshot.params;
    }, 1000);
  }

  onIncrement() {
    this.quantity += 1;
  }

  onDecrement() {
    this.quantity -= 1;
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  imageRotator(src) {
    this.src = src;
  }

  toggle(data) {
    jQuery(data).slideToggle();
  }

}

