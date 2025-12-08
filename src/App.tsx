import './App.css'
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Step from './pages/Step';
import Prayers from './pages/Prayers';
import Contract from './pages/Contract';
// import Faq from './pages/Faq';

import ContactUs from './pages/ContactUs';

import Testingone from './pages/Testingone';
import ComingSoon from './components/ComingSoon';
// import NewContract from './pages/NewContract';
import ContractForm from './pages/ContractForm';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/about" element={<ComingSoon />} />
          <Route path="/steps" element={<Step />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/test-work" element={<Contract />} />
           {/* <Route path="/new-contract" element={<NewContract />} /> */}
          <Route path="/contract" element={<ContractForm />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/faq" element={<ComingSoon />} />
          <Route path="/test-contact" element={<ContactUs />} />
             <Route path="/contact" element={<ComingSoon />} />
            <Route path="/test-one" element={<Testingone />} />
           
        </Routes>
      </Router>
    </>
  )
}

export default App
