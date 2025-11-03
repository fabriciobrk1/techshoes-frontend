import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Produto {
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
export class HomeComponent {
  produtos: Produto[] = [
    {
      nome: 'Tênis XYZ',
      preco: 299.90,
      imagem: 'assets/imagens/1728490702-2-Akq43FIeJo.webp'
    },
    {
      nome: 'Boné Black',
      preco: 79.90,
      imagem: 'assets/imagens/bone-preto.jpg'
    },
    {
      nome: 'Jaqueta Street',
      preco: 199.90,
      imagem: 'assets/imagens/jaqueta-street.webp'
    },
    {
      nome: 'Camiseta DryFit',
      preco: 89.90,
      imagem: 'assets/imagens/camiseta-dry.webp'
    }
  ];

  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);
  }
}
