/**
 * LibraryItem - Abstract base class for all library items
 * 
 * ABSTRACTION PRINCIPLE:
 * This abstract class defines the common interface and shared properties
 * for all library items while hiding implementation details from concrete classes.
 * 
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP):
 * This class has one responsibility: defining the common structure and behavior
 * that all library items must have.
 * 
 * OPEN/CLOSED PRINCIPLE (OCP):
 * This class is open for extension (new item types can inherit from it)
 * but closed for modification (existing functionality doesn't change).
 */
export abstract class LibraryItem {
    // ENCAPSULATION: Protected properties - accessible by subclasses but not external code
    protected id: number;
    protected title: string;

    /**
     * Constructor for LibraryItem
     * @param id - Unique identifier for the library item
     * @param title - Title of the library item
     */
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    /**
     * ABSTRACTION: Abstract method that must be implemented by all subclasses
     * Each subclass will have its own implementation (POLYMORPHISM)
     */
    public abstract display(): void;

    // ENCAPSULATION: Controlled access to protected properties through getters
    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    /**
     * DEPENDENCY INVERSION PRINCIPLE (DIP):
     * This method provides a common interface that high-level modules
     * can depend on, rather than depending on concrete implementations.
     */
    public getItemType(): string {
        return this.constructor.name;
    }

    /**
     * Common method that can be overridden by subclasses (POLYMORPHISM)
     */
    public getBasicInfo(): string {
        return `ID: ${this.id}, Title: ${this.title}`;
    }
}