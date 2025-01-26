import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-meu-aniversario',
  templateUrl: './meu-aniversario.component.html',
  styleUrls: ['./meu-aniversario.component.css']
})
export class MeuAniversarioComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const titulo = document.querySelector('.titulo') as HTMLElement;
    
    if (titulo) {
      titulo.classList.add('aparecer');
    }

    setTimeout(() => {
      const contentSecond = document.querySelector('.content-second') as HTMLElement;
      if (contentSecond) {
        contentSecond.classList.add('aparecer-second');
      }
    }, 1000);
  }
}
