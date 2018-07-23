'use strict';

const co = require('co');

let initialized = false;

const init = co.wrap(function*() {
  if (initialized) {
    return;
  }

  process.env.restaurants_api = 'https://pj9qv95mp4.execute-api.us-east-1.amazonaws.com/dev/restaurants';
  process.env.restaurants_table = 'restaurants';
  process.env.AWS_REGION = 'us-east-1';
  process.env.cognito_user_pool_id = 'us-east-1_j9e2XXQn1';
  process.env.cognito_client_id = 'cognito_client_id';
  process.env.cognito_server_client_id = '6h2vibgpq99g8qa9mapl4p60j4';

  console.log('AWS Credentials loaded.');

  initialized = true;
});

module.exports = {
  init,
};
