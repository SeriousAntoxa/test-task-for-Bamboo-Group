import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'https://api.github.com/search/users?q=type:user'

  public dataUsers = []
  public selectUser: any

  constructor(
    private _http: HttpClient
  ) {
  }

  public getUsers(): Observable<any> {
    return this._http.get(this.URL)
      .pipe(
        map((data: any) => data.items)
      )
  }

}
