# SOLID Principles Implementation in Library Management System

This document explains how each of the SOLID principles is implemented in our Advanced Library Management System.

## 🔒 S - Single Responsibility Principle (SRP)

**Definition**: A class should have only one reason to change, meaning it should have only one job or responsibility.

### Implementation Examples:

#### ✅ LibraryItem Class
- **Single Responsibility**: Defines the common structure for all library items
- **Why it's SRP compliant**: Only responsible for providing the base interface and common properties for library items

#### ✅ Book Class
- **Single Responsibility**: Manages book-specific data and behavior
- **Why it's SRP compliant**: Only handles book-related operations (author, ISBN, display format)

#### ✅ AudioBook Class
- **Single Responsibility**: Manages audio book-specific data and behavior
- **Why it's SRP compliant**: Only handles audio book-related operations (narrator, length, format)

#### ✅ User Class
- **Single Responsibility**: Manages user data and user-related operations
- **Why it's SRP compliant**: Handles user information, borrowing tracking, and user validation

#### ✅ LibraryCatalogue Class
- **Single Responsibility**: Manages the collection of library items
- **Why it's SRP compliant**: Only responsible for catalogue operations (add, remove, find, display items)

---

## 🔓 O - Open/Closed Principle (OCP)

**Definition**: Software entities should be open for extension but closed for modification.

### Implementation Examples:

#### ✅ LibraryItem Abstract Class
```typescript
export abstract class LibraryItem {
    // Closed for modification - core structure is stable
    protected id: number;
    protected title: string;
    
    // Open for extension - new item types can be added
    public abstract display(): void;
}
```

**Benefits**:
- New library item types can be added without modifying existing code
- `DVD`, `Magazine`, `EBook` classes can be created by extending `LibraryItem`
- Existing functionality remains unchanged

#### ✅ LibraryCatalogue Class
```typescript
public addItem(item: LibraryItem): void {
    // Works with any LibraryItem subtype without modification
    this.libraryItems.push(item);
}
```

**Benefits**:
- Can accept any new `LibraryItem` subclass without code changes
- Closed to modification but open to new item types

---

## 🔄 L - Liskov Substitution Principle (LSP)

**Definition**: Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

### Implementation Examples:

#### ✅ Polymorphic Item Handling
```typescript
const items: LibraryItem[] = [
    new Book(1, 'Title', 'Author', 'ISBN'),
    new AudioBook(2, 'Title', 'Narrator', 600)
];

// LSP: Both Book and AudioBook can be used as LibraryItem
items.forEach(item => {
    item.display(); // Works correctly for both types
    item.getId();   // Inherited method works for both
    item.getTitle(); // Inherited method works for both
});
```

**Benefits**:
- `Book` and `AudioBook` can be used interchangeably where `LibraryItem` is expected
- No client code needs to know the specific subtype
- All inherited methods work correctly in subclasses

#### ✅ Catalogue Operations
```typescript
catalogue.addItem(book);      // ✅ Works
catalogue.addItem(audioBook); // ✅ Works
// Both maintain the contract of LibraryItem
```

---

## 🔧 I - Interface Segregation Principle (ISP)

**Definition**: A client should never be forced to implement an interface that it doesn't use.

### Implementation Examples:

#### ✅ Focused Class Interfaces
Each class provides only the methods relevant to its purpose:

**LibraryItem** (Base Interface):
```typescript
- getId(): number
- getTitle(): string
- display(): void
- getItemType(): string
- getBasicInfo(): string
```

**Book** (Specific Interface):
```typescript
- getAuthor(): string
- getISBN(): string
- setAuthor(author: string): void
- setISBN(ISBN: string): void
```

**AudioBook** (Specific Interface):
```typescript
- getNarrator(): string
- getLength(): number
- getLengthFormatted(): string
- isLongAudioBook(): boolean
```

**Benefits**:
- Clients only depend on methods they actually use
- No forced implementation of irrelevant methods
- Each interface is cohesive and focused

#### ✅ User Class Interface
```typescript
// User clients only see user-related methods
- getName(): string
- setName(name: string): void
- borrowBook(bookTitle: string): void
- returnBook(bookTitle: string): void
```

**Benefits**:
- Library catalogue doesn't need to know about book borrowing details
- Book classes don't need to know about user management
- Clean separation of concerns

---

## 🔀 D - Dependency Inversion Principle (DIP)

**Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.

### Implementation Examples:

#### ✅ LibraryCatalogue depends on LibraryItem Abstraction
```typescript
export class LibraryCatalogue {
    private libraryItems: LibraryItem[]; // ← Depends on abstraction
    
    public addItem(item: LibraryItem): void { // ← Not concrete types
        this.libraryItems.push(item);
        console.log(`${item.getItemType()} "${item.getTitle()}" has been added.`);
    }
}
```

**Benefits**:
- `LibraryCatalogue` doesn't depend on concrete `Book` or `AudioBook` classes
- Can work with any future `LibraryItem` subclass
- High-level policy (catalogue management) is independent of low-level details (specific item types)

#### ✅ Main Application Logic
```typescript
function main(): void {
    const items: LibraryItem[] = [ // ← Depends on abstraction
        new Book(1, 'Title', 'Author', 'ISBN'),
        new AudioBook(2, 'Title', 'Narrator', 600)
    ];
    
    items.forEach(item => item.display()); // ← Polymorphic behavior
}
```

**Benefits**:
- Main logic doesn't depend on specific item implementations
- Easy to add new item types without changing high-level code
- Loose coupling between components

#### ✅ Abstraction Dependency Flow
```
High-level: LibraryCatalogue
     ↓ (depends on)
Abstraction: LibraryItem
     ↑ (implements)
Low-level: Book, AudioBook
```

---

## 📋 Summary of SOLID Implementation

| Principle | Implementation | Benefit |
|-----------|---------------|---------|
| **SRP** | Each class has one clear responsibility | Easy to maintain and modify |
| **OCP** | Abstract base class allows extension without modification | New features without breaking existing code |
| **LSP** | Subclasses can replace base class seamlessly | Polymorphic behavior works correctly |
| **ISP** | Focused interfaces for each class type | Clients depend only on what they use |
| **DIP** | High-level modules depend on abstractions | Loose coupling and flexible architecture |

## 🎯 Real-world Benefits

1. **Maintainability**: Changes to one class don't affect others
2. **Extensibility**: New library item types can be added easily
3. **Testability**: Each class can be tested independently
4. **Readability**: Code is organized and purpose-driven
5. **Reusability**: Components can be reused in different contexts
6. **Flexibility**: Easy to modify behavior without breaking existing functionality