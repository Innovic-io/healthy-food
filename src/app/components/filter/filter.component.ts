import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('selectpicker') elementRef: ElementRef;


  constructor() { }

  onSliderChange(data) {
    console.log(data);
  }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
      liveSearch: true
    });
  }
  goToList() {
    jQuery('#list-view').on('click', function() {
      jQuery('.product-grid').attr('class', 'product-layout product-list col-xs-12');
      localStorage.setItem('display', 'list');
    });
    jQuery('#grid-view').on('click', function() {
      jQuery('.product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
      localStorage.setItem('display', 'grid');
    });
  }
}





