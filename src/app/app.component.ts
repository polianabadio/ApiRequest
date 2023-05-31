import { Component } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { IPessoa } from './IPessoas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiRequest';
  listaPessoas: IPessoa[] | undefined;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.obterTodasPessoas();
  }

  obterTodasPessoas() {
    this.pessoaService.obterTodos()
      .then(pessoas => {
        this.listaPessoas = pessoas;
      })
      .catch(error => console.error(error));
  }

  buttonText=["Adicionar","Excluir","Editar","Buscar"];
}
