import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioResponse } from '../../services/usuario.service'; // importa a interface

interface Produto {
id: number;
nome: string;
preco: number;
imagem: string;
}

@Component({
selector: 'app-home',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
produtos: Produto[] = [
{ id: 1, nome: 'Tênis XYZ', preco: 299.90, imagem: 'assets/imagens/1728490702-2-Akq43FIeJo.webp' },
{ id: 2, nome: 'Boné Black', preco: 79.90, imagem: 'assets/imagens/bone-preto.jpg' },
{ id: 3, nome: 'Jaqueta Street', preco: 199.90, imagem: 'assets/imagens/jaqueta-street.webp' },
{ id: 4, nome: 'Camiseta DryFit', preco: 89.90, imagem: 'assets/imagens/camiseta-dry.webp' }
];

usuarioLogado: UsuarioResponse | null = null; 

constructor(private router: Router) {}

ngOnInit(): void {

const usuarioSalvo = localStorage.getItem('usuario');
if (usuarioSalvo) {
this.usuarioLogado = JSON.parse(usuarioSalvo);
}
}

irParaLogin() {
this.router.navigate(['/login']);
}

logout() {
localStorage.removeItem('usuario');
this.usuarioLogado = null;
this.router.navigate(['/login']);
}

irParaHome() {
this.router.navigate(['/home']);
}

irParaProduto(id: number) {
this.router.navigate(['/produto', id]);
}
}
