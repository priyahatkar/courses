import { Component, OnInit } from '@angular/core';
import { CouresService } from './shared/services/coures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'course';
  public coursesArray !: Array<any>

  constructor(private _courseService : CouresService){}
  ngOnInit(): void {}
}