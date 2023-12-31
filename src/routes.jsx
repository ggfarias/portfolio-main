import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import PageNotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
