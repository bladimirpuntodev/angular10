import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['courses.component.css']
})
export class CoursesComponent {
  cp = 5;
  urlImg = 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  title = 'Property binding';
  courses: string[];

  isActive = false;

  email = 'email@email.com';
  course = {
    title: 'Hola',
    students: 8000,
    rating: 5.678,
    price: 349.99,
    releaseDate: new Date(2020, 8, 9)
  }

  text = 'El valor es más de cincuenta caracteres lorem ipsum123123132132123';

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  onKeyup(event): void {


    console.log(this.email);

    // const value = event.target.value;
    // console.log(value);

    // if (event.keyCode === 13) {
    //   console.log('onkeyup');
    // }

  }

  // onClick(event): void {
  //   event.stopPropagation();
  //   console.log('Button was clicked!', event);
  // }

  // onDivClicked(): void {
  //   console.log('On div');
  // }

}
