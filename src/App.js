import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
