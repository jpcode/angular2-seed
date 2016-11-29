import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector : 'letter-buttons',
	template: `
		<div class = "letter-buttons">
			<button *ngFor="let letter of alphabet" 
			(click)="select(letter)"
			[disabled]="selection.includes(letter)"
			>{{letter}}</button>
		</div>
	`
})

export class LetterButtonsComponent{
	@Input() selection = '';
	@Output() selectionChange = new EventEmitter<string>();
	alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	errorCount = 5;

	select( letter ){
		this.selection += letter;
		this.selectionChange.emit( this.selection );
	}

}