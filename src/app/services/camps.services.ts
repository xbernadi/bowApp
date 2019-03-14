import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class CampsService {

    CampsURL = 'https://elmultiusos.net/json/list_camps.php';
    xURL: string;

    constructor( private http: HttpClient ) { }

    getCamps ( id?: number, actiu?: number) {
      this.xURL = this.CampsURL;

        this.xURL = `${this.CampsURL}?id=${id}&actiu=${actiu}`;
        console.log (this.xURL);

        return this.http.get ( this.xURL ).pipe(
        map( res => {
          return res;
        })
       );
    }
}
