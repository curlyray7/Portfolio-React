import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Header />
        </header>
        <footer className="App-footer">
            <Footer />
        </footer>
    </div>
  );
}

export default App;