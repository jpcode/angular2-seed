import { Component, OnInit } from '@angular/core';
import { Coder } from './coder/coder';
import { CoderService } from './coder/coder.service';

@Component({
  selector: 'vec-home',
  templateUrl: './home.template.html',
  styleUrls: [ './home.style.css' ],
  providers: [ CoderService ]
})


export class Home implements OnInit{
  titleHome: 'Angular 2 Seed - Basic Example'
  coders: Coder[];
  selectedCoder : Coder;

  constructor(private coderService: CoderService) { }

  getCoders(): void {
    this.coderService.getCodersSlowly().then(coders => this.coders = coders);
    //throw new Error("Testing Logger dont panic!!!, seed is working like a boss");
  }
  
  ngOnInit() : void {
    this.getCoders();
  }

  onSelect(coder: Coder): void {
    this.selectedCoder = coder;
  }

}
