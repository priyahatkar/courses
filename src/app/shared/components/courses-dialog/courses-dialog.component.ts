import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icourse } from '../../model/courses';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouresService } from '../../services/coures.service';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent implements OnInit {
  public coursesData !: Icourse
  public courseForm !: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) private courseData : Icourse,
              private _matDialogRef : MatDialogRef<CoursesDialogComponent>,
              private _courseService : CouresService) { 
                this.createCourseForm()
                this.coursesData = courseData;
                // console.log(this.coursesData); 
                this.courseForm.patchValue(this.coursesData)
  }
  ngOnInit(): void {
    
  }

  createCourseForm(){
    this.courseForm = new FormGroup({
      description : new FormControl(null,[Validators.required]),
      longDescription : new FormControl(null,[Validators.required]),
      category : new FormControl(null,[Validators.required]),
      releasedAt : new FormControl(null,[Validators.required]),
    })
  }



  onCourseForm(){
    if(this.courseForm.valid){
      let updatedObj = {...this.courseForm.value, id : this.coursesData.id}
      // console.log(updatedObj);
      this._courseService.getUpdatedCourse(updatedObj)
        .subscribe(data =>{
          this._courseService.changeCategory$.next(true)
          // console.log(data);
          this._matDialogRef.close(updatedObj)
        })
    }
  }
}
