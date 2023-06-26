import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  events:Event[] = [];
  target ="";
  takeValueFromInput(data:any){
    this.events.push(data.name)
    console.log(this.events)
    console.log(data)
    data.value = '';
  }
  deleteItemFromList(e:any){
    this.target = e.target.parentElement.parentElement
    console.log(this.target)
    
  }
  deleteAllItem(){
    console.log("rabia")
  }
}

export class Event {
  'name': string;
}
