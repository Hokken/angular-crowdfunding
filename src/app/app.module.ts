import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SummaryComponent } from './summary/summary.component';
import { DataService } from "./data.service";

import {MdSelectModule, MdButtonModule, MdCardModule, MdGridListModule } from '@angular/material';

import { SortPipe } from './toolbar/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SummaryComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSelectModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
