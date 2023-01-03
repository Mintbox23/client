import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {
  }

  public find(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
  
  
  
}
