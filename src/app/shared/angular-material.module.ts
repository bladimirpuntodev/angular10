import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
