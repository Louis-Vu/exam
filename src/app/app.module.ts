import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ExamComponent} from "./exam/exam.component";
import {FavoritesComponent} from "./exam/favorite/favorite.component";
import {JohnComponent} from "./exam/john/john.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: 'favorites',component:ExamComponent},
]
@NgModule({
  declarations: [
    AppComponent,ExamComponent,FavoritesComponent,JohnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
