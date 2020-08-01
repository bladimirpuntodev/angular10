import { Component, OnInit } from '@angular/core';
import { sumar } from './operations';
import { CourseService } from '../course.service';
import { ProfesService } from '../profes.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [ProfesService]
})
export class CourseComponent implements OnInit {

  total: number;
  courses: string[];

  constructor(public courseService: CourseService) {
    // this.courses = courseService.coursesList();
  }

  ngOnInit(): void {
    this.courses = this.courseService.coursesList();
    this.total = sumar(1, 2);
    // this.total = this.sumarAsMethod(1, 2);
  }

  // sumarAsMethod(num1, num2): number {
  //   return num1 + num2;
  // }


}
