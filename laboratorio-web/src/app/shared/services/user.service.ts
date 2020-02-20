import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000/users';
  user: User;
  
  constructor(private http: HttpClient) {}
  
  createUser(user) {
    return this.http.post<any>(this.baseUrl, user).pipe(
      map( usr => {
        console.log(usr);
        localStorage.setItem('currentUser', JSON.stringify(usr));
        this.user = usr}
        )
    );
  }

  loginUser(user) {
    return this.http.post<any>(this.baseUrl + '/login', user).pipe(
      map( usr => {
        console.log(usr);
        localStorage.setItem('currentUser', JSON.stringify(usr));
        this.user = usr}
        )
    );
  }

  logoutUser() {
    return this.http.post<any>(this.baseUrl + '/logout', {});
  }
  
  getLoginStatus():boolean {
    return !!this.user;
  }
}
