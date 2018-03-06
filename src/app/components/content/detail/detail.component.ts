import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  toggle() {
    jQuery('.onhover1 ul').slideToggle();
  }
  toggle1() {
    jQuery('.onhover2 ul').slideToggle();
  }
  toggle2() {
    jQuery('.onhover3 ul').slideToggle();
  }
  toggle3() {
    jQuery('.onhover4 ul').slideToggle();
  }

}

jQuery(function () {
  jQuery('.add').on('click', function() {
    const $qty = jQuery(this).closest('p').find('.qty');
    const currentVal = parseInt($qty.val(), 10);
    $qty.val(currentVal + 1);
  });
  jQuery('.minus').on('click', function() {
    const $qty = jQuery(this).closest('p').find('.qty');
    const currentVal = parseInt($qty.val(), 10);
    $qty.val(currentVal - 1);
  });
});
