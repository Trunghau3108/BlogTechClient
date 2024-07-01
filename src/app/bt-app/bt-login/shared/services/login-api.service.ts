import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DTORegister } from '../dto/DTORegister.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private apiUrl = 'https://blogdev.somee.com/'; 

  constructor(private http: HttpClient) { }

  Register(param: DTORegister): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+'register', param, { headers: headers });
  }

  Login(param: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+'login', param, { headers: headers });
  }


}
