import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuarioService, UsuarioCreate } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usuario: UsuarioCreate = {
    nomeCompleto: '',
    idade: 18,
    cpf: '',
    telefone: '',
    endereco: '',
    numero: '',
    cidade: '',
    estado: '',
    email: '',
    senha: ''
  };

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.usuarioService.registrar(this.usuario).subscribe({
        next: (res) => {
          this.mensagemSucesso = 'Usuário registrado com sucesso!';
          this.mensagemErro = '';
          form.resetForm(); 
        },
        error: (err) => {
          this.mensagemErro = err.error?.message || 'Erro ao registrar usuário';
          this.mensagemSucesso = '';
        }
      });
    } else {
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
      this.mensagemSucesso = '';
    }
  }
}
