import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private http: HttpClient) {}

  githubData() {
    return new Promise( res => {
        this.http.get(Urls.githubURL)
        .subscribe( response => {
            res(response);
        });
    });
  }

  githubRepos() {
    return new Promise( res => {
      this.http.get(Urls.githubURL + '/subscriptions')
      .subscribe( response => {
          res(response);
      });
  });
  }
}
