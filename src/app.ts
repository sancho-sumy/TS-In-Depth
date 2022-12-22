import { ReferenceItem, UniversityLibrarian } from './classes';
import { Category } from './enums';
import {
    printRefBook,
    callTotalPages,
    getAllBooks,
    getBooksAuthorByIndex,
    getBooksTitleByCategory,
    logBooksTitles,
    logFirstAvailable,
} from './functions';
import { Librarian, Logger } from './interfaces';
import RefBook from './encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ============================================================
// Task 01.01

// ====================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBooksTitles(getBooksTitleByCategory(Category.CSS));
// console.log(getBooksAuthorByIndex(0));
// callTotalPages();

// Task 03.01
// const myId: string = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerId;
// idGenerator = (name: string, id: number) => `${id} /${name}`;

// idGenerator = createCustomerId;

// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBooksTitleByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));

// console.log(checkoutBooks('Sting', 1, 2, 3));

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles('Evan Burchard'));

// Task 03.04

// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Mayer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamage: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamage('missing back cover');

// Task 04.02

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03

// const favouriteAuthor: Author = {
//     email: 'Anna',
//     name: 'anna@example.com',
//     numBooksPublished: 2,
// };

// const favouriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer(custName, bookTitle) {},
// };

// Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.author?.[0]);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;

// Task 05.05

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown',
// };

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// Task 06.03
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// printRefBook(favoriteLibrarian);
