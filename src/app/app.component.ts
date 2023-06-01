import { Component } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { IPessoa } from './IPessoas';
import { LocalStorageService } from './local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiRequest';
  listaPessoas: IPessoa[] | undefined;
  nome:string="";
  email:string="";
  dataNascimento:string="";
  sexo:string="";

  constructor(private pessoaService: PessoaService, private localStorageService: LocalStorageService) { }

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

  adicionarPessoa():void{
    const novaPessoa: IPessoa | undefined = {
      Nome: this.nome,
      Email: this.email,
      DataNascimento: this.dataNascimento,
      Sexo: this.sexo
    };
    if(this.listaPessoas!=undefined){
    this.listaPessoas.push(novaPessoa);}

    this.nome = '';
    this.email = '';
    this.dataNascimento = '';
    this.sexo = '';
  }
  excluirPessoa(pessoa: IPessoa) {
    if(this.listaPessoas!=undefined){
    const index = this.listaPessoas.indexOf(pessoa);
    if (index !== -1) {
      this.listaPessoas.splice(index, 1);
    }}
  }


}
