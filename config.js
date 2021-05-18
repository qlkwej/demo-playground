require('dotenv').config()
const Xendit = require('xendit-node');

const x = new Xendit({
  secretKey: process.env.SECRET_KEY,
});

module.exports = x
