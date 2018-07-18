'use strict';

const co = require('co');
const Promise = require('bluebird');
const awscred = Promise.promisifyAll(require('awscred'));

let initialized = false;

const init = co.wrap(function*() {
  if (initialized) {
    return;
  }

  process.env.restaurants_api = 'https://pj9qv95mp4.execute-api.us-east-1.amazonaws.com/dev/restaurants';
  process.env.restaurants_table = 'restaurants';
  process.env.AWS_REGION = 'us-east=1';
  process.env.cognito_user_pool_id = 'cognito_user_pool_id';
  process.env.cognito_client_id = 'cognito_client_id';

  const cred = (yield awscred.loadAsync()).credentials;

  process.env.AWS_ACCESS_KEY_ID = cred.accessKeyId;
  process.env.AWS_SECRET_ACCESS_KEY = cred.secretAccessKey;

  console.log('AWS Credentials loaded.');

  initialized = true;
});

module.exports = {
  init,
};
