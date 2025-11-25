import { LibraryItem } from './LibraryItem';
import { Book } from './Book';

/**
 * LibraryCatalogue class manages a collection of library items using Singleton pattern.
 * 
 * SINGLETON PATTERN:
 * Ensures that only one instance of LibraryCatalogue exists throughout the application.
 * This is important for a library system where we need a single, centralized catalogue.
 * 
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP):
 * LibraryCatalogue is responsible only for managing the collection of library items.
 * 
 * OPEN/CLOSED PRINCIPLE (OCP):
 * This class is open for extension (new methods can be added) but closed for modification.
 * 
 * DEPENDENCY INVERSION PRINCIPLE (DIP):
 * Depends on the LibraryItem abstraction, not concrete implementations.
 */
export class LibraryCatalogue {
    // SINGLETON PATTERN: Private static instance
    private static instance: LibraryCatalogue;
    
    // ENCAPSULATION: Private property for library items
    private libraryItems: LibraryItem[];

    /**
     * SINGLETON PATTERN: Private constructor prevents direct instantiation
     * Only accessible through getInstance() method
     */
    private constructor() {
        this.libraryItems = [];
    }

    /**
     * SINGLETON PATTERN: Public method to get the single instance
     * Creates the instance if it doesn't exist, returns existing instance if it does
     * @returns The single instance of LibraryCatalogue
     */
    public static getInstance(): LibraryCatalogue {
        if (!LibraryCatalogue.instance) {
            LibraryCatalogue.instance = new LibraryCatalogue();
        }
        return LibraryCatalogue.instance;
    }

    /**
     * Add a library item to the catalogue
     * DEPENDENCY INVERSION PRINCIPLE: Accepts LibraryItem abstraction, not concrete types
     * @param item - LibraryItem object to be added to the catalogue
     */
    public addItem(item: LibraryItem): void {
        this.libraryItems.push(item);
        console.log(`${item.getItemType()} "${item.getTitle()}" has been added to the catalogue.`);
    }

    /**
     * Display all items in the catalogue
     * POLYMORPHISM: Each item's display() method will behave differently
     */
    public displayItems(): void {
        if (this.libraryItems.length === 0) {
            console.log('The library catalogue is empty.');
            return;
        }

        console.log('=== LIBRARY CATALOGUE ===');
        console.log(`Total items: ${this.libraryItems.length}`);
        console.log('');

        this.libraryItems.forEach((item, index) => {
            console.log(`Item ${index + 1}:`);
            // POLYMORPHISM: Each item type will display differently
            item.display();
        });
    }

    /**
     * Get the total number of items in the catalogue
     * @returns number of items
     */
    public getItemCount(): number {
        return this.libraryItems.length;
    }

    /**
     * Find a library item by title
     * @param title - Title of the item to find
     * @returns LibraryItem object if found, undefined otherwise
     */
    public findItemByTitle(title: string): LibraryItem | undefined {
        return this.libraryItems.find(item => 
            item.getTitle().toLowerCase() === title.toLowerCase()
        );
    }

    /**
     * Find items by type (Book, AudioBook, etc.)
     * @param itemType - Type of items to find
     * @returns Array of items of the specified type
     */
    public findItemsByType(itemType: string): LibraryItem[] {
        return this.libraryItems.filter(item => 
            item.getItemType() === itemType
        );
    }

    /**
     * Get all library items
     * @returns Array of LibraryItem objects
     */
    public getAllItems(): LibraryItem[] {
        return [...this.libraryItems]; // Return a copy to maintain encapsulation
    }

    /**
     * Remove an item from the catalogue
     * @param id - ID of the item to remove
     * @returns true if item was removed, false if not found
     */
    public removeItem(id: number): boolean {
        const index = this.libraryItems.findIndex(item => item.getId() === id);
        if (index > -1) {
            const removedItem = this.libraryItems.splice(index, 1)[0];
            console.log(`${removedItem.getItemType()} "${removedItem.getTitle()}" has been removed from the catalogue.`);
            return true;
        }
        return false;
    }

    /**
     * Get statistics about the catalogue
     * @returns Object containing catalogue statistics
     */
    public getStatistics(): { total: number, byType: { [key: string]: number } } {
        const stats = {
            total: this.libraryItems.length,
            byType: {} as { [key: string]: number }
        };

        this.libraryItems.forEach(item => {
            const type = item.getItemType();
            stats.byType[type] = (stats.byType[type] || 0) + 1;
        });

        return stats;
    }

    // Legacy methods for backward compatibility (deprecated)
    /**
     * @deprecated Use addItem() instead
     */
    public addBook(book: Book): void {
        this.addItem(book);
    }

    /**
     * @deprecated Use getItemCount() instead
     */
    public getBookCount(): number {
        return this.getItemCount();
    }

    /**
     * @deprecated Use findItemByTitle() instead
     */
    public findBookByTitle(title: string): LibraryItem | undefined {
        return this.findItemByTitle(title);
    }

    /**
     * @deprecated Use getAllItems() instead
     */
    public getAllBooks(): LibraryItem[] {
        return this.getAllItems();
    }
}