import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DTOUser } from '../dto/DTOUser.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  //server public
  private apiUrl = 'https://blogdev.somee.com/'; 
  //server local
  // private apiUrl = 'http://localhost:5012/'; 

  constructor(private http: HttpClient) { }


  /**
   * Hàm call API tạo mới user
   * @param param : DTOUser
   * @returns 
   */
  Register(param: DTOUser): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+'register', param, { headers: headers });
  }

  /**
   * hàm call API đăng nhập get token
   * @param param  DTOUser
   * @returns 
   */
  Login(param: DTOUser): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+'login', param, { headers: headers });
  }

  /**
   * hàm call API get user details với token
   * @returns 
   */
  GetUserDetails(param:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${param.accessToken}`, // use the stored token
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl + 'manage/info', { headers: headers });
  }


}
