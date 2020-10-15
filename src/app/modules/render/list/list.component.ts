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
  }
}
