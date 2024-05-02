Library Management System:

Requirements
You are employed to develop an Integrated Library Management System (ILMS). This system contains all books and author profiles of this library.
Each book includes id, title, genre, isbn, format, summary, and a list of author ID.
Each author contains first name, last name, phone number, email, and address.
The following is an example data.
Author {
  "id": "author1",
  "firstname": "abc",
  "lastname": "efg",
  "phone": "641-123-5678",
  "email": "abc@miu.edu",
  "address": "Fairfield, IA, 52556"
}

Book {
  "id": "book1",
  "title": "Java Essentials",
  "genre": "Programming",
  "isbn": "978-0141439518",
  "format": "paper",
  "summary": "This book covers all important aspects of Java programming. It is highly recommended by experienced SWE",
  "authors": ["author1"]
}
Create the React application to have the following features.
Add a new book
Display all books
Add an author
Display all authors
Search all books that have the title starting with the searched text
Add an author to a book
Create a json-server containing books and authors
