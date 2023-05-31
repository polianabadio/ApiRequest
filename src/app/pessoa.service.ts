import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IPessoa } from './IPessoas';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IPessoa[]>(`${API_PATH}Pessoas`).toPromise();
  }


}
