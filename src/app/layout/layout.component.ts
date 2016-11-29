import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config'

declare var jQuery: any;
declare var Hammer: any;

@Component({
  selector: 'layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html',
  host: {
    '[class.app]' : 'true',
    id: 'app'
  }
})
export class Layout {
  config: any;
  configFn: any;
  $sidebar: any;
  el: ElementRef;
  router: Router;
  chatOpened: boolean = false;

  constructor(config: AppConfig,
              el: ElementRef,
              router: Router) {
    this.el = el;
    this.config = config.getConfig();
    this.configFn = config;
    this.router = router;
  }

  ngOnInit(): void {

  }
}
