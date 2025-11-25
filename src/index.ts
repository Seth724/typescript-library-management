/**
 * Main entry point for the Advanced Library Management System
 * Demonstrates advanced OOP concepts: Abstraction, Encapsulation, Inheritance, Polymorphism,
 * Singleton Pattern, and SOLID principles
 */

import { LibraryItem, Book, AudioBook, User, LibraryCatalogue } from './models';

/**
 * SOLID PRINCIPLES DEMONSTRATION:
 * 
 * S - Single Responsibility Principle: Each class has one clear responsibility
 * O - Open/Closed Principle: Classes are open for extension, closed for modification
 * L - Liskov Substitution Principle: Subclasses can replace base classes without issues
 * I - Interface Segregation Principle: Classes don't depend on unused methods
 * D - Dependency Inversion Principle: Depend on abstractions, not concretions
 */

/**
 * Main function to demonstrate the Advanced Library Management System with OOP concepts
 */
function main(): void {
    console.log('=== ADVANCED LIBRARY MANAGEMENT SYSTEM DEMO ===\n');
    console.log('Demonstrating: Abstraction, Encapsulation, Inheritance, Polymorphism, Singleton & SOLID\n');

    // === POLYMORPHISM & INHERITANCE DEMONSTRATION ===
    console.log('1. Creating Different Types of Library Items (Polymorphism)...\n');
    
    // INHERITANCE: Both Book and AudioBook inherit from LibraryItem
    const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '978-0-7432-7356-5');
    const book2 = new Book(2, 'To Kill a Mockingbird', 'Harper Lee', '978-0-06-112008-4');
    
    const audioBook1 = new AudioBook(101, '1984', 'Simon Prebble', 720); // 12 hours
    const audioBook2 = new AudioBook(102, 'Pride and Prejudice', 'Rosamund Pike', 540); // 9 hours

    // POLYMORPHISM: Same method call, different behavior for each type
    console.log('Displaying different item types (Polymorphism in action):');
    const items: LibraryItem[] = [book1, audioBook1]; // Array of base type can hold derived types
    
    items.forEach(item => {
        item.display(); // Each item displays differently based on its actual type
    });

    // === SINGLETON PATTERN DEMONSTRATION ===
    console.log('\n2. Setting up Library Catalogue (Singleton Pattern)...\n');
    
    // SINGLETON: Getting the single instance of LibraryCatalogue
    const catalogue = LibraryCatalogue.getInstance();
    
    // Verify singleton behavior
    const catalogue2 = LibraryCatalogue.getInstance();
    console.log(`Singleton verification: Same instance? ${catalogue === catalogue2}`);
    console.log('');

    // ABSTRACTION & POLYMORPHISM: Adding different types through common interface
    catalogue.addItem(book1);
    catalogue.addItem(book2);
    catalogue.addItem(audioBook1);
    catalogue.addItem(audioBook2);

    console.log('\n3. Displaying Complete Catalogue (Polymorphism)...\n');
    catalogue.displayItems(); // Each item displays according to its type

    // === ENCAPSULATION DEMONSTRATION ===
    console.log('\n4. Creating Users with Enhanced Encapsulation...\n');
    
    try {
        const user1 = new User('Alice Johnson', 'alice.johnson@email.com');
        const user2 = new User('Bob Smith', 'bob.smith@email.com');

        console.log('User Information:');
        user1.display();
        user2.display();

        // ENCAPSULATION: Using setter methods with validation
        console.log('\n5. Testing Encapsulation with Validation...\n');
        
        // Valid operations
        user1.setName('Alice Johnson-Smith');
        user1.setEmail('alice.smith@newmail.com');
        console.log(`Updated user name: ${user1.getName()}`);
        console.log(`Updated user email: ${user1.getEmail()}`);

        // ENCAPSULATION: Enhanced borrowing system with tracking
        console.log('\n6. Enhanced User Interactions (Encapsulation)...\n');
        
        user1.borrowBook('The Great Gatsby');
        user1.borrowBook('1984');
        user1.borrowBook('The Great Gatsby'); // Try to borrow same book again
        
        user2.borrowBook('To Kill a Mockingbird');
        user2.borrowBook('Pride and Prejudice');

        console.log('\nUpdated user information after borrowing:');
        user1.display();
        user2.display();

        // Return books
        console.log('\nReturning books:');
        user1.returnBook('The Great Gatsby');
        user1.returnBook('Non-existent Book'); // Try to return book not borrowed

        console.log('\nUser info after returning:');
        user1.display();

    } catch (error) {
        console.log(`Validation Error: ${error}`);
    }

    // === ADVANCED CATALOGUE FEATURES ===
    console.log('\n7. Advanced Catalogue Features...\n');
    
    // Finding items by type (Polymorphism)
    const books = catalogue.findItemsByType('Book');
    const audioBooks = catalogue.findItemsByType('AudioBook');
    
    console.log(`Books in catalogue: ${books.length}`);
    console.log(`Audio books in catalogue: ${audioBooks.length}`);

    // Catalogue statistics
    const stats = catalogue.getStatistics();
    console.log('\nCatalogue Statistics:');
    console.log(`Total items: ${stats.total}`);
    console.log('Items by type:');
    Object.entries(stats.byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
    });

    // === POLYMORPHISM WITH METHOD OVERRIDING ===
    console.log('\n8. Demonstrating Method Overriding (Polymorphism)...\n');
    
    console.log('Basic info from different item types:');
    items.forEach(item => {
        console.log(`- ${item.getBasicInfo()}`); // Each type provides different info
    });

    // === INVALID OPERATIONS DEMONSTRATION ===
    console.log('\n9. Testing Validation (Encapsulation)...\n');
    
    try {
        new User('', 'invalid@email.com'); // Should throw error
    } catch (error) {
        console.log(`Caught expected error: ${(error as Error).message}`);
    }

    try {
        new User('Valid Name', 'invalid-email'); // Should throw error
    } catch (error) {
        console.log(`Caught expected error: ${(error as Error).message}`);
    }

    try {
        const invalidAudio = new AudioBook(999, 'Test', 'Test Narrator', -10); // Invalid length
    } catch (error) {
        console.log(`Caught expected error: ${(error as Error).message}`);
    }

    console.log('\n=== DEMO COMPLETED ===');
    console.log('\nAdvanced OOP Concepts Demonstrated:');
    console.log('✅ Abstraction - LibraryItem abstract class');
    console.log('✅ Encapsulation - Private properties with getters/setters and validation');
    console.log('✅ Inheritance - Book and AudioBook extend LibraryItem');
    console.log('✅ Polymorphism - Different display() implementations and method overriding');
    console.log('✅ Singleton Pattern - LibraryCatalogue single instance');
    console.log('✅ SOLID Principles - Applied throughout the design');
}

// Run the main function
main();
