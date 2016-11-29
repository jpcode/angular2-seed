import { MaskPipe } from './mask.pipe';

/*
	This is a simple example of testing with Karma/Jasmine.
*/

describe('MaskPipe', function(){

	const maskPipe = new MaskPipe();

	it('should hide everything when no letters selected',function(){
		const masked = maskPipe.transform('ANGULAR','');
		expect( masked ).toBe('*******');
	});

	it('should reveal only the selected letter', function(){
		const masked = maskPipe.transform('ANGULAR','A');
		expect( masked ).toBe('A****A*');
	});

	it('should reveal only the selected letters', function(){
		const masked = maskPipe.transform('ANGULAR','ABCL');
		expect( masked ).toBe('A***LA*');
	});

	it('should reveal everything when all letters selected', function() {
		const masked = maskPipe.transform('ANGULAR','ANGULR');
		expect( masked ).toBe('ANGULAR');
	});

});
