import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamage?: (reason: string) => void;
    // markDamage?(reason: string): void;
    markDamage?: DamageLoger;
}

interface DamageLoger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface A {
    [prop: string]: string | number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

export { Author, Book, Librarian, Person, TOptions, DamageLoger as Logger };
