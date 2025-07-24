import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface NavbarProps {
  onContactClick?: () => void;
}

function Navbar({ onContactClick }: NavbarProps) {
  return (
    <nav className="mb-12 bg-zinc-900 text-white p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-5xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-white mb-4 md:mb-0">
          <span className="text-white">Baltic</span> Apprenticeships
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Link to="/" className="hover:underline text-white">Home</Link>
          <Link to="/about" className="hover:underline text-white">About Us</Link>
          <Link to="/services" className="hover:underline text-white">Services</Link>
          <Link to="/customers" className="hover:underline text-white">Apprentice Reviews</Link>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="secondary" onClick={onContactClick} className="font-semibold">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;