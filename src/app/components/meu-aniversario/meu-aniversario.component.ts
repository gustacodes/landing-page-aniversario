import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-meu-aniversario',
  templateUrl: './meu-aniversario.component.html',
  styleUrls: ['./meu-aniversario.component.css']
})
export class MeuAniversarioComponent implements AfterViewInit {

  modalVisivel: boolean = false;
  nomeConvidado: string = '';

  ngAfterViewInit(): void {
    const titulo = document.querySelector('.titulo') as HTMLElement;
    const localizacao = document.querySelector('.localizacao') as HTMLElement;
    const local = document.querySelector('.local') as HTMLElement;
    const confirma = document.querySelector('.confirm') as HTMLElement;
    
    if (confirma) {
      titulo.classList.add('aparecer');
    }

    if (local) {
      titulo.classList.add('aparecer');
    }

    if (titulo) {
      titulo.classList.add('aparecer');
    }
        
    if (localizacao) {
      localizacao.classList.add('aparecer');
    }

    setTimeout(() => {
      const contentSecond = document.querySelector('.content-second') as HTMLElement;
      const localSecond = document.querySelector('.local') as HTMLElement;
      const confirma = document.querySelector('.confirm') as HTMLElement;
     
      if (confirma) {
        confirma.classList.add('aparecer');
      }

      if (localSecond) {
        localSecond.classList.add('aparecer');
      }

      if (contentSecond) {
        contentSecond.classList.add('aparecer-second');
      }
    }, 1000);
    
  }

  confirmarPresenca(nome: string): void {
    const codigoValido = localStorage.getItem('codigoValido');

    if (nome && codigoValido) {
      const mensagem = `Oi, Ju! 👋 \n\nGostaria de confirmar minha presença no aniversário da *Maria Helena* 🥳.\n\n👨‍👩‍👦‍👦 *Convidados:* ${nome}.\n\n📍 *Local:* Villa Kids Buffet Infantil - R. Hercílio de Souza, 75 - Estância, Recife - PE, 50771-640\n\n📅 *Data:* 16/02/2025\n⌚️ *Hora:* 15:30`;
      const numeroWhatsApp = '558184845831';
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      window.open(urlWhatsApp, '_blank');
    } else {
      alert('Por favor, insira seu nome antes de confirmar!');
    }
  }

  abrirModal(): void {    
    this.modalVisivel = true;     
  }

  fecharModal(): void {
    this.modalVisivel = false;
  }
}
