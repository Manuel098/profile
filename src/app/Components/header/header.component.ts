import { GlobalsService } from '../../services/globals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  githubImage = '/assets/Logo/android-chrome-256x256.png';
  constructor(private global: GlobalsService) { }

  ngOnInit() {
    this.global.githubData().then(res => {
      // tslint:disable-next-line: no-string-literal
      this.githubImage = res['avatar_url'];
    });
  }

}
