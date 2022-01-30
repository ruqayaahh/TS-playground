import "./App.css";

function App({ onItemClick }) {
  const items = ["Biro", "Pen", "Paper", "Ruler", "Stationery"];

  const map = (item, index) => (
    <div onClick={onItemClick} key={index}>
      {item}
    </div>
  );
  return <div className="App">{items.map(map)}</div>;
}

export default App;
