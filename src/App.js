import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Hero from './components/hero/Hero';
import "./App.css"

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Header />
        </header>
        <main className="App-body">
            <Hero/>
        </main>
        <footer className="App-footer">
            <Footer />
        </footer>
    </div>
  );
}

export default App;