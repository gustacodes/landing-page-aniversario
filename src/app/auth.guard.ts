import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  codigos = [
    "fIBeGB", "CiweZM", "chBGpD", "DMjLSf", "3BOBsK", "kQMUvq", "Ilii8t", "OKHFte", "4CuUdA", "NW9P2R",
    "HPTE2k", "ZKhzFT", "j2NyFQ", "s8hnEL", "vCJVV0", "qTNbl5", "S4dGQ6", "9qcjaL", "bSeV1h", "XDJCyP",
    "FEexdg", "yOAdGT", "u20KcB", "6DSUJ6", "4SgZBx", "OzUagM", "Rjyc8N", "x4Caus", "Jf7xxq", "gwjYk4",
    "0a611C", "9YOFHJ", "dGdwC5", "yUF5lg", "PrG0pJ", "0ukUoj", "e0WDEI", "JThzLi", "FoGoAz", "4rneMG",
    "fdQVk5", "nMCOsM", "w0JxuS", "F5yIlk", "CjUmK7", "pQLAlq", "VgEPSj", "VRQ8Ab", "rKSBhl", "QRA35B",
    "v7d6hd", "se79WI", "bl9hqq", "TiBGl5", "gRRwF5", "h847Ih", "uiUmqu", "lA55gK", "k9cSRf", "90GDon",
    "pVdV5Y", "NBhIJZ", "W6pHin", "TD50uD", "CUnEU1", "M6De26", "3zmmPG", "FNVYeK", "fxgNfp", "prIaL5",
    "7tAVIG", "OBswMU", "sdsTyF", "GFywAb", "nDlpO7", "MlIvS2", "KOSFb3", "f270v8", "kBI43l", "aomSqL"
];

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
   
     const codigoValido = localStorage.getItem('codigoValido');
  
     if (codigoValido && this.codigos.includes(codigoValido)) {
      
       return true;
     } else {
      
       this.router.navigate(['/']);
       return false;
     }
  }
  
}
