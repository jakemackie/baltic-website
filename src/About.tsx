import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">About Us</h1>
          <Link to="/" className="text-yellow-500 underline">Home</Link>
        </header>
        <div className="mb-6 p-4 border rounded bg-white">
          <p className="text-lg text-blue-900">
            Baltic Apprenticeships is dedicated to empowering the next generation of tech and business professionals. We provide high-quality apprenticeship programmes that combine real-world experience with expert training, helping individuals and businesses grow together.
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Our Mission</h2>
            <p>To inspire, develop, and support apprentices and employers, creating opportunities for growth and success in the digital age.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Our Values</h2>
            <ul className="list-disc pl-5 text-blue-900">
              <li>Innovation in learning</li>
              <li>Commitment to quality</li>
              <li>Supportive community</li>
              <li>Integrity and respect</li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Meet the Team</h2>
            <p>Our passionate team of trainers, mentors, and support staff are dedicated to helping every apprentice reach their full potential.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 