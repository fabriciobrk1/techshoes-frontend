import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService, UsuarioLogin, UsuarioResponse } from '../../services/usuario.service';

@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule, RouterModule],
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email = '';
senha = '';
mensagemErro = '';
usuarioLogado: UsuarioResponse | null = null;

constructor(
private usuarioService: UsuarioService,
private router: Router
) {}

ngOnInit() {
// Verifica se já existe usuário logado no localStorage
const usuarioSalvo = localStorage.getItem('usuario');
if (usuarioSalvo) {
this.usuarioLogado = JSON.parse(usuarioSalvo);
this.router.navigate(['/home']); // redireciona se já estiver logado
}
}

login() {
const loginData: UsuarioLogin = {
email: this.email,
senha: this.senha
};


this.usuarioService.login(loginData)
  .subscribe({
    next: (res: UsuarioResponse) => {
      console.log('Login bem‑sucedido:', res);

      this.usuarioLogado = res;
      localStorage.setItem('usuario', JSON.stringify(res)); // salva estado
      this.router.navigate(['/home']); // redireciona para página logada
    },
    error: (err) => {
      console.error('Erro no login:', err);
      this.mensagemErro = 'Falha no login. Verifique email e senha.';
    }
  });


}

logout() {
this.usuarioLogado = null;
localStorage.removeItem('usuario'); // limpa estado
this.router.navigate(['/login']); // volta para tela de login
}
}
