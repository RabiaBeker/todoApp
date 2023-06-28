import {createComponent, Injectable} from '@angular/core';
import {CreateService} from "./create-user/create.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  checkLocalStorage(): boolean{
    if(localStorage.getItem('token') == null) return false
    return true
  }

}

