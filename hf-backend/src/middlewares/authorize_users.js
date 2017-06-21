import {credentials} from "../credentials";
export const authUsersMiddleware = (req, res, next) => {
  if(process.env.UNSECURE){
    return next();
  }
  const userToken = req.get("Authorization");
  const {token} = credentials;

  const proxiedMethod = {'PUT': true, 'POST': true, 'DELETE': true};

  if (proxiedMethod[req.method]) {
    if (userToken === token) {
      return next();
    }
    return res.sendStatus(403);
  }
  next();
};
