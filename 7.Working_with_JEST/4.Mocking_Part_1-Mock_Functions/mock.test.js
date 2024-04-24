function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);

expect(mockCallback.mock.calls[0][0]).toBe(0);
expect(mockCallback.mock.calls[1][0]).toBe(1);

expect(mockCallback.mock.results[0].value).toBe(42);
expect(mockCallback.mock.results[1].value).toBe(43);

/*----------------------------------------------------------------------------------------------*/

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
