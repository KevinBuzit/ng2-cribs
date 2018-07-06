import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json')
      .pipe(map(res => res.json()))
  }

  addCrib(data){
    data.image = 'default-crib';
    this.newCribSubject.next(data)
  }
}
