import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  test = [{
    name: 'Circle',
    description: 'Rounded line'
  },
  {
    name: 'Circle2',
    description: 'Rounded line'
  },
  {
    name: 'Circle3',
    description: 'Rounded line'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
