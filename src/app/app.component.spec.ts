import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SortPipe} from "./toolbar/sort.pipe";
import {SummaryComponent} from "./summary/summary.component";
import {MdButtonModule, MdCardModule, MdGridListModule, MdSelectModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {HttpModule} from "@angular/http";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        SortPipe,
        SummaryComponent
      ],
      imports:[
        MdSelectModule,
        MdButtonModule,
        MdCardModule,
        MdGridListModule,
        FormsModule,
        HttpModule,
      ],
      providers:[
        DataService
      ]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
