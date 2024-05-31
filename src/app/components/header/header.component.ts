import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel
  routeNow: string

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.onRouteChange(event.url);
    });
  }

  onRouteChange(url: string) {
    if (url === '/sign-in' || url === '/sign-up') {
    } else {
      this.getImage()
    }
  }

  getImage() {
    const userId = localStorage.getItem('userId');
    this.authService.find(userId).then((usr) => {
      this.user = usr;
    })
  }

  verifyNotShow() {
    this.routeNow = this.router.routerState.snapshot.url;
    if (this.router.routerState.snapshot.url === '/sign-in' || this.router.routerState.snapshot.url === '/sign-up') {
      return false;
    } else {
      return true;
    }
  }

}
