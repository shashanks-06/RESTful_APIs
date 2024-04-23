// 1. External Snapshots

import renderer from "react-test-renderer";

test("my component should render correctly", () => {
  const component = renderer.create(<MyComponent />).toJSON();
  expect(component).toMatchSnapshot();
});

test("myFunction should return correct value", () => {
  expect(myFunction()).toMatchSnapshot();
});

// Terminal: >>> jest --updateSnapshot
//           >>> jest --watch --updateSnapshot
// ------------------------------------------------------------------------------------------

// 2. Internal Snapshots

test("it renders correctly", () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
  <a className="normal"
  href="https://example.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
  >
  Example Site
  </a>
  `);
});

// 3. Property Matchers

it("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});
