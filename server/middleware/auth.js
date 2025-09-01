import jwt from 'jsonwebtoken';

// authentication so Admin and Log in user can post
const auth = (req, res, next) => {
  //token from req in order so that only admin
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({ success: false, message: 'Invalid Token' });
  }
};

export default auth;
