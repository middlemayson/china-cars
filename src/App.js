// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './utils/scrollToTop';


import Header from './components/header/Header';
// import Brand from './pages/brand/Brand';
// import Companies from './pages/company/Companies';
import Company from './pages/company/Company';
// import Home from './pages/home/Home';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      
        <Header />
        {/* <Companies /> */}
        <Company />
            
            {/* <Route path='/companies/:id' element={<Companies />} /> */}
          
    </div>
  );
}

export default App;
