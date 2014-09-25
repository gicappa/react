'use strict';

jest.autoMockOff();

describe('TodoStore', function() {
  var store = TodoStore;

  describe('create a new todo', function () {

    beforeEach(function() {
      TodoStore.create("new fancy todo");
    });

    it('created ', function() {
      
    });

  })
});
