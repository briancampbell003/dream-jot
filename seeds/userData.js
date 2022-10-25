const { User } = require('../models');

const userdata = [
  {
    username: 'The_Original_Dream_Guy',
    email: 'guy@dream.com',
    password: 'topsecret',
  },
  {
    username: 'Dreams_All_Night',
    email: 'dreams@night.com',
    password: 'topsecret',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
