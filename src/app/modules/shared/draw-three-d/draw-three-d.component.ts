import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-three-d',
  templateUrl: './draw-three-d.component.html',
  styleUrls: ['./draw-three-d.component.scss']
})

export class DrawThreeDComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {

  }

}
