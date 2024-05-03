import { Component, OnInit } from '@angular/core';
import { Icourse } from '../../model/courses';
import { CouresService } from '../../services/coures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public coursesArr !: Array<Icourse>;
  public begineerCourseArr!:Icourse[];
  public advancedCourseArr!:Icourse[];
  constructor(private _courseService : CouresService) { }

  ngOnInit(): void {
    this.getAllCourses()
    this._courseService.changeCategory$
      .subscribe(res =>{
        if(res){
          this.getAllCourses()
        }
      })
  }

  getAllCourses(){
    this._courseService.allCourses()
      .subscribe(res =>{
        // console.log(res);
        
        this.begineerCourseArr = res.filter(co => co.category === "BEGINNER")
        // console.log(this.begineerCourseArr);
        
        this.advancedCourseArr = res.filter(co => co.category === "ADVANCED")
      })
  }
}
