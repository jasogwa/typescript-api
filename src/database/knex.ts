var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile.ts')[environment]

module.exports = require('knex')(config)