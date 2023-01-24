import { Injectable } from '@angular/core';

const KEY = 'toekn';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  salvarTolen(token: string){
    localStorage.setItem(KEY,token);
  }

  excluiToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.retornaToken();
  }
}
