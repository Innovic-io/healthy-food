import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {

  @Input() view: 'list' | 'grid';

  @ViewChild('selectpicker') elementRef: ElementRef;
  @Output('sliderChange') sliderChange = new EventEmitter<number[]>();
  @Output('switchView') switchView = new EventEmitter<'list' | 'grid'>();
  @Output() onSortType = new EventEmitter<string>();
  @Output() onSortByCategory = new EventEmitter<string>();

  constructor() {
  }

  onSliderChange(data) {
    this.sliderChange.next(data);
  }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
      liveSearch: true
    });
  }

  switchToList() {
    this.switchView.next('list');
  }

  switchToGrid() {
    this.switchView.next('grid');
  }
  sorting(ev) {
    this.onSortType.next(ev.target.value);
  }
  sortByCategory(ev) {
    this.onSortByCategory.next(ev.target.value);
  }
}



