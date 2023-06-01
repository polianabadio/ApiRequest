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
  modal= 'block';
  i=0;
  buscaEmail: string ="";
  resultadoBusca: IPessoa | undefined;

  constructor(private pessoaService: PessoaService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.listaPessoas = this.localStorageService.obterListaPessoasDoLocalStorage();
    this.obterTodasPessoas();
    console.log(this.listaPessoas)
    this.i=-1;
  }

  obterTodasPessoas() {
    this.pessoaService.obterTodos()
      .then(pessoas => {
        if(this.listaPessoas?.length===0){
        this.listaPessoas=pessoas;
        this.localStorageService.salvarListaPessoasNoLocalStorage(this.listaPessoas)
      }

      })
      .catch(error => console.error(error));
  }

  adicionarPessoa():void{
    if(this.i>=0){
      const novaPessoa: IPessoa = {
        Nome: this.nome,
        Email: this.email,
        DataNascimento: this.dataNascimento,
        Sexo: this.sexo
      }
      if(this.listaPessoas!=undefined){
        this.listaPessoas.splice(this.i, 1);
        this.listaPessoas.splice(this.i, 0, novaPessoa);
        this.i=-1;
    }}else{
    const novaPessoa: IPessoa = {
      Nome: this.nome,
      Email: this.email,
      DataNascimento: this.dataNascimento,
      Sexo: this.sexo
    };
    if(this.listaPessoas!=undefined){
    this.listaPessoas.push(novaPessoa);}}

    this.nome = '';
    this.email = '';
    this.dataNascimento = '';
    this.sexo = '';
    this.localStorageService.salvarListaPessoasNoLocalStorage(this.listaPessoas)

  }

  excluirPessoa(pessoa: IPessoa) {
    if(this.listaPessoas!=undefined){
    const index = this.listaPessoas.indexOf(pessoa);
    if (index !== -1) {
      this.listaPessoas.splice(index, 1);
    }}
    this.localStorageService.salvarListaPessoasNoLocalStorage(this.listaPessoas)
  }

  abrirFecharModal(){
    if (this.modal === 'none') {
      this.modal = 'block';
    } else {
      this.modal = 'none';
      this.nome = '';
      this.email = '';
      this.dataNascimento = '';
      this.sexo = '';
    }
  }


  editarPessoa(pessoa: IPessoa, indice:number){
    this.i=indice;
    this.nome=pessoa.Nome,
    this.email=pessoa.Email,
    this.dataNascimento=pessoa.DataNascimento,
    this.sexo=pessoa.Sexo
  }

  // buscarPorEmail(buscaEmail: string): IPessoa | undefined {
  //   if (this.listaPessoas != undefined) {
  //     return this.resultadoBusca = this.listaPessoas.find(pessoa => pessoa.Email.trim() === buscaEmail.trim()) ;
  //   }
  //   return undefined;
  // }


}
