// External Snapshots

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

// Internal Snapshots

test("it renders correctly", () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});
