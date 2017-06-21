export const slowMiddleware = (req, res, next) => {
  if(process.env.SLOW){
    setTimeout(next, 2500);
  } else {
    next();
  }
};
