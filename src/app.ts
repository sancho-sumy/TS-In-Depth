showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ============================================================
// Task 01.01

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

type Books = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}[];

function getAllBooks(): Books {
    const books: Books = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

function logFirstAvailable(books: Books): void {
    console.log(`Number of books ${books.length}`);

    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBooksTitleByCategory(inputCategory: Category): string[] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === inputCategory).map(({ title }) => title);
}

function logBooksTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBooksAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

function callTotalPages(): void {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(r);
}

// ====================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBooksTitles(getBooksTitleByCategory(Category.CSS));
// console.log(getBooksAuthorByIndex(0));
callTotalPages();
