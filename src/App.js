import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
