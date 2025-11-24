# TypeScript Library Management System

## 📖 Project Overview

This is a basic Library Management System built with TypeScript as part of the **Coder Catalyst Program OOP Session Assignment 1**. The project demonstrates fundamental Object-Oriented Programming (OOP) concepts including classes, objects, encapsulation, and basic class relationships.

## 🎯 Learning Outcomes

Upon completing this project, we can understand:

- ✅ Defining and creating classes in TypeScript
- ✅ Understanding and implementing basic class relationships
- ✅ Using TypeScript for developing simple applications
- ✅ Understanding the structure of a TypeScript project
- ✅ Working with private/public access modifiers
- ✅ Implementing constructors and methods
- ✅ Managing collections of objects using arrays

## 🏗️ Project Structure

```
ts-boilerplate/
├── src/
│   ├── index.ts                    # Main entry point and demo
│   └── models/
│       ├── index.ts               # Barrel exports for all models
│       ├── Book.ts                # Book class implementation
│       ├── User.ts                # User class implementation
│       └── LibraryCatalogue.ts    # Library catalogue management
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── pnpm-lock.yaml                # Package manager lock file
└── README.md                      # This file
```

## 📋 Class Diagram

The project implements the following class structure:

```
Book
├── Properties: id, title, author, ISBN (all private)
├── Constructor(id, title, author, ISBN)
├── display(): void
└── Getter methods for all properties

User
├── Properties: name, email (private)
├── Constructor(name, email)
├── borrowBook(bookTitle): void
├── manageLibrary(): void
├── display(): void
└── Getter methods

LibraryCatalogue
├── Properties: libraryItems[] (private)
├── Constructor() - initializes empty array
├── addItem(book): void
├── displayItems(): void
├── findBookByTitle(title): Book | undefined
├── getBookCount(): number
└── getAllBooks(): Book[]
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **pnpm** (v8 or higher) - preferred package manager
- **TypeScript** knowledge (basic)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ts-boilerplate
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   
   Or if you prefer npm:
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   pnpm start
   ```
   
   This will start the TypeScript compiler in watch mode and execute the demo.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | Run the project with ts-node in watch mode |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm serve` | Run the compiled JavaScript from dist folder |

## 💻 Usage Example

The project includes a comprehensive demo in `src/index.ts` that showcases all functionality:

```typescript
// Creating books
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '978-0-7432-7356-5');

// Creating library catalogue
const catalogue = new LibraryCatalogue();
catalogue.addItem(book1);

// Creating users
const user1 = new User('Alice Johnson', 'alice.johnson@email.com');

// User interactions
user1.borrowBook('The Great Gatsby');
user1.manageLibrary();

// Finding books
const foundBook = catalogue.findBookByTitle('1984');
```

## 🔧 Key Features

### Book Management
- ✅ Create books with unique ID, title, author, and ISBN
- ✅ Display book information in formatted output
- ✅ Secure access to book properties via getter methods

### User Management
- ✅ Create users with name and email
- ✅ Simulate book borrowing functionality
- ✅ Library management operations

### Catalogue Management
- ✅ Add multiple books to a central catalogue
- ✅ Display all books in organized format
- ✅ Search books by title (case-insensitive)
- ✅ Get book count and access all books

## 📦 Dependencies

### Production Dependencies
Currently no production dependencies (pure TypeScript implementation)

### Development Dependencies
- **TypeScript** (^5.2.2) - TypeScript compiler
- **ts-node** (^10.9.1) - TypeScript execution for Node.js
- **@types/node** (^20.8.10) - TypeScript definitions for Node.js

## 🎓 Assignment Requirements Fulfilled

- ✅ **Project Setup**: TypeScript boilerplate with proper structure
- ✅ **Basic Classes**: Book and User classes with required properties
- ✅ **Constructor Implementation**: Proper initialization of all classes
- ✅ **Display Methods**: Formatted output for all classes
- ✅ **Library Catalogue**: Collection management with add/display functionality
- ✅ **Code Documentation**: Comprehensive comments and documentation
- ✅ **TypeScript Best Practices**: Proper typing and access modifiers

## 🏃‍♂️ Running the Demo

When you run `pnpm start`, you'll see output demonstrating:

1. **Book Creation** - Individual book objects with details
2. **Catalogue Setup** - Adding books to the library catalogue
3. **Complete Catalogue Display** - Formatted list of all books
4. **User Creation** - User objects with information
5. **User Interactions** - Book borrowing and library management
6. **Book Search** - Finding specific books in the catalogue

## 🎯 Learning Points

This project demonstrates several key OOP concepts:

### Encapsulation
- Private properties with public getter methods
- Controlled access to object data

### Classes and Objects
- Class definitions as blueprints
- Object instantiation with constructors

### Method Implementation
- Instance methods for object behavior
- Static-like utility methods

### Collections
- Array management within objects
- Iteration and search operations

### TypeScript Features
- Type annotations and type safety
- Access modifiers (private/public)
- Import/export module system

## 📝 Code Quality

- ✅ **Clean Code**: Well-organized and readable structure
- ✅ **Documentation**: JSDoc comments for all classes and methods
- ✅ **Type Safety**: Full TypeScript typing throughout
- ✅ **Modularity**: Separated concerns with organized file structure
- ✅ **Best Practices**: Following TypeScript and OOP conventions

## 🔄 Next Steps

This basic implementation can be extended with:

- Database integration for persistent storage
- Advanced search and filtering capabilities
- Book availability tracking
- User authentication and permissions
- Due dates and fine calculations
- Multiple library branch support

## 👨‍💻 Author

**Assignment 1 - Coder Catalyst Program**  
*Object-Oriented Programming Session*

## 📄 License

MIT License - Feel free to use this code for learning purposes.

---

*This project demonstrates fundamental TypeScript and OOP concepts for educational purposes.*