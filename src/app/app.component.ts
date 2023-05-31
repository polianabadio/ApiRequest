import { Component } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private pessoaService:PessoaService){ }

  obterTodasPessoas(){
    this.pessoaService.obterTodos()
    .then(pessoas => console.log(pessoas))
    .catch(error => console.error(error));
  }
}
