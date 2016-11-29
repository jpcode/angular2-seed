import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../app.config';
/* you can use your prefered jquery Plugins */
declare var jQuery: any;

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.template.html'
})
export class Navbar implements OnInit {
  $el: any;
  config: any;

  constructor(config: AppConfig) {
    this.config = config.getConfig();
  }

  ngOnInit(): void {

  }
}
