import { LibraryItem } from './LibraryItem';

/**
 * Book class represents a physical book in the library management system.
 * 
 * INHERITANCE PRINCIPLE:
 * Book extends LibraryItem, inheriting common properties (id, title)
 * and implementing the abstract display() method.
 * 
 * LISKOV SUBSTITUTION PRINCIPLE (LSP):
 * Book can be used anywhere LibraryItem is expected without breaking functionality.
 * 
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP):
 * Book class is responsible only for managing book-specific data and behavior.
 */
export class Book extends LibraryItem {
    // ENCAPSULATION: Private properties specific to books
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
        // INHERITANCE: Call parent constructor to initialize inherited properties
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    /**
     * POLYMORPHISM: Implementation of abstract method from LibraryItem
     * This method provides book-specific display format
     */
    public display(): void {
        console.log(`Book ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`ISBN: ${this.ISBN}`);
        console.log('-------------------');
    }

    /**
     * POLYMORPHISM: Override parent method with book-specific information
     */
    public getBasicInfo(): string {
        return `${super.getBasicInfo()}, Author: ${this.author}`;
    }

    // ENCAPSULATION: Getter methods for accessing private properties
    public getAuthor(): string {
        return this.author;
    }

    public getISBN(): string {
        return this.ISBN;
    }

    /**
     * ENCAPSULATION: Setter methods with validation
     */
    public setAuthor(author: string): void {
        if (author && author.trim().length > 0) {
            this.author = author.trim();
        } else {
            throw new Error('Author name cannot be empty');
        }
    }

    public setISBN(ISBN: string): void {
        if (ISBN && ISBN.trim().length > 0) {
            this.ISBN = ISBN.trim();
        } else {
            throw new Error('ISBN cannot be empty');
        }
    }
}