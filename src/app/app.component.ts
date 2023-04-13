import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deezer-angular';
  public searchValue = '';

  constructor(private router: Router) {}

  async onEnter() {
    try {
      this.router.navigate(['/artists', { search: this.searchValue }]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
