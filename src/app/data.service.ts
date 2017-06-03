import {Injectable} from '@angular/core';
import {Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  fetchJson() {
    return this.http.get("https://s3-eu-west-1.amazonaws.com/crowdsurfer-json-dumps/blockchain-projects.json")
      .map(
        (res:Response)=> {
         const data =  res.json();
         return data;
        })
  }

}
