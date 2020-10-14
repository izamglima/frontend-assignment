import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-models',
  templateUrl: './display-models.component.html',
  styleUrls: ['./display-models.component.scss']
})
export class DisplayModelsComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit(): void {
    console.log(this.info);
  }

}
