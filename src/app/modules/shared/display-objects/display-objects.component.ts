import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-objects',
  templateUrl: './display-objects.component.html',
  styleUrls: ['./display-objects.component.scss']
})
export class DisplayObjectsComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit(): void {
    console.log(this.info);
  }

}
