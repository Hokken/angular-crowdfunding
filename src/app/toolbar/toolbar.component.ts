import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() selectedChange:EventEmitter<any> = new EventEmitter();
  @Output() toggleRaisedChange:EventEmitter<any> = new EventEmitter();
  @Output() toggleEndTimeChange:EventEmitter<any> = new EventEmitter()

  items:Array<any>;
  selectedValue:string;
  raised:boolean;
  endTime:boolean;

  constructor() {

    this.items = [
      {value:"all", name:"All"},
      {value:"R", name:"Rewards"},
      {value:"E", name:"Equity"}
      ];

    this.selectedValue = "all";
    this.raised = true;
    this.endTime = null;

  }

  doSelectChange(){
    this.selectedChange.emit(this.selectedValue);
  }

  toggleRaised(){
    this.raised = !this.raised;
    this.endTime = null;
    this.toggleRaisedChange.emit(this.raised);
  }

  toggleEndTime(){
    this.endTime = !this.endTime
    this.raised = null;
    this.toggleEndTimeChange.emit(this.endTime);
  }

  ngOnInit() {

  }

}
