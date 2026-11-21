import "./App.css";
import AddExpenses from "./components/AddExpenses";
import Expenses from "./components/Expenses";
import Heading from "./components/Heading";
import Info from "./components/Info";
import AppContext from "./store/AppContext";

function App() {
  return (
    <AppContext>
      <div className="app-container">
        <Heading></Heading>
        <div className="info-container">
          <Info></Info>
        </div>
        <Expenses></Expenses>
        <AddExpenses></AddExpenses>
      </div>
    </AppContext>
  );
}

export default App;
