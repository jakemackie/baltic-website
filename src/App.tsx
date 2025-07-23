import { Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import Customers from './Customers';
import Contact from './Contact';
import About from './About';

function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-300">Baltic</span>Apprenticeships
          </div>
          <nav>
            <span className="cursor-pointer font-semibold">MENU</span>
          </nav>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">START YOUR JOURNEY HERE!</h2>
          <p className="mb-4">Welcome to the template website for Baltic Apprenticeships, allowing you to test and try out your web development skills</p>
          <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"><Link to="/services">OUR PROGRAMMES</Link></button>
        </div>
      </header>

      {/* Side Navbar */}
      <aside className="bg-gray-100 p-4 my-4 rounded shadow max-w-xs mx-auto">
        <ul className="space-y-2 mb-4">
          <li><Link to="/" className="text-blue-700 hover:underline">home</Link></li>
          <li><Link to="/about" className="text-blue-700 hover:underline">about us</Link></li>
          <li><Link to="/services" className="text-blue-700 hover:underline">services</Link></li>
          <li><Link to="/contact" className="text-blue-700 hover:underline">contact us</Link></li>
          <li><Link to="/customers" className="text-blue-700 hover:underline">Apprentice Reviews</Link></li>
        </ul>
        <button className="bg-blue-700 text-white px-4 py-2 rounded w-full font-semibold hover:bg-blue-800 transition"><Link to="/login">log in</Link></button>
      </aside>

      {/* Services Section */}
      <section id="services" className="py-8 bg-white">
        <h3 className="text-center text-2xl font-bold mb-6">services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <article className="p-4 border rounded shadow-sm bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">IT Infrastructure</h2>
            <p className="mb-4">IT is a progressive and ever changing industry, if you’re interested in working at the forefront of technology and innovation, a career in IT will bring out the best in you.</p>
            <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">Know More</button>
          </article>
          <article className="p-4 border rounded shadow-sm bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
            <p className="mb-4">Digital marketing is a job role that is constantly evolving, and as social media is a relatively new marketing tool, it makes sense that the generation that have grown up around tech are the ones taking the lead.</p>
            <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">Know More</button>
          </article>
          <article className="p-4 border rounded shadow-sm bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Software Development</h2>
            <p className="mb-4">Software developers are the creative minds behind the innovative computer programs, apps and websites we use today. Every business and organisation relies on software to function, so there is more demand than ever for talented developers.</p>
            <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">Know More</button>
          </article>
          <article className="p-4 border rounded shadow-sm bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Data</h2>
            <p className="mb-4">Data is used to help drive innovation, develop new products and services, and help an organisation better understand how it’s using its resources – whether that’s hospital beds, taxis, or even jet fighters – and work out how to operate more effectively.</p>
            <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">Know More</button>
          </article>
        </div>
      </section>

      {/* Apprentice Section */}
      <section id="apprentice" className="py-8 bg-gray-100">
        <h3 className="text-center text-2xl font-bold mb-6">Apprentices</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 border rounded bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Danielle Data</h3>
            <p>I think one of the biggest things I've learned throughout my apprenticeship is that it's not just about how good you are at data, you also need to maintain good relationships with people. You need to have the ability to explain what data means in a way that all can understand.</p>
          </div>
          <div className="p-4 border rounded bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Andy Apprentice</h3>
            <p>I think for me the main thing I have taken away from the apprenticeship is a confidence in what I do. I know now that if I say something, I'm right: I have confidence in the method I've used to come to my conclusion.</p>
          </div>
          <div className="p-4 border rounded bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Barry Baltic</h3>
            <p>The most important thing when we were discussing development options was that the apprenticeship we put in front of Barry was a good package - it was exactly what Barry was doing within their role. We could see it was going to give them lots of development opportunities and it felt like a good fit.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Useful Links</h2>
            <Link to="/" className="block hover:underline">Blog</Link>
            <Link to="/about" className="block hover:underline">About Us</Link>
            <Link to="/BalticApprenticeships" className="block hover:underline">Baltic</Link>
            <Link to="/vacancies" className="block hover:underline">Vacancies</Link>
            <Link to="/connect" className="block hover:underline">Connect</Link>
          </div>
          <div>
            <h2 className="font-bold mb-2">Privacy</h2>
            <Link to="/careers" className="block hover:underline">Careers</Link>
            <Link to="/contact" className="block hover:underline">Contact Us</Link>
            <Link to="/services" className="block hover:underline">Services</Link>
          </div>
          <div>
            <h2 className="font-bold mb-2">Have A Question</h2>
            <div className="mb-1">Address</div>
            <div className="mb-1">+44 123456789</div>
            <div>example@balticapprenticeships.com</div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
