import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const LOGIN_URL= " http://localhost:3000/users?"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(email : string |null|undefined, password : string |null|undefined) : Observable<any>{
    return this.http.get(LOGIN_URL+'email='+email+"&password="+password)
  }
}
