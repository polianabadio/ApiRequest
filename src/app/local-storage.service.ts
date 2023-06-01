import { Injectable } from '@angular/core';
import { IPessoa } from './IPessoas';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarListaPessoasNoLocalStorage(listaPessoas: IPessoa[]): void {
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));
  }
}
