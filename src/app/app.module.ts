import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './shared/components/about/about.component';
import { CoursesDialogComponent } from './shared/components/courses-dialog/courses-dialog.component';
import { CourseComponent } from './shared/components/course/course.component';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { HomeComponent } from './shared/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesDialogComponent,
    CourseComponent,
    CourseCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
