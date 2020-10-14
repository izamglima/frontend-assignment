import { Component, OnInit } from '@angular/core';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  objects;
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
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getObjects().subscribe((response: any) => {
      this.objects = response;
      console.log(this.objects);
    });
  }

}
