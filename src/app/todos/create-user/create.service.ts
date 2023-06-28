import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Login} from "../login-page/login-service.service";

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  //@ts-ignore
  public token: string;
  constructor( private http: HttpClient) { }

  newRegisterRequest(data: Login):Observable<ResultFromLogin> {
    return this.http.post<ResultFromLogin>('https://beker-todo-api-c5103dffe916.herokuapp.com/auth/signup', data)
  }
}
export class ResultFromLogin{
  'expiresIn': number
  'token': string
  'user': string
}
