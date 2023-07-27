import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ width: '0px', minWidth: '0' })),
      state('expanded', style({ width: '100%' })),
      transition('expanded <=> collapsed', animate('300ms ease-out')),
    ]),
  ],
})
export class SplashScreenPage implements OnInit {
  isExpanded = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isExpanded = true;
    }, 2500);
  }
}
