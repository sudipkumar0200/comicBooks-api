## Setup and Installation

### Using Docker

1. Clone the repository:

   ```
   git clone https://github.com/your-username/comic-books-backend.git 
   cd comic-books-backend
   ```
2. Build the Docker image:

   ```
   docker build -t comic-books-backend .
   ```

### Local Development (without Docker)

1. Clone the repository:

   ```
   git clone https://github.com/your-username/comic-books-backend.git
   cd comic-books-backend
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add your PostgreSQL connection URL:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/comic_books_db?schema=public"
   ```
4. Generate Prisma client:

   ```
   npm prisma generate
   ```
5. Run database migrations:

   ```
   npm prisma migrate
   ```

## Running the Application

### Using Docker

After building the image and setting up the database:

```
docker run -p 3000:3001 -e DATABASE_URL=your_database_url comic-books-backend
```

### Local Development

- For development:

  ```
  npm run dev
  ```
- For production:

  ```
  npm run build
  npm run start
  ```

The server will start on `http://localhost:3001`.

## API Endpoints

- GET `/api/v1/books/getBooks`: Get all comics with filters(author,year,minPrice,maxPrice,condition)
- GET `/api/v1/books/bookById/:id`: Get a specific comic
- POST `/api/v1/books/createBook`: Create a new comic
- PUT `/api/v1/books/updateBook/:id`: Update a comic
- DELETE `/api/v1/books/deleteBook/:id`: Delete a comic

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Port on which the server will run (default: 3001)

## Acknowledgments

- Node.js
- Express.js
- Prisma
- PostgreSQL
- TypeScript
- Docker
