import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

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
  toggle4() {
    jQuery('.onhover5 ul').slideToggle();
  }
  toggle5() {
    jQuery('.onhover6 ul').slideToggle();
  }
  toggle6() {
    jQuery('.onhover7 ul').slideToggle();
  }
  toggle7() {
    jQuery('.onhover8 ul').slideToggle();
  }
  toggle8() {
    jQuery('.onhover9 ul').slideToggle();
  }

  goToCard(id) {
    this.router.navigate([`shop/${id}`]);
  }

}
