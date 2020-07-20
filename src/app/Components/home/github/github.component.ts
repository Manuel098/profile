import { GlobalsService } from '../../../services/globals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  repos;
  constructor(private global: GlobalsService) { }

  ngOnInit() {
    this.global.githubRepos().then(res => {
      this.repos = res;
    });
  }

}
