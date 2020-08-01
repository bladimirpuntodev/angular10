import { Component } from '@angular/core';
import { ProfesService } from './profes.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  lista: string[];

  constructor(private profesService: ProfesService) {
    this.lista = profesService.profesList();
  }
}
