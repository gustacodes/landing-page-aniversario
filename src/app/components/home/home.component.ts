import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contador: string = '';
  dias: any;
  horas: any;
  minutos: any;
  segundos: any;
  modalVisivel: boolean = false; // Controle de visibilidade do modal
  codigos = [
    "fIBeGB", "CiweZM", "chBGpD", "DMjLSf", "3BOBsK", "kQMUvq", "Ilii8t", "OKHFte", "4CuUdA", "NW9P2R",
    "HPTE2k", "ZKhzFT", "j2NyFQ", "s8hnEL", "vCJVV0", "qTNbl5", "S4dGQ6", "9qcjaL", "bSeV1h", "XDJCyP",
    "FEexdg", "yOAdGT", "u20KcB", "6DSUJ6", "4SgZBx", "OzUagM", "Rjyc8N", "x4Caus", "Jf7xxq", "gwjYk4",
    "0a611C", "9YOFHJ", "dGdwC5", "yUF5lg", "PrG0pJ", "0ukUoj", "e0WDEI", "JThzLi", "FoGoAz", "4rneMG",
    "fdQVk5", "nMCOsM", "w0JxuS", "F5yIlk", "CjUmK7", "pQLAlq", "VgEPSj", "VRQ8Ab", "rKSBhl", "QRA35B",
    "v7d6hd", "se79WI", "bl9hqq", "TiBGl5", "gRRwF5", "h847Ih", "uiUmqu", "lA55gK", "k9cSRf", "90GDon",
    "pVdV5Y", "NBhIJZ", "W6pHin", "TD50uD", "CUnEU1", "M6De26", "3zmmPG", "FNVYeK", "fxgNfp", "prIaL5",
    "7tAVIG", "OBswMU", "sdsTyF", "GFywAb", "nDlpO7", "MlIvS2", "KOSFb3", "f270v8", "kBI43l", "aomSqL",
    "Xy3j4M", "L9pN6F", "2HtYbQ", "oVMW7c", "kRS5uJ", "TjA3xC", "Fq6YBp", "Mv4DL9", "Zk8TpF", "WRJ5vX",
    "QyN3uT", "7GpMXR", "2TjF6B", "ALW9oM", "Xb8MvJ", "Jp5RTk", "CqY7LX", "Np6oTF", "RV9WXb", "Lp3MJv",
    "T5YKqN", "oF7MLR", "X9BpT3", "W6MJkY", "LqF5X7", "MpT9oW", "B7J6RY", "NpX5Lq", "MoT7F9", "kL9WRX",
    "TqF3Y6", "WJ5MoL", "R7o9XT", "LpF6qB", "JX9W7o", "qMoT5L9", "F7J6RY", "XpT9oW", "k7WRXqF", "L5MJ6oT",
    "BX7o9R5", "Tq3W6JY", "9F5LqMo", "oX7T9WR", "J5qF6Mo", "T9oW7R5", "X7WRqF3", "MoT5L9J", "7o9RXqF",
    "W5LqMoT", "F7J6RY9", "XpT9oWJ", "k7WRXqMo", "L5MJ6oT9", "B7X9WRqF", "Tq3W6J9F", "5LqMoXT7", "WRo9J6T",
    "qF3Y7MJX", "oT5LqMo7", "9X7WR5Lq", "F6MoT9oW", "7R5LqF3M", "JX9W7oTR", "MoT5Lq9F", "7o9WRXqF", "W5LqMoT7"
];

constructor(private router: Router) {

}

  ngOnInit(): void {
    this.iniciarContador();
  }

  abrirModal(): void {
    this.modalVisivel = true; 
  }

  fecharModal(): void {
    this.modalVisivel = false;
  }

  entrar(): void {
    const codigoConvite = (document.getElementById('codigoConvite') as HTMLInputElement).value;
  
    if (codigoConvite) {
      if (codigoConvite == 'deusefiel') { 
          localStorage.setItem('codigoValido', codigoConvite);
          this.router.navigate(['meu-aniversario']);
      } else {
          alert('Código inválido!');
      }
    } else {
        alert('Por favor, insira um código.');
    }
    this.fecharModal();
 }
 

  iniciarContador(): void {
    const destino = new Date("2025-02-16T00:00:00");
    const contadorElement = document.getElementById("contador");

    const atualizarContador = () => {
      const agora = new Date();
      const diferenca = destino.getTime() - agora.getTime();

      if (diferenca <= 0) {
        this.contador = "00:00:00:00";
        clearInterval(intervalo);
        return;
      }

      this.dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      this.horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      this.minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      this.segundos = Math.floor((diferenca / 1000) % 60);


      if (contadorElement) {
        contadorElement.querySelector(".dia")!.textContent = this.dias.toString().padStart(2, "0");
        contadorElement.querySelector(".hora")!.textContent = this.horas.toString().padStart(2, "0");
        contadorElement.querySelector(".minuto")!.textContent = this.minutos.toString().padStart(2, "0");
        contadorElement.querySelector(".segundo")!.textContent = this.segundos.toString().padStart(2, "0");
      }
    };


    const intervalo = setInterval(atualizarContador, 1000);
    atualizarContador();
  }
}
