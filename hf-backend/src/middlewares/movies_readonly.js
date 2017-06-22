export const moviesReadonlyMiddleware = (req, res, next) => {

  const proxiedMethod = {'PUT': true, 'POST': true, 'DELETE': true};

  const urlMembers = req.originalUrl.split('/')
    .map(urlBit => urlBit.toLowerCase())
    .reduce((acc, next) => next ? [...acc, next] : acc);

  if (urlMembers[0] === 'movies' || urlMembers[0] === 'genres') {
    if(proxiedMethod[req.method]){
      if(urlMembers[2] && urlMembers[2] === 'comments'){
        return next();
      }
      return res.sendStatus(403);
    }
  }
  next();
};
