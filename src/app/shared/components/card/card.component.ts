import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../services/product.inteface';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() products: IProduct[];


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToCard(id) {
    this.router.navigate([`shop/${id}`]);
  }

  toggle(data) {
    jQuery(data).slideToggle();
  }

}
