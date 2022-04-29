// module.exports = {
//   mongoUri: 'mongodb+srv://sandbox.fsckv.mongodb.net',
//   mongoOptions: {
//     user: 'm001-student',
//     pass: 'm001-mongodb-basics',
//     dbName: 'myFirstDatabase',
//     retryWrites: true,
//     w: 'majority',
//   },
// };
require('dotenv').config();

module.exports = {
  isVercel: process.env.IS_VERCEL || false,
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI,
  mongoOptions: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DATABASE,
    retryWrites: true,
    w: 'majority',
  },
};