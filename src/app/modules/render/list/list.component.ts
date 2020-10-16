import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  objects: any;

  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit(): void {
    this.objects = {
      text: this.route.snapshot.data.response.objects.text,
      list: this.route.snapshot.data.response.details.map(detail => {
        return { text: detail.text , description: detail.description };
      })
    };

    // put the whole object in local storage
    // on details component get the object and show the details and 3d to be rendered in shared draw
  }
}
