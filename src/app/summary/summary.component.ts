import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent implements OnInit {

  @Input() data:any;
  showMore:boolean;

  constructor() {
    this.data={};
  }

  ngOnInit() {

  }

  doShowMore(){
    this.showMore = !this.showMore;
  }

}
