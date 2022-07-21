import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Funcionario } from './interfaces/funcionario';
import { MatTableModule } from '@angular/material/table'

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'Marketing',
  'Financeiro',
  'RH',
  'Operações',
  'Consultoria',
  'Vendas',
  'TI',
  'Estoque',
];



const NAMES: string[] = [
  'Bruna Correia',
  'Lorena Azevedo',
  'Marcos Vinicius Robson',
  'João Gabriel',
  'Dra. Camila Alves',
  'Sofia Freitas',
  'Davi Lucca Novaes',
  'Erick Campos',
  'Eloah Nascimento',
  'Ryan Carvalho',
  'Matheus Barros',
  'Maria Vitória Barros',
  'Ana Beatriz da Rocha',
  'Vitória da Rosa',
  'ViDra. Milena Nascimentoolet',
  'Cauã Alves',
  'Maria Alice Barbosa',
  'Pedro Miguel Martins',
  'Vitóri Martins',
];

const FUNCIONARIOS: Funcionario[] = [
  {nome: 'Filipe Ferreira', email: 'fc-filipe@outlook.com',descInstitucional:'filipe-ferreira-5a92b8213', emailInstitucional:'https://www.linkedin.com/in/filipe-ferreira-5a92b8213/', foto:'./../assets/filipe2.png', cargo:'TI', departamento:'Programador Jr'},
  {nome: 'Lorena Azevedo', email: 'lorena@gmail.com',descInstitucional:'lorena@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Financeiro', departamento:'Aux administrativo'},
  {nome: 'Marcos Vinicius Robson', email: 'marcos@gmail.com',descInstitucional:'marcos@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'RH', departamento:'Aux administrativo'},
  {nome: 'João Gabriel', email: 'joao@gmail.com',descInstitucional:'joao@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Operações', departamento:'Aux Técnico'},
  {nome: 'Dra. Camila Alves', email: 'camila@gmail.com',descInstitucional:'camila@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Consultoria', departamento:'Analista Jr'},
  {nome: 'Sofia Freitas', email: 'sofia@gmail.com',descInstitucional:'sofia@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Vendas', departamento:'Vendedor Jr'},
  {nome: 'Davi Lucca Novaes', email: 'davi@gmail.com',descInstitucional:'davi@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'TI', departamento:'Analista Jr'},
  {nome: 'Eloah Nascimento', email: 'eloah@gmail.com',descInstitucional:'eloah@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Estoque', departamento:'Aux administrativo'},
  {nome: 'Ryan Carvalho', email: 'ryan@gmail.com',descInstitucional:'ryan@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Marketing', departamento:'Analista'},
  {nome: 'Matheus Barros', email: 'matheus@gmail.com',descInstitucional:'mat@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Financeiro', departamento:'Analista Pl'},
  {nome: 'Maria Vitória Barros', email: 'maria@gmail.com',descInstitucional:'maria@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'RH', departamento:'Analista'},
  {nome: 'Ana Beatriz da Rocha', email: 'ana@gmail.com',descInstitucional:'ana@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Operações', departamento:'Técnico de operações'},
  {nome: 'Vitória da Rosa', email: 'vitória@gmail.com',descInstitucional:'vitoria@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Consultoria', departamento:'Assistente em consultoria'},
  {nome: 'ViDra. Milena Nascimentoolet', email: 'ViDra@gmail.com',descInstitucional:'vidra@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Vendas', departamento:'Estagiário'},
  {nome: 'Maria Alice Barbosa', email: 'maria@gmail.com',descInstitucional:'maria@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'TI', departamento:'Técnico'},
  {nome: 'Alice Barbosa', email: 'alice@gmail.com',descInstitucional:'alice@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Estoque', departamento:'Aux administrativo'},
  {nome: 'Pedro Miguel Martins', email: 'pedro@gmail.com', descInstitucional:'pedro@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Marketing', departamento:'Vendedor'},
  {nome: 'Vitóri Martins', email: 'vitóri@gmail.com', descInstitucional:'pedro@instituto.com', emailInstitucional:'#', foto:'./../assets/emg3.png', cargo:'Financeiro', departamento:'Aux administrativo'},

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  displayedColumnsFuncionario: string[] = [ 'Detalhes', 'cargo', 'departamento', 'ações'];
  dataSourceFuncionario!: MatTableDataSource<Funcionario>;

  @ViewChild(MatPaginator) paginatorFuncionario!: MatPaginator;
  @ViewChild(MatSort) sortFuncionario!: MatSort;

  title = 'lista-de-contatos';


  constructor() {
    this.dataSourceFuncionario = new MatTableDataSource(FUNCIONARIOS);
  }

  ngAfterViewInit() {

    this.dataSourceFuncionario.paginator = this.paginatorFuncionario;
    this.dataSourceFuncionario.sort = this.sortFuncionario;
  }



  applyFilterFuncionario(event: Event) {
    const filterValueFuncionario = (event.target as HTMLInputElement).value;
    this.dataSourceFuncionario.filter = filterValueFuncionario.trim().toLowerCase();

    if (this.dataSourceFuncionario.paginator) {
      this.dataSourceFuncionario.paginator.firstPage();
    }
  }

}








