import renderer from "react-test-renderer";

test("my component should render correctly", () => {
  const component = renderer.create(<MyComponent />).toJSON();
  expect(component).toMatchSnapshot();
});
