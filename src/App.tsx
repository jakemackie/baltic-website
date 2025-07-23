import { Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Customers from './Customers';
import About from './About';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Contact from './Contact';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      {/* Contact Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogTrigger asChild>
          {/* Hidden, triggers are in sidebar/footer */}
          <button style={{ display: 'none' }} />
        </DialogTrigger>
        <DialogContent className="max-w-lg w-full bg-transparent">
          <DialogHeader>
            <DialogTitle className="text-zinc-900 sr-only">Contact Us</DialogTitle>
          </DialogHeader>
          <Contact />
        </DialogContent>
      </Dialog>

      {/* Side Navbar */}
      <Card className="bg-white border-zinc-200 max-w-xs mx-auto my-4">
        <CardContent className="p-4">
          <ul className="space-y-2 mb-4">
            <li><Link to="/" className="text-zinc-900 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-zinc-900 hover:underline">About Us</Link></li>
            <li><Link to="/services" className="text-zinc-900 hover:underline">Services</Link></li>
            <li>
              <button onClick={() => setContactOpen(true)} className="text-zinc-900 hover:underline w-full text-left">Contact Us</button>
            </li>
            <li><Link to="/customers" className="text-zinc-900 hover:underline">Apprentice Reviews</Link></li>
          </ul>
          <Link to="#" className="block w-full text-center px-4 py-2 rounded font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition">Log In</Link>
        </CardContent>
      </Card>

      {/* Services Section */}
      <section id="services" className="py-8">
        <h3 className="text-center text-2xl font-bold mb-6 text-zinc-900">services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[{
            title: 'IT Infrastructure',
            desc: 'IT is a progressive and ever changing industry, if you’re interested in working at the forefront of technology and innovation, a career in IT will bring out the best in you.'
          }, {
            title: 'Digital Marketing',
            desc: 'Digital marketing is a job role that is constantly evolving, and as social media is a relatively new marketing tool, it makes sense that the generation that have grown up around tech are the ones taking the lead.'
          }, {
            title: 'Software Development',
            desc: 'Software developers are the creative minds behind the innovative computer programs, apps and websites we use today. Every business and organisation relies on software to function, so there is more demand than ever for talented developers.'
          }, {
            title: 'Data',
            desc: 'Data is used to help drive innovation, develop new products and services, and help an organisation better understand how it’s using its resources – whether that’s hospital beds, taxis, or even jet fighters – and work out how to operate more effectively.'
          }].map((service) => (
            <Card key={service.title} className="border-zinc-200 bg-white">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-zinc-900 mb-2">{service.title}</h2>
                <p className="mb-4 text-zinc-800">{service.desc}</p>
                <span className="inline-block px-3 py-1 rounded bg-zinc-900 text-white text-sm">Know More</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Apprentice Section */}
      <section id="apprentice" className="py-8">
        <h3 className="text-center text-2xl font-bold mb-6 text-zinc-900">Apprentices</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[{
            name: 'Danielle Data',
            desc: `I think one of the biggest things I've learned throughout my apprenticeship is that it's not just about how good you are at data, you also need to maintain good relationships with people. You need to have the ability to explain what data means in a way that all can understand.`
          }, {
            name: 'Andy Apprentice',
            desc: `I think for me the main thing I have taken away from the apprenticeship is a confidence in what I do. I know now that if I say something, I'm right: I have confidence in the method I've used to come to my conclusion.`
          }, {
            name: 'Barry Baltic',
            desc: `The most important thing when we were discussing development options was that the apprenticeship we put in front of Barry was a good package - it was exactly what Barry was doing within their role. We could see it was going to give them lots of development opportunities and it felt like a good fit.`
          }].map((apprentice) => (
            <Card key={apprentice.name} className="border-zinc-200 bg-white">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-zinc-900">{apprentice.name}</h3>
                <p className="text-zinc-800">{apprentice.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer onContactClick={() => setContactOpen(true)} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default App;
