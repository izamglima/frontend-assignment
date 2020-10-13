import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss']
})
export class ListInformationComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit(): void {
    console.log(this.info);
  }

}
