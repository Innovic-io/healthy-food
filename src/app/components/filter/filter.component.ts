import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('selectpicker') elementRef: ElementRef;


  constructor() { }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
      liveSearch: true
    });
} }

