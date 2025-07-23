import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="mb-12 bg-zinc-900 text-white p-6">
      <div className="flex justify-center md:justify-start items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-white">Baltic</span> Apprenticeships
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 