import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultFromLogin} from "../create-user/create.service";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient){}

  login(data: Login):Observable<ResultFromLogin>{
  return this.http.post<any>('https://beker-todo-api-c5103dffe916.herokuapp.com/auth/signup', data)
  }
}

export class Login{
  'email': string
  'password': string
}
