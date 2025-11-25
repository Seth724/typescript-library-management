import { LibraryItem } from './LibraryItem';

/**
 * AudioBook class represents an audio book in the library management system.
 * 
 * INHERITANCE PRINCIPLE:
 * AudioBook extends LibraryItem, inheriting common properties (id, title)
 * and implementing the abstract display() method.
 * 
 * POLYMORPHISM PRINCIPLE:
 * AudioBook provides its own implementation of the display() method,
 * demonstrating different behavior while maintaining the same interface.
 * 
 * LISKOV SUBSTITUTION PRINCIPLE (LSP):
 * AudioBook can be used anywhere LibraryItem is expected without breaking functionality.
 * 
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP):
 * AudioBook class is responsible only for managing audio book-specific data and behavior.
 */
export class AudioBook extends LibraryItem {
    // ENCAPSULATION: Private properties specific to audio books
    private narrator: string;
    private length: number; // Length in minutes

    /**
     * Constructor for AudioBook class
     * @param id - Unique identifier for the audio book
     * @param title - Title of the audio book
     * @param narrator - Narrator of the audio book
     * @param length - Length of the audio book in minutes
     */
    constructor(id: number, title: string, narrator: string, length: number) {
        // INHERITANCE: Call parent constructor to initialize inherited properties
        super(id, title);
        this.narrator = narrator;
        this.length = length;
    }

    /**
     * POLYMORPHISM: Implementation of abstract method from LibraryItem
     * This method provides audio book-specific display format
     */
    public display(): void {
        console.log(`Audio Book ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Narrator: ${this.narrator}`);
        console.log(`Length: ${this.formatLength()}`);
        console.log('-------------------');
    }

    /**
     * POLYMORPHISM: Override parent method with audio book-specific information
     */
    public getBasicInfo(): string {
        return `${super.getBasicInfo()}, Narrator: ${this.narrator}`;
    }

    /**
     * Audio book specific method to format length
     */
    private formatLength(): string {
        const hours = Math.floor(this.length / 60);
        const minutes = this.length % 60;
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }

    // ENCAPSULATION: Getter methods for accessing private properties
    public getNarrator(): string {
        return this.narrator;
    }

    public getLength(): number {
        return this.length;
    }

    public getLengthFormatted(): string {
        return this.formatLength();
    }

    /**
     * ENCAPSULATION: Setter methods with validation
     */
    public setNarrator(narrator: string): void {
        if (narrator && narrator.trim().length > 0) {
            this.narrator = narrator.trim();
        } else {
            throw new Error('Narrator name cannot be empty');
        }
    }

    public setLength(length: number): void {
        if (length > 0) {
            this.length = length;
        } else {
            throw new Error('Length must be greater than 0 minutes');
        }
    }

    /**
     * Audio book specific method to check if it's a long audio book
     */
    public isLongAudioBook(): boolean {
        return this.length > 480; // More than 8 hours
    }
}