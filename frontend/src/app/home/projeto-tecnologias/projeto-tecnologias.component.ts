import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-tecnologias',
  templateUrl: './projeto-tecnologias.component.html',
  styleUrls: ['./projeto-tecnologias.component.scss']
})
export class ProjetoTecnologiasComponent implements OnInit {

  tecnologias: Array<any> = [
    {img: 'angular', url: 'https://angular.io/', title: 'Angular'},
    {img: 'typescript', url: 'https://www.typescriptlang.org/', title: 'TypeScript'},
    {img: 'sass', url: 'https://sass-lang.com/', title: 'SCSS - SASS'},
    {img: 'php', url: 'https://www.php.net/', title: 'PHP 8'},
    {img: 'laravel', url: 'https://laravel.com/', title: 'Laravel'},
    {img: 'mariadb', url: 'https://mariadb.org/', title: 'Maria DB'},
    {img: 'nginx', url: 'https://nginx.org/', title: 'Nginx'},
    {img: 'docker', url: 'https://www.docker.com/', title: 'Docker'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
