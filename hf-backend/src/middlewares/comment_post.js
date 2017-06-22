export const postCommentMiddleware = (req, res, next) => {

  const proxiedMethod = {'POST': true};

  const urlMembers = req.originalUrl.split('/')
    .map(urlBit => urlBit.toLowerCase())
    .reduce((acc, next) => next ? [...acc, next] : acc);

  if(urlMembers[0] === 'movies' && urlMembers[2] === 'comments'){
    if(proxiedMethod[req.method]){
      const {author, content} = req.body;
      if(!author || !content){
        return res.sendStatus(422);
      }
      req.body = {...req.body, movie_id: parseInt(urlMembers[1])}
    }
  }

  next();
};
