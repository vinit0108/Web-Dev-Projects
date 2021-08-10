import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.suite.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent2 {
  
  name:String;
  id:number;
  adults:number;
  children:number;
  days:number;
  checkIn:String;
  age:number;

  dates:String[]=[];
  i=0;
  
  ad_cost:number;
  ch_cost:number;
  price:number;


  ans:string;
  constructor()
  {
      this.ad_cost = 1000;
      this.ch_cost = 700;
      this.adults = 0;
      this.children = 0;
      this.price = 0;
      this.days = 1;
  }

  compute()
  {
      this.price = this.days*((this.adults*this.ad_cost) + (this.children*this.ch_cost));
      return 1;
  }

  book()
  {
      
      if(this.name==null)
      {
          alert("Please Enter Your Name!!!");
      }
      else if(this.id==null)
      {
          alert("Please Enter Aadhaar Number!!!")
      }
      else if(this.adults<=0)
      {
          alert("Please Enter Valid Number of Adults!!!");
      }
      else if(this.checkIn==null)
      {
          alert("Please Select Check-in Date!!!");
      }
      else if(this.checkDate(this.checkIn)==1)
      {
          alert("Already Booked");
      }
      else
      {
          alert("Booking Successful\n"+"Name: "+this.name+"\nNo. of Adults: "+this.adults+
                "\nNo. of children: "+this.children+"\nCheck In: "+this.checkIn+
                "\nRent for "+this.days+" Days: Rs. "+this.price);
      }
  }
  checkDate(d:String)
  {
    
    for(var j=0;j<this.i;j++)
    {
        if(this.dates[j]==d)
            return 1
    }
    return 0;
  }
}