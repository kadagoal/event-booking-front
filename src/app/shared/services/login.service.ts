import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = '';

  constructor(private router:Router) { }

  login(email: string, password: string) {}

}
