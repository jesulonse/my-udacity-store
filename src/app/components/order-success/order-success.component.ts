import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    const data = this.location.getState() as { from: string };

    !data['from'] && this.router.navigate(['/'], { replaceUrl: true });
  }

}
