import { Routes, Route } from 'react-router-dom';
import Services from './Services';
import Customers from './Customers';
import About from './About';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home from './Home';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
