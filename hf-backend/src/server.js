import jsonServer from 'json-server';
import {postCommentMiddleware} from "./middlewares/comment_post";
import path from 'path';

import {moviesReadonlyMiddleware} from "./middlewares/movies_readonly";
import {authMiddleware} from "./middlewares/auth";
import {authUsersMiddleware} from "./middlewares/authorize_users";

import fs from 'fs';
import movies from './mocks/movies.json';
import genres from './mocks/genres.json';
import comments from './mocks/comments.json';
import {slowMiddleware} from "./middlewares/slow";

const db = {movies, genres, comments};

fs.writeFileSync(path.join(__dirname + '/db.json'), JSON.stringify(db));

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname + '/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({
  '/movies/:id/comments': '/comments?movie_id=:id'
}));

server.use(slowMiddleware);
server.use(authMiddleware);
server.use(authUsersMiddleware);
server.use(moviesReadonlyMiddleware);
server.use(postCommentMiddleware);

server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is up and running 🎉');
});
