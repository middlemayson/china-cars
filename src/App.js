import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

import Header from './components/header/Header';
import Companies from './pages/company/Companies';
import CompanyOnePage from './pages/companyOnePage/CompanyOnePage';

import './styles/main.css';
import './styles/desktop.css'
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
