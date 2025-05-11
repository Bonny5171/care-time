import knex from 'knex';
// import config from '../../server/knexfile';
const config = require('../../server/knexfile');

const db = knex(config.development);

export default db;
