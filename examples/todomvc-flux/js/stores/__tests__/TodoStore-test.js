"use strict";

jest.autoMockOff();

describe('TodoStore', function() {
  var TodoStore;

  beforeEach(function() {
    TodoStore = require('../TodoStore.js');
  });

  it('creates a new item in the todo list', function() {
    TodoStore.create('test todo');
    var all = TodoStore.getAll() ,todos = Object.keys(all);

    expect(all[todos[0]].text).toBe('test todo');
  });

  it('updates a new item in the todo list', function() {
TodoStore.create('test todo');
var all = TodoStore.getAll() ,todos = Object.keys(all);

expect(all[todos[0]].text).toBe('test todo');
  });
});
