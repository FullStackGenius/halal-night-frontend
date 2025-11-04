
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from './pages/Step';
import Prayers from './pages/Prayers';
import Contract from './pages/Contract';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Example from './pages/Example';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/example" element={<Example />} />
          <Route path="/steps" element={<Step />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
