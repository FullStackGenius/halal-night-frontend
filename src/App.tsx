import './App.css'
// import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Step from './pages/Step';
// import Prayers from './pages/Prayers';
import Contract from './pages/Contract';
// import Faq from './pages/Faq';

import ContactUs from './pages/ContactUs';

import Testingone from './pages/Testingone';
import ComingSoon from './components/ComingSoon';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/steps" element={<Step />} />
          <Route path="/prayers" element={<Prayers />} /> */}
           <Route path="/about" element={<ComingSoon />} />
          <Route path="/steps" element={<ComingSoon />} />
          <Route path="/prayers" element={<ComingSoon />} />
          <Route path="/test-work" element={<Contract />} />
           {/* <Route path="/contract" element={<Home />} /> */}
             <Route path="/contract" element={<ComingSoon />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/faq" element={<ComingSoon />} />
          <Route path="/test-contact" element={<ContactUs />} />
           {/* <Route path="/contact" element={<Home />} /> */}
             <Route path="/contact" element={<ComingSoon />} />
          
            <Route path="/test-one" element={<Testingone />} />
           
        </Routes>
      </Router>
    </>
  )
}

export default App
