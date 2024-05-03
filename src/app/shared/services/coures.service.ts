import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourse, IcourseRes } from '../model/courses';
import { Ilession, IlessonsRes } from '../model/lession';

@Injectable({
  providedIn: 'root'
})
export class CouresService {
  public coursesUrl  = `${environment.baseUrl}/courses`;
  changeCategory$ : Subject<boolean>= new Subject<boolean>();
  constructor(private _http : HttpClient) { }

  allCourses(): Observable<Icourse[]>{
    return this._http.get<IcourseRes>(this.coursesUrl)
    .pipe(
      // tap(res =>console.log(res)),
      map(res =>{
        return res['payload']
      }),
      shareReplay()
    )
  }

  getSingleCourseData(id : string): Observable<Icourse>{
    let singleUrl = `${this.coursesUrl}/${id}`;
    return this._http.get<Icourse>(singleUrl)
  }

  getUpdatedCourse(course : Icourse):Observable<Icourse>{
    let updatedUrl = `${this.coursesUrl}/${course.id}`;
    return this._http.put<Icourse>(updatedUrl,course)
  }
  
  getCourseLession(courseId : string, pageSize : number = 10, filter =''): Observable<Ilession[]>{
    let lessionUrl = `${environment.baseUrl}/lessons`;
    let params = new HttpParams()
      .set('courseId',courseId)
      .set('pageSize', pageSize)
      .set('filter', filter)
    return this._http.get<IlessonsRes>(lessionUrl,{
      params : params
    })
    .pipe(
      map(res =>{
        console.log(res);
        return res['payload']
      })
    )
  }
}
