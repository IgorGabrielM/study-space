import {Component, HostListener, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: UserModel

  interests: InterestModel[] = [];
  filteredInterests: InterestModel[] = [];

  searchText: string = '';

  particles: any[] = [];
  particleCount = 100;

  constructor(
    private authService: AuthService,
    private interestService: InterestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new UserModel
    this.user.gender = '1'
    this.user.interests = []
    this.loadInterests();

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
      });
    }
    this.animateParticles();
  }

  loadInterests() {
    this.interestService.list().then((res) => {
      this.interests = res
      this.filteredInterests = res
    });
  }

  animateParticles() {
    this.particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
    });
    requestAnimationFrame(() => this.animateParticles());
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.particles.forEach(p => {
      const dx = p.x - event.clientX;
      const dy = p.y - event.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        p.dx += dx * 0.01;
        p.dy += dy * 0.01;
      }
    });
  }

  search() {
    if (this.searchText.trim() === '') {
      this.filteredInterests = this.interests;
    } else {
      this.filteredInterests = this.interests.filter(interest =>
        interest.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  setInterest(event: any) {
    const interestId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      this.user.interests.push(interestId);
    } else {
      const index = this.user.interests.indexOf(interestId);
      if (index !== -1) {
        this.user.interests.splice(index, 1);
      }
    }
  }

  handleImageUrl(url: string) {
    this.user.imageUrl = url;
  }

  verifyCheck(id: number): boolean {
    return this.user.interests.find((interest) => interest === id) ? true : false;
  }

  onSubmit() {
    this.authService.createUser({
      ...this.user,
      idRole: 0,
      createdAt: new Date(),
      interests: [
        0
      ],
      posts: []
    }).then((res) => {
      this.router.navigate(['../sign-in'])
    })
  }

}
