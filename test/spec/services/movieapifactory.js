'use strict';

describe('Service: movieApiFactory', function () {

  // load the service's module
  beforeEach(module('predpolAppApp'));

  // instantiate service
  var movieApiFactory;
  beforeEach(inject(function (_movieApiFactory_) {
    movieApiFactory = _movieApiFactory_;
  }));

  it('should do something', function () {
    expect(!!movieApiFactory).toBe(true);
  });

});
