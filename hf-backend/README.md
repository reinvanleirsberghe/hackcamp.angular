# HackFlix Backend
Based on JSON-Server

### Build
```
yarn
yarn build:server
yarn build:mocks
```

### Starting the server
```
yarn start #normal server
yarn start:slow #server with a delay of 2.5s on each and every request
yarn start:unsecure #no auth required
```

or

```
docker-compose up
```

The server will be available at http://localhost:5000
## Routes

/login -> returns a token if the following body contains the following password: `h4Xflix`

`/movies` -> Returns a list of movies. You can limit the results by using the _limit query param

`/movies/:id/comments -> /comments?movie_id=id`

    - Get: Gives you every comments for that movie
    - Post: Inserts the movie_id in req.body
        - The body should be an object that contains the following keys:
            - author
            - content
`/genres` -> Returns all the movie genres

In order to post, put or delete to any route, you need to pass the following header:

`Authorization: fds3424fdsqwjfkldmsq4324fds`


## Middlewares
- Token middleware
- Movies read only
- On post on /movies/:id/comments -> Inject the movie_id in the body


