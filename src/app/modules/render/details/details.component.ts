import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  object;
  objectList;
  objectDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let retrievedData;

    this.object = this.route.snapshot.params.name;

    retrievedData = localStorage.getItem('objectDetails');
    this.objectList = JSON.parse(retrievedData).map(objectDetail => JSON.parse(objectDetail));

    this.objectDetails = this.objectList.find(test => test.text = this.object);
    console.log(this.objectDetails);
  }

}
