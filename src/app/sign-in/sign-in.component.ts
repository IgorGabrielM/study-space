import { Component, OnInit } from '@angular/core';
import { AuthModel, AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: AuthModel

  constructor(
    private authService: AuthService,
    private router: Router,

    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = new AuthModel()
  }

  onSubmit() {
    this.authService.auth(this.user)
      .then((res) => {
        localStorage.setItem('userToken', res.access_token);
        this.router.navigate(['../home']);
      })
      .catch(() => {
        this.showErrorMessage()
      });
  }

  showErrorMessage() {
    this.snackBar.open("Acesso negado, verifique os dados.", 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }

}
