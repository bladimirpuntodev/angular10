import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './app-dialogs/dialog-example/dialog-example.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10';

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];;

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      console.log(`Dialog result: ${result}`);
      localStorage.setItem('main-word', result);
    });
  }

  getValue(): void {
    const text = localStorage.getItem('main-word');
    console.log(text, 'I am the value from localstorage');
  }

}
