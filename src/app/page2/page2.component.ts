import { Component } from '@angular/core';

@Component({
  selector: 'vec-products',
  templateUrl: './page2.template.html',
})
export class Page2 {
	//simple game
	solution =  'HACKATON';
	selection = '';
	color: 'green';
	displayed = '********';
}
