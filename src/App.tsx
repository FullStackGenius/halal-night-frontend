import './App.css'
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from './pages/Step';
import Prayers from './pages/Prayers';
import Faq from './pages/Faq';
// import ComingSoon from './components/ComingSoon';
import ContractForm from './pages/ContractForm';
import ContactUsPage from './pages/ContactUsPage';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/steps" element={<Step />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/contract" element={<ContractForm />} />
          <Route path="/faq" element={<Faq />} />
           {/* <Route path="/faq" element={<ComingSoon />} /> */}
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
