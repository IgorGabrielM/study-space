import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
  ) { }

  verifyNotShow() {
    if (this.router.routerState.snapshot.url === '/sign-up') {
      return false;
    } else {
      return true;
    }
  }

}
