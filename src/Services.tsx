function Services() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Our Services</h1>
          <a href="/" className="text-yellow-500 underline">Home</a>
        </header>
        <div className="space-y-4">
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">IT Infrastructure</h2>
            <p>IT is a progressive and ever changing industry, if you’re interested in working at the forefront of technology and innovation, a career in IT will bring out the best in you.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Digital Marketing</h2>
            <p>Digital marketing is a job role that is constantly evolving, and as social media is a relatively new marketing tool, it makes sense that the generation that have grown up around tech are the ones taking the lead.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Software Development</h2>
            <p>Software developers are the creative minds behind the innovative computer programs, apps and websites we use today. Every business and organisation relies on software to function, so there is more demand than ever for talented developers.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-semibold text-blue-900 mb-1">Data</h2>
            <p>Data is used to help drive innovation, develop new products and services, and help an organisation better understand how it’s using its resources – whether that’s hospital beds, taxis, or even jet fighters – and work out how to operate more effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services; 