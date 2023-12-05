# Bookstore React Application

Welcome to the Bookstore React Application! This project allows you to explore a variety of books, add them to your cart, and view details about authors associated with the bookstore.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SeanThakur/bookstore.git
   cd bookstore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:3000 to view the application.

## Overview

1. Login Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.56 AM.png>)

2. Home Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.01 AM.png>)

3. Books Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.11 AM.png>)

5. Book details Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.22 AM.png>)

6. Author Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.35 AM.png>)

7. Author detail Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.03.47 AM.png>)

8. Shopping cart Page

![Alt text](<src/assets/image/Screenshot 2023-12-06 at 1.04.24 AM.png>)

The Bookstore React Application is a multi-page React application designed to manage a bookstore. It features:

- Navigation bar for easy access to different sections (Home, Books, Authors).
- Home Page welcoming users to the bookstore with a featured book section.
- Books Page listing all available books with filtering options by genre.
- Authors Page displaying all authors associated with the bookstore, along with their best selling books.
- Carts page shows the list of the books that user want to make purchase.
- Cart Page is protected for authenticated users only.

## Notes

### Authentication Module

- The authentication system in this application is static, allowing users to log in with any username and password combination. Authentication persists across page refreshes.

### Cart Information

- Please note that the cart information is not stored persistently. Upon refreshing the page, the cart contents will be reset.

### Mobile View

- This application is optimized for desktop view and may not provide an optimal experience on mobile devices. Mobile view optimization is not implemented.
