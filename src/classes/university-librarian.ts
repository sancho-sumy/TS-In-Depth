/* eslint-disable no-underscore-dangle */
import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod } from './decorators';

// interface A {
//     a: number;
// }
// @logger
class UniversityLibrarian implements Interfaces.Librarian /* , A */ {
    name: string;
    email: string;
    department: string;

    a: number = 1;

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting fsculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teach community');
    }
}

export { UniversityLibrarian };
