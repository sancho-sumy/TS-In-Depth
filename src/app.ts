import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import {
    purge,
    printRefBook,
    callTotalPages,
    getAllBooks,
    getBooksAuthorByIndex,
    getBooksTitleByCategory,
    logBooksTitles,
    logFirstAvailable,
    getObjectProperty,
} from './functions';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import { Library } from './classes/library';

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
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
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

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[1]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[1]);

//     console.log(reader);
// }

// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// console.log(library);

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// const result1 = purge(inventory);
// console.log(result1);

// const result2 = purge([1, 2, 3]);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));

// Task 08.01, 08.02
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();

// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;

// console.log(favoriteLibrarian1);

// Task 08.03
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian1);
// favoriteLibrarian1.assistFaculty = null;
// favoriteLibrarian1.teachCommunity = null;

// Task 08.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// Task 08.05
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1.assistCustomer('Boris', 'LearnType');
