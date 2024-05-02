import sum from "../sum";

function App() {
  const sumTest = sum(1, 2, 3).toString();

  return (
    <>
      <div id="app">{sumTest}</div>
    </>
  );
}

export default App;
