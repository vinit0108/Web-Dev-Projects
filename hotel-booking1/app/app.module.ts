import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppComponent1 } from './app.exec';
import { appRouterModule } from "./app.route1";
import { AppComponent2 } from './app.suite';
import { AppComponent3 } from './app.standard';
import { AppDates } from './app.dates';

@NgModule({
  declarations: [
    AppComponent,AppComponent1,AppComponent2,AppComponent3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [AppDates],
  bootstrap: [AppComponent]
})
export class AppModule { }
