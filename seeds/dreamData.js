const { Dream } = require('../models');

const dreamdata = [

  {
    title: 'Beach Sunrise',
    content: 'Sun setting in the horizon with waves lapping the shore.',
    date: 'August 14, 2016',
    user_id: 1,
    // tag: [
    //   'false', 'true',
    //   'true',  'false',
    //   'false', 'false',
    //   'true',  'true',
    //   'false'
    // ],
    private: 0,
    lucid: 0,
    nightmare: 0,
  },
  {
    title: 'Frozen River',
    content: 'Me and my friends all ice-skating down a frozen river.',
    date: 'August 19, 2016',
    user_id: 1,
    // tag: [
    //   'false', 'true',
    //   'true',  'false',
    //   'false', 'false',
    //   'true',  'true',
    //   'false'
    // ],
    private: 0,
    lucid: 1,
    nightmare: 5,
  },
  {
    title: 'Forgot to study',
    content: 'At my high school physics class and we have a big test but I forgot to study',
    date: 'August 20, 2016',
    user_id: 2,
    // tag: [
    //   'false', 'true',
    //   'true',  'false',
    //   'false', 'false',
    //   'true',  'true',
    //   'false'
    // ],
    private: 0,
    lucid: 0,
    nightmare: 85,
  },
  {
    title: 'Scary robots',
    content: 'Getting attacked by evil humanoid machines',
    date: 'August 22, 2016',
    user_id: 2,
    // tag: [
    //   'false', 'true',
    //   'true',  'false',
    //   'false', 'false',
    //   'true',  'true',
    //   'false'
    // ],
    private: 0,
    lucid: 0,
    nightmare: 99,
  },
  {
    title: 'Castle rescue mission',
    content: 'Going on an epic journey to rescue my cousin from a castle',
    date: 'August 23, 2016',
    user_id: 2,
    // tag: [
    //   'false', 'true',
    //   'true',  'false',
    //   'false', 'false',
    //   'true',  'true',
    //   'false'
    // ],
    private: 0,
    lucid: 1,
    nightmare: 50,
  },

];

const seedDreams = () => Dream.bulkCreate(dreamdata);

module.exports = seedDreams;
