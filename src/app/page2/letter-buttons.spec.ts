import { TestBed } from '@angular/core/testing';
import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', function(){

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	beforeEach( function(){
		TestBed.configureTestingModule({
			declarations: [ LetterButtonsComponent ]	
		});
	});

	it( 'should display a button for each letter of the alphabet', function(){
		const fixture = TestBed.createComponent( LetterButtonsComponent );
		fixture.autoDetectChanges();
		const component = fixture.componentInstance;
		const element = <HTMLElement>fixture.nativeElement;
		const buttons = element.querySelectorAll('button');
		expect( buttons.length ).toBe( alphabet.length );
		for ( let i = 0; i < alphabet.length; i++ ){
			const button = buttons.item( i );
			expect( button.textContent ).toBe( alphabet.charAt( i ) );
			expect( button.disabled ).toBe( false );
		}
	});

	it( 'should add that letter to the selection when a button is clicked', function(){
		const fixture = TestBed.createComponent( LetterButtonsComponent );
		fixture.autoDetectChanges();
		const component = fixture.componentInstance;
		const element = <HTMLElement>fixture.nativeElement;
		const buttons = element.querySelectorAll('button');
		const buttonO = buttons.item( alphabet.indexOf('O') );
		const buttonK = buttons.item( alphabet.indexOf('K') );

		expect( component.selection ).toBe('');
		buttonO.click();
		expect( component.selection ).toBe('O');
		expect(buttonO.disabled ).toBe( true );
		buttonK.click();
		expect( component.selection ).toBe('OK');
		expect(buttonK.disabled ).toBe( true );
		
	});

});
