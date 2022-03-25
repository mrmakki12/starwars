import './App.css';
import { Header } from './components/Header/Header.js';
import { Results } from './components/Results/Results';
import { Search } from './components/Search/Search.js';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Search />
        <Results />
      </main>
    </div>
  );
}

export default App;
