/**
 * User class represents a library user who can borrow books and manage library operations.
 * 
 * ENCAPSULATION PRINCIPLE:
 * This class demonstrates proper encapsulation with private properties,
 * public getters/setters with validation, and controlled access to data.
 * 
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP):
 * User class has one responsibility: managing user data and user-related operations.
 * 
 * OPEN/CLOSED PRINCIPLE (OCP):
 * This class is open for extension (can be inherited) but closed for modification.
 */
export class User {
    // ENCAPSULATION: Private properties - cannot be accessed directly from outside
    private name!: string; // Using definite assignment assertion
    private email!: string; // Using definite assignment assertion
    private borrowedBooks: string[]; // Track borrowed books

    /**
     * Constructor for User class
     * @param name - Name of the user
     * @param email - Email address of the user
     */
    constructor(name: string, email: string) {
        // Validate inputs during construction
        this.setName(name);
        this.setEmail(email);
        this.borrowedBooks = [];
    }

    /**
     * Method to simulate borrowing a book
     * @param bookTitle - Title of the book to borrow
     */
    public borrowBook(bookTitle: string): void {
        if (!this.borrowedBooks.includes(bookTitle)) {
            this.borrowedBooks.push(bookTitle);
            console.log(`${this.name} has borrowed the book: "${bookTitle}"`);
        } else {
            console.log(`${this.name} has already borrowed: "${bookTitle}"`);
        }
    }

    /**
     * Method to return a borrowed book
     * @param bookTitle - Title of the book to return
     */
    public returnBook(bookTitle: string): void {
        const index = this.borrowedBooks.indexOf(bookTitle);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} has returned the book: "${bookTitle}"`);
        } else {
            console.log(`${this.name} has not borrowed: "${bookTitle}"`);
        }
    }

    /**
     * Method to manage library operations
     */
    public manageLibrary(): void {
        console.log(`${this.name} (${this.email}) is managing library operations.`);
    }

    /**
     * Display user information
     */
    public display(): void {
        console.log(`User Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Borrowed Books: ${this.borrowedBooks.length > 0 ? this.borrowedBooks.join(', ') : 'None'}`);
        console.log('-------------------');
    }

    // ENCAPSULATION: Getter methods for controlled access to private properties
    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getBorrowedBooks(): string[] {
        // Return a copy to maintain encapsulation
        return [...this.borrowedBooks];
    }

    public getBorrowedBooksCount(): number {
        return this.borrowedBooks.length;
    }

    /**
     * ENCAPSULATION: Setter methods with validation
     * These methods provide controlled access to modify private properties
     */
    public setName(name: string): void {
        if (!name || name.trim().length === 0) {
            throw new Error('Name cannot be empty');
        }
        if (name.trim().length < 2) {
            throw new Error('Name must be at least 2 characters long');
        }
        this.name = name.trim();
    }

    public setEmail(email: string): void {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.trim().length === 0) {
            throw new Error('Email cannot be empty');
        }
        if (!emailRegex.test(email.trim())) {
            throw new Error('Invalid email format');
        }
        this.email = email.trim().toLowerCase();
    }

    /**
     * Check if user has borrowed a specific book
     * @param bookTitle - Title of the book to check
     * @returns true if book is borrowed, false otherwise
     */
    public hasBorrowed(bookTitle: string): boolean {
        return this.borrowedBooks.includes(bookTitle);
    }
}