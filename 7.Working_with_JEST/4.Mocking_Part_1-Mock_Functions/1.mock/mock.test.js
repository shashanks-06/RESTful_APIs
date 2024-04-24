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

/*----------------------------------------------------------------------------------------------*/

expect(someMockFunction.mock.calls.length).toBe(1);

expect(someMockFunction.mock.calls[0][1]).toBe("first argument");

expect(someMockFunction.mock.calls[0][1]).toBe("second argument");

expect(someMockFunction.mock.results[0].value).toBe("return value");

expect(someMockFunction.mock.contexts[0]).toBe(element);

expect(someMockFunction.mock.instances.length).toBe(2);

expect(someMockFunction.mock.instances[0].name).toBe("test");

/*----------------------------------------------------------------------------------------------*/

const myMock = jest.fn();
console.log(myMock);
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValueOnce(true);
console.log(myMock(), myMock(), myMock(), myMock());
// >            10      'x'       true      true

/*----------------------------------------------------------------------------------------------*/

const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter((num) => filterTestFn(num));

console.log(result); // 11

console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

/*----------------------------------------------------------------------------------------------*/

const myMockFnc = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));

const myMockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

myMockFn((err, val) => console.log(val));
