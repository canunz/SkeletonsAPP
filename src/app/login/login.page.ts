import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  validUsername: string = 'admin';
  validPassword: string = '1234';

  constructor(private router: Router) { }

  onLogin() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      // Redirigir a la página Home
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error si las credenciales no son válidas
      alert('Usuario o contraseña incorrectos');
    }
  }
}
