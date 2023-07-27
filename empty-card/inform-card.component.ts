import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inform-card',
  templateUrl: './inform-card.component.html',
  styleUrls: ['./inform-card.component.scss'],
})
export class InformCardComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
