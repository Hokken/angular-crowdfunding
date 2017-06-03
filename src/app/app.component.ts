import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "./data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  summaries: Array<any>;
  selectedValue: string;
  raised: boolean;
  endTime: boolean;

  constructor(private dataService: DataService) {
    this.selectedValue = "all";
    this.raised = true;
    this.endTime = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.fetchJson().subscribe(
      (data: Array<object>) => {
        this.summaries = data;
      }
    );
  }


  setSelected(evt) {
    this.selectedValue = evt;
  }

  setRaisedChange(evt) {
    this.raised = evt;
    this.endTime = null;
  }

  setEndTimeChange(evt) {
    this.endTime = evt;
    this.raised = null;
  }


}
