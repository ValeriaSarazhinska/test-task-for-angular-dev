import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  constructor() {}

  ngOnInit(): void {}
}
