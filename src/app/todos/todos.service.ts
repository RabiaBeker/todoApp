import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClint: HttpClient, private authService: AuthService) {
  }

  takeToDoDataFromTodos(): Observable<Todo[]> {
    return this.httpClint.get<Todo[]>('https://beker-todo-api-c5103dffe916.herokuapp.com/todo')
  }

  sendToDoDataFromTodos(todoCreate: TodoCreate) {
    return this.httpClint.post<Todo>('https://beker-todo-api-c5103dffe916.herokuapp.com/todo', todoCreate)
  }
  deleteToDoItem(id: string): Observable<string>{
     return this.httpClint.delete<string>(`https://beker-todo-api-c5103dffe916.herokuapp.com/todo/${id}`)
  }
  updateToDoItem(status: string, id:string){
    return this.httpClint.put(`https://beker-todo-api-c5103dffe916.herokuapp.com/todo/${id}`, {"status": status})
  }
  // searchToDoItem(data:string):Observable<Todo> {
  //   return this.httpClint.get(`https://beker-todo-api-c5103dffe916.herokuapp.com/todo?content=${data}`)
  // }
}

export interface Todo {
  id: string,
  content: string,
  severity: string,
  status: string,
  createdBy: string
}

export interface TodoCreate {
  content: string,
  severity: string,
  status: string,
}
