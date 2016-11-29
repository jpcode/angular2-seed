import { Injectable } from '@angular/core';
import { Coder } from './coder';
import { CODERS } from './mock-coders';

@Injectable()
export class CoderService {
	getCoders() : Promise<Coder[]> {
	  return Promise.resolve( CODERS );
	}

	getCodersSlowly(): Promise<Coder[]> {
	  return new Promise<Coder[]>(resolve =>
	    setTimeout(resolve, 1000)) // delay 2 seconds
	    .then(() => this.getCoders());
	}
}