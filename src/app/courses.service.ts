import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {

  }

  getCourses(): string[] {
    return ['Angular', 'Vue', 'Inglés', 'React', 'Node'];
  }

}
