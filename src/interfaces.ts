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

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {
    Author,
    Book,
    Librarian,
    Person,
    Magazine,
    TOptions,
    DamageLoger as Logger,
    ShelfItem,
    LibMgrCallback,
    Callback,
};
