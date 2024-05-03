import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../model/courses';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CoursesDialogComponent } from '../courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() getSingleData !: Icourse
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
    // console.log(this.getSingleData);
    
  }
  onCourseEdit(){
    const dialogConf = new MatDialogConfig()
    dialogConf.disableClose = false;
    dialogConf.autoFocus = true;
    dialogConf.width = '500px';
    dialogConf.data = this.getSingleData;
    const dialogRef = this._matDialog.open(CoursesDialogComponent, dialogConf)
    dialogRef.afterClosed()
      .subscribe(data =>{
        console.log('updated data', data);
        this.getSingleData = data
      })
  }

}
