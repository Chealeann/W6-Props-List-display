import Card from "./components/Card";
import Header from "./components/Header";
import { cardsData } from "./data";

function App() {
  return (
  <>
    <Header/>
    <div className="cards-view">
      <div className="cards-grid">
        { cardsData.map((data) => (<Card data={data}/>)) }
      </div>
    </div>
  </>
  );
}

export default App;