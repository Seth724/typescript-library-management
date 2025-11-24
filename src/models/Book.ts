/**
 * Book class represents a book in the library management system.
 * Contains basic information about a book including id, title, author, and ISBN.
 */
export class Book {
    private id: number;
    private title: string;
    private author: string;
    private ISBN: string;

    /**
     * Constructor for Book class
     * @param id - Unique identifier for the book
     * @param title - Title of the book
     * @param author - Author of the book
     * @param ISBN - International Standard Book Number
     */
    constructor(id: number, title: string, author: string, ISBN: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    /**
     * Display method to show book information
     */
    public display(): void {
        console.log(`Book ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`ISBN: ${this.ISBN}`);
        console.log('-------------------');
    }

    // Getter methods for accessing private properties
    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getISBN(): string {
        return this.ISBN;
    }
}