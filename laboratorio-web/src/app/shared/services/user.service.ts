import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = false;
  constructor() { }
  getLoginStatus():boolean {
    return this.isLoggedIn;
  }
  setLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }
}
