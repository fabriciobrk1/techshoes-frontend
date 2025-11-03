import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService, UsuarioLogin, UsuarioResponse } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagemErro = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  login() {
    const loginData: UsuarioLogin = {
      email: this.email,
      senha: this.senha
    };

    this.usuarioService.login(loginData)
      .subscribe({
        next: (res: UsuarioResponse) => {
          console.log('Login bem‑sucedido:', res);
          // Aqui você pode salvar coisas no storage, redirecionar, etc.
          this.router.navigate(['/']);  // ou alguma rota protegida
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.mensagemErro = 'Falha no login. Verifique email e senha.';
        }
      });
  }
}
