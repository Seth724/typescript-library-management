import { Book } from './Book';

/**
 * LibraryCatalogue class manages a collection of books in the library.
 * Provides functionality to add books and display the entire catalogue.
 */
export class LibraryCatalogue {
    private libraryItems: Book[];

    /**
     * Constructor for LibraryCatalogue class
     * Initializes an empty array of books
     */
    constructor() {
        this.libraryItems = [];
    }

    /**
     * Add a book to the library catalogue
     * @param item - Book object to be added to the catalogue
     */
    public addItem(item: Book): void {
        this.libraryItems.push(item);
        console.log(`Book "${item.getTitle()}" has been added to the catalogue.`);
    }

    /**
     * Display all books in the catalogue
     */
    public displayItems(): void {
        if (this.libraryItems.length === 0) {
            console.log('The library catalogue is empty.');
            return;
        }

        console.log('=== LIBRARY CATALOGUE ===');
        console.log(`Total books: ${this.libraryItems.length}`);
        console.log('');

        this.libraryItems.forEach((book, index) => {
            console.log(`Book ${index + 1}:`);
            book.display();
        });
    }

    /**
     * Get the total number of books in the catalogue
     * @returns number of books
     */
    public getBookCount(): number {
        return this.libraryItems.length;
    }

    /**
     * Find a book by title
     * @param title - Title of the book to find
     * @returns Book object if found, undefined otherwise
     */
    public findBookByTitle(title: string): Book | undefined {
        return this.libraryItems.find(book => 
            book.getTitle().toLowerCase() === title.toLowerCase()
        );
    }

    /**
     * Get all books in the catalogue
     * @returns Array of Book objects
     */
    public getAllBooks(): Book[] {
        return [...this.libraryItems]; // Return a copy to maintain encapsulation
    }
}