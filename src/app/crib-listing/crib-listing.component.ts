import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(private http: Http) { }

  ngOnInit() {
    // HTTP Request
    this.http.get('data/cribs.json')
      .pipe(map(res => res.json()))
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
        
      )
  }

}
