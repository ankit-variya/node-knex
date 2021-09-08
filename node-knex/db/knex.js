let local = 'local';
// const config = require('../knexfile')(local);

const config = require('../knexfile');
module.exports = require('knex')(config);