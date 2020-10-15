import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Objects } from './../../../interfaces/objects.interface';
import { Observable } from 'rxjs';
import { ObjectDetails } from 'src/app/interfaces/object.details.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  objects: Observable<Objects>;
  objectDetails: ObjectDetails;

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.objects = this.route.snapshot.data.objects;
    //console.log(this.objects);

  }

}
