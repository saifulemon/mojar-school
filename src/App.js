import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './components/About-us/AboutUs';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import ChooseUs from './components/Choose-us/ChooseUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/pages' element={<Features />} />
        <Route path='/blog' element={<ChooseUs />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
