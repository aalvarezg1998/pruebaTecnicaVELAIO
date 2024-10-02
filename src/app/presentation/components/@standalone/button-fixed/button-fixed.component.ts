import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-fixed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-fixed.component.html',
  styleUrls: ['./button-fixed.component.scss']
})
export class ButtonFixedComponent implements OnInit{
  @Input() index: number = 0;
  @Input() option: 'add' | 'list' | 'home' = 'add';
  @Input() route: string = "";
  showButton: boolean = true;
  constructor(private router: Router){
  }
  ngOnInit(): void {

    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute === '/not-found') {
        this.showButton = false;
      } else {
        this.showButton = true;
      }
    });
  }
  goToRoute() {
    this.router.navigate([this.route]);
  }
}
