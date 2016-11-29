import { Injectable } from '@angular/core';

declare let jQuery: any;



@Injectable()
export class AppConfig {
  config = {
    name: 'Angular 2 Seed',
    title: 'Seed',
    version: '1.1.0',
    debug: true

  };

  constructor() {
  }

  getConfig(): Object {
    return this.config;
  }
}

