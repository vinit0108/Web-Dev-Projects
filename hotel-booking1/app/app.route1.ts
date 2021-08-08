import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
import { AppComponent1 } from './app.exec';
import { AppComponent2 } from './app.suite';
import { AppComponent3 } from './app.standard';
const routes:Routes = [
	{ path: 'exec', component:AppComponent1  },
	{ path: 'suite', component:AppComponent2  },
	{ path: 'standard', component:AppComponent3  },
	
];



export const appRouterModule = RouterModule.forRoot(routes);
