
# Movie Rating App

Welcome to the Movie Rating Application! This application allows users to browse movies, rate them, write reviews, and perform various other actions related to movie management.


## Features

- User Authentication: Users can register and login to the application using JWT (JSON Web Tokens) for secure authentication.
- Movies CRUD: Users can add, update, delete, and view details of movies.
- Ratings and Reviews: Users can rate and review movies, update their reviews, and delete their reviews. The application also calculates and displays the average rating for each movie.
- RESTful API: The application provides a RESTful API for seamless integration with frontend applications.


## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for user authentication


## Installation

Clone the repo

```bash
git clone https://github.com/your-username/movie-rating-application.git

cd movie-rating-application
npm install

```
    
Set up environment variables

```bash
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

Start the server:
```bash
npm start
```

## API Endpoints

### User Authentication

- **Register User**

  `POST /api/users/register`

  Registers a new user with username, email, and password.

- **Login User**

  `POST /api/users/login`

  Authenticates a user and returns a JWT token.

### Movies

- **Add Movie**

  `POST /api/movies`

  Allows users to add a new movie. Requires details such as title, director, genre, releaseYear, and description.

- **Update Movie**

  `PUT /api/movies/:id`

  Enables users to update an existing movie's details by its ID.

- **Delete Movie**

  `DELETE /api/movies/:id`

  Permits users to delete a movie by its ID.

- **Get Movie Details**

  `GET /api/movies/:id`

  Retrieves details of a specific movie.

- **List Movies**

  `GET /api/movies`

  Lists all movies. Supports filtering by genre, releaseYear, or director through query parameters.

### Ratings and Reviews

- **Rate and Review Movie**

  `POST /api/movies/:id/reviews`

  Allows authenticated users to post a rating and review for a movie, including rating and text.

- **Update Review**

  `PUT /api/movies/:movieId/reviews/:reviewId`

  Enables users to update their review and rating for a specific movie.

- **Delete Review**

  `DELETE /api/movies/:movieId/reviews/:reviewId`

  Allows users to delete their own review.

- **List Reviews**

  `GET /api/movies/:id/reviews`

  Retrieves all reviews for a particular movie.

- **Movie Average Rating**

  `GET /api/movies/:id/averageRating`

  Calculates and returns the average rating for a movie.

## Running Tests

Testing
- User Authentication: Use Postman to test user registration and login functionalities.
- Movies CRUD: Use Postman to test adding, updating, deleting, and listing movies.
- Ratings and Reviews: Test rating and reviewing movies, updating reviews, deleting reviews, listing reviews, and calculating average ratings using Postman.


