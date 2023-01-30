# **Movie Organizer**

This application helps you to organize a movie list. Add movies by genre and streaming platform where you found them. After watching the movie, you can change the status by adding a note or summary with your opinion about the movie.

## **This API was made using:**

* Node
* TypeScript
* PostgreSQL
* Prisma

## **Installation:**
1. Clone this repository.
2. Install all dependencies with the command:

~~~
npm i
~~~

3. Create a PostgreSQL database.
4. Configure the .env file as the .env.example file.

## **API Documentation:**

To insert movies into this API, you must first create the genre corresponding to the movie and the streaming platform where it is found. The film is created within a genre and platform.

**1. Create a genre:**

Send POST request on "/genres" route. With a body in json format:

~~~
{
  "name": "string"
}
~~~

**2. Create a platform:**

Send POST request on "/platforms" route. With a body in json format:

~~~
{
  "name": "string"
}
~~~

**3. Create a movie:**

Send POST request on "/movies" route. With a body in json format:

~~~
{
  "name": "string",
  "genreId": number,
  "platformId": number,
  "status": false
}
~~~

**4. Update a movie:**

Send a PUT request on the "/movies/update-movie/:movieId" route.
Change the "movieId" parameter to the id number corresponding to the movie you want to update. With a body in json format:

~~~
{
  "note": "string",
  "status": true
}
~~~

**5. Delete a movie:**

Send a DELETE request on the "/movies/delete-movie/:movieId" route.
Change the "movieId" parameter to the id number corresponding to the movie you want to delete.

**6. List all existing movies:**

Send a GET request on the "/movies" route.
Will return the model:

~~~
[
   {
     "id": 1,
     "name": "Matrix",
     "genreId": 2,
     "platformId": 5,
     "status": true,
     "note": "A good movie! Worth watching."
   },
   {
     "id": 2,
     "name": "Titanic",
     "genreId": 1,
     "platformId": 3,
     "status": false,
     "note": null
   }
]
~~~

**7. List number of movies in each genre:**

Send a GET request on the "/movies/quantity-by-genre" route.
Will return the model:

~~~
[
  {
    "id": 1,
    "name": "Comedy",
    "_count": {
      "movies": 3
    }
  },
  {
    "id": 2,
    "name": "Cartoon",
    "_count": {
      "movies": 5
  }
]
~~~