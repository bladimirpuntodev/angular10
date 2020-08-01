import { Injectable } from '@angular/core';

@Injectable()
export class ProfesService {

  constructor() { }

  profesList(): string[] {
    return ['x', 'y', 'z'];
  }
}
