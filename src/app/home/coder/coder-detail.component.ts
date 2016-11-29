import { Component, Input } from '@angular/core';
import { Coder } from './coder';

@Component({
  selector: 'my-coder-detail',
  template: `
  	<div *ngIf="coder">
  		<h2>{{coder.name}}</h2>
		<div>
		    <label>name: </label>
		    <input [(ngModel)]="coder.name" placeholder="name"/>
		</div>
	</div>
  `
})
export class CoderDetailComponent {
	@Input()
    coder: Coder;
}