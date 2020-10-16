import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  objects: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let objectDetails = this.route.snapshot.data.response.details;
    this.objects = {
      text: this.route.snapshot.data.response.objects.text,
      list: this.route.snapshot.data.response.details.map(detail => {
        return { text: detail.text , description: detail.description };
      })
    };
    objectDetails = objectDetails.map(objectDetail => JSON.stringify(objectDetail));
    localStorage.setItem('objectDetails', JSON.stringify(objectDetails));
    // on details component get the object and show the details and 3d to be rendered in shared draw
  }
}
