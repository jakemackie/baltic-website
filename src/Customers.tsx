function Customers() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Apprentice Reviews</h1>
          <a href="/" className="text-yellow-500 underline">Home</a>
        </header>
        <div className="space-y-4">
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Danielle Data</h2>
            <p>I think one of the biggest things I've learned throughout my apprenticeship is that it's not just about how good you are at data, you also need to maintain good relationships with people. You need to have the ability to explain what data means in a way that all can understand.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Andy Apprentice</h2>
            <p>I think for me the main thing I have taken away from the apprenticeship is a confidence in what I do. I know now that if I say something, I'm right: I have confidence in the method I've used to come to my conclusion.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Barry Baltic</h2>
            <p>The most important thing when we were discussing development options was that the apprenticeship we put in front of Barry was a good package - it was exactly what Barry was doing within their role. We could see it was going to give them lots of development opportunities and it felt like a good fit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers; 