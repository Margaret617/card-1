import './App.css';
import Hero from './components/Hero';
import FloatingHearts from './components/FloatingHearts';
import BackgroundAnimation from './components/BackgroundAnimation';
function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <div className="side-by-side-container">
        <Hero />
      </div>
      <FloatingHearts />
    </div>
  );
}

export default App;
