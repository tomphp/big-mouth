'use strict';

const co = require('co');
const expect = require('chai').expect;
const when = require('../steps/when');
const init = require('../steps/init').init;
const cheerio = require('cheerio');

describe('When we invoke the GET / endpoint', co.wrap(function () {
  before(co.wrap(function () {
    init();
  }));

  it('should return the page with 8 restaurants', co.wrap(function*() {
    const res = yield when.we_invoke_get_index();

    expect(res.statusCode).to.equal(200);
    expect(res.headers['Content-Type']).to.equal('text/html; charset=UTF-8');
    expect(res.body).to.not.be.null;

    const $ = cheerio.load(res.body);

    const restaurants = $('.restaurant', '#restaurantsUl');
    expect(restaurants.length).to.equal(8);
  }));
}));
