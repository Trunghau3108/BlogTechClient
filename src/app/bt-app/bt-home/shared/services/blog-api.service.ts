import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DTOBlog } from '../dto/DTOBlog.dto';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  //server public
  private apiUrl = 'https://blogdev.somee.com/api/Blog/'; 
  //server local
  // private apiUrl = 'http://localhost:5012/'; 

  constructor(private http: HttpClient) { }

  /**
   * hàm call API get user details với token
   * @returns 
   */
  GetAllBlog(): Observable<any> {
    const headers = new HttpHeaders({
      // 'Authorization': `Bearer ${param.accessToken}`, // use the stored token
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl + 'GetAllBlog', { headers: headers });
  }
}

