/**
 * Main entry point for the Library Management System
 * Demonstrates the usage of Book, User, and LibraryCatalogue classes
 */

import { Book, User, LibraryCatalogue } from './models';

/**
 * Main function to demonstrate the Library Management System
 */
function main(): void {
    console.log('=== LIBRARY MANAGEMENT SYSTEM DEMO ===\n');

    // Create some books
    console.log('1. Creating Books...\n');
    const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '978-0-7432-7356-5');
    const book2 = new Book(2, 'To Kill a Mockingbird', 'Harper Lee', '978-0-06-112008-4');
    const book3 = new Book(3, '1984', 'George Orwell', '978-0-452-28423-4');
    const book4 = new Book(4, 'Pride and Prejudice', 'Jane Austen', '978-0-14-143951-8');

    // Display individual books
    console.log('Displaying individual books:');
    book1.display();
    book2.display();

    // Create library catalogue
    console.log('\n2. Setting up Library Catalogue...\n');
    const catalogue = new LibraryCatalogue();

    // Add books to catalogue
    catalogue.addItem(book1);
    catalogue.addItem(book2);
    catalogue.addItem(book3);
    catalogue.addItem(book4);

    console.log('\n3. Displaying Complete Catalogue...\n');
    catalogue.displayItems();

    // Create users
    console.log('\n4. Creating Users...\n');
    const user1 = new User('Alice Johnson', 'alice.johnson@email.com');
    const user2 = new User('Bob Smith', 'bob.smith@email.com');

    // Display user information
    console.log('User Information:');
    user1.display();
    user2.display();

    // Demonstrate user interactions
    console.log('\n5. User Interactions...\n');
    user1.borrowBook('The Great Gatsby');
    user1.borrowBook('1984');
    user2.borrowBook('To Kill a Mockingbird');

    console.log('');
    user1.manageLibrary();
    user2.manageLibrary();

    // Demonstrate finding books
    console.log('\n6. Finding Books in Catalogue...\n');
    const foundBook = catalogue.findBookByTitle('1984');
    if (foundBook) {
        console.log('Found book:');
        foundBook.display();
    } else {
        console.log('Book not found.');
    }

    console.log(`\nTotal books in catalogue: ${catalogue.getBookCount()}`);

    console.log('\n=== DEMO COMPLETED ===');
}

// Run the main function
main();
