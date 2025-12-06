import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated() {
throw new Error('Method not implemented.');
}
  private token = 'auth_token';
  constructor(private http: HttpClient) { }
  login(loginRequest:LoginRequest): Observable<LoginResponse> {
    // Implement login logic here
   return  this.http.post<LoginResponse>(environment.apiUrl + "api/Admin",loginRequest)
   .pipe(tap(response =>{
      if(response.success){
        localStorage.setItem(this.token, response.token);
      }
    }
   ));
  }

  logout(): void {
    localStorage.removeItem(this.token);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem(this.token) !== null;
  }

  
}
