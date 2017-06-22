import {credentials} from "../credentials";
export const authMiddleware = (req, res, next) => {
  const {password: userPasswd} = req.body;
  const {password, token} = credentials;

  const urlMembers = req.originalUrl.split('/')
    .map(urlBit => urlBit.toLowerCase())
    .reduce((acc, next) => next ? [...acc, next] : acc);

  if(req.method === 'POST' && urlMembers[0] === 'login'){
    if(userPasswd === password){
      return res.send({
        token
      });
    }
    return res.sendStatus(401);
  }
  next();
};
