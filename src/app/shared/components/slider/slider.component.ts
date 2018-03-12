import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild('slider') slider: ElementRef;

  @Input() set range(data) {
    if (data) {
      const [ min, max ] = data;
      this.initSlider({ min, max, value: [min, max]});
    }
  }
  @Output() sliderChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
    this.initSlider({});
  }

  private initSlider(options) {

    const defaultSettings = { id: 'gc', tooltip: 'always', step: 5 };

    const local = jQuery(this.slider.nativeElement).slider({ ...options, ...defaultSettings });

    local.on('slideStop', (change) => {
      this.sliderChange.next(change.value);
    });
  }
}
