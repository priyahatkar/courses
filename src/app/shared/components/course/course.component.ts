import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icourse } from '../../model/courses';
import { CouresService } from '../../services/coures.service';
import { debounceTime, distinctUntilChanged, Observable, startWith, switchMap, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilession } from '../../model/lession';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public courseId !: string;
  public lessionForm !: FormGroup
  public singleObj$ !: Observable<Icourse>
  lession$! :Observable<Ilession[]>;
  constructor(private _route : ActivatedRoute,
              private _courseService : CouresService
  ) { }

  ngOnInit(): void {
    this.createLessionForm()
    this.courseId = this._route.snapshot.params['courseId']
    // console.log(this.courseId);
    this.singleObj$ = this._courseService.getSingleCourseData(this.courseId)

    this.lession$ = this._courseService.getCourseLession(this.courseId);
    this.lession$ = this.lessionForm.get('lession')?.valueChanges
    .pipe(
      startWith(''),
      tap(res =>console.log(res)),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(res => this._courseService.getCourseLession(this.courseId,10,res))
    )as Observable<Ilession[]>
    

  }
  
  createLessionForm(){
    this.lessionForm = new FormGroup({
      lession : new FormControl(null, [Validators.required])
    })
  }
}
