import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Trangchu/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;