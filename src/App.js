import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';


import Header from './components/header/Header';
// import Brand from './pages/brand/Brand';
import Companies from './pages/company/Companies';
// import Company from './pages/company/Company';
// import Home from './pages/home/Home';
import './styles/main.css';
import CompanyOnePage from './pages/companyOnePage/CompanyOnePage';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path='/' element={<Companies />} />
          <Route path='/:ident' element={<CompanyOnePage />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
