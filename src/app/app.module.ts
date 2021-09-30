/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './careers/careers.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component'




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    BlogsComponent,
    AboutusComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

