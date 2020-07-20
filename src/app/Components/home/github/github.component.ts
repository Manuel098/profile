import { GlobalsService } from '../../../services/globals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  repos;
  description = 'A continuacion presentare los repositorios publicos dentro de mi cuenta de github con una descripcion a grandes ' +
  'rasgos y el lenguaje en el que se encuentran programados.';
  constructor(private global: GlobalsService) { }

  ngOnInit() {
    this.global.githubRepos().then(res => {
      this.repos = res;
    });
  }

}
