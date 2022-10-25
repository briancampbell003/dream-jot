const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedDreams = require('./dreamData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedDreams();

  process.exit(0);
};

seedAll();
