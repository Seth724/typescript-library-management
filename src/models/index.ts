/**
 * Index file for models - exports all model classes
 * 
 * INTERFACE SEGREGATION PRINCIPLE (ISP):
 * Each class provides specific interfaces for their functionality,
 * preventing clients from depending on unused methods.
 */

// Base abstraction
export { LibraryItem } from './LibraryItem';

// Concrete implementations
export { Book } from './Book';
export { AudioBook } from './AudioBook';
export { User } from './User';
export { LibraryCatalogue } from './LibraryCatalogue';