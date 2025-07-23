import { Link } from 'react-router-dom';

interface FooterProps {
  onContactClick?: () => void;
}

function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-zinc-900 text-white py-8 mt-8">
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
          <button onClick={onContactClick} className="block hover:underline text-left w-full mt-2 text-zinc-100">Contact Us</button>
        </div>
        <div>
          <h2 className="font-bold mb-2">Privacy</h2>
          <Link to="/careers" className="block hover:underline">Careers</Link>
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
  );
}

export default Footer; 