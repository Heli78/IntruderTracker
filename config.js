const dotenv = require('dotenv');

dotenv.config();

const config = {
  uri: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  expiresIn: '30d',
  saltRounds: 10,
};

module.exports = config;
