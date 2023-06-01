import { Injectable } from '@angular/core';
import { IPessoa } from './IPessoas';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarListaPessoasNoLocalStorage(listaPessoas: IPessoa[] | undefined): void {
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));
  }
  obterListaPessoasDoLocalStorage(): IPessoa[] | undefined {
    const listaPessoas = localStorage.getItem('listaPessoas');
    if (listaPessoas) {
      return JSON.parse(listaPessoas);

    } else {
      return [];
    }}
}
