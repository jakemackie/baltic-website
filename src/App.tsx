import { Routes, Route } from 'react-router-dom';
import Services from './Services';
import Customers from './Customers';
import About from './About';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Contact from './Contact';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home from './Home';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogTrigger asChild>
          {/* Hidden, triggers are in navbar/footer */}
          <button style={{ display: 'none' }} />
        </DialogTrigger>
        <DialogContent className="mx-auto container bg-transparent">
          <DialogHeader>
            <DialogTitle className="text-zinc-900 sr-only">Contact Us</DialogTitle>
          </DialogHeader>
          <Contact />
        </DialogContent>
      </Dialog>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
      <Footer onContactClick={() => setContactOpen(true)} />
    </div>
  );
}

export default App;
