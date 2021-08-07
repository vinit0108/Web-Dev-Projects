import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppDates {
  title = 'KLETU';
  dates:String[];
  i:number;

  constructor()
  {
      this.i=0;
  }
  addDate(d:String)
  {
    this.dates[this.i]=d;
    this.i++;
  }
  search(d:String)
  {
      for(let dt in this.dates)
      {
          if(d==dt)
          {
              return 1;
          }
      }
      return 0;
  }
}