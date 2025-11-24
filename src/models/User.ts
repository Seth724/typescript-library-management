/**
 * User class represents a library user who can borrow books and manage library operations.
 */
export class User {
    private name: string;
    private email: string;

    /**
     * Constructor for User class
     * @param name - Name of the user
     * @param email - Email address of the user
     */
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    /**
     * Method to simulate borrowing a book
     * @param bookTitle - Title of the book to borrow
     */
    public borrowBook(bookTitle: string): void {
        console.log(`${this.name} has borrowed the book: "${bookTitle}"`);
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
        console.log('-------------------');
    }

    // Getter methods for accessing private properties
    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }
}