const users = require('./users/users.service.js');
const drawings = require('./drawings/drawings.service.js');
const geocodes = require('./geocodes/geocodes.service.js');
const emails = require('./emails/emails.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(drawings);
  app.configure(geocodes);
  app.configure(emails);
};
