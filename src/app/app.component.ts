import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_child_to_parrent';

data = ' ' ;
  update(item:string){
    //debugger
   this.data = item;
    console.log(item);

  }
}
