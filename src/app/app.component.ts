import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Limpiapp';
  proyectName = 'Limpiapp';

  constructor(private http: HttpClient) {
    http.get('').pipe(map(response => response));
  }
}
