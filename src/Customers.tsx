import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

function Customers() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="max-w-2xl mx-auto flex-1">
        <div className="space-y-4">
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900 mb-1">Danielle Data</h2>
              <p className="text-zinc-800">I think one of the biggest things I've learned throughout my apprenticeship is that it's not just about how good you are at data, you also need to maintain good relationships with people. You need to have the ability to explain what data means in a way that all can understand.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900 mb-1">Andy Apprentice</h2>
              <p className="text-zinc-800">I think for me the main thing I have taken away from the apprenticeship is a confidence in what I do. I know now that if I say something, I'm right: I have confidence in the method I've used to come to my conclusion.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900 mb-1">Barry Baltic</h2>
              <p className="text-zinc-800">The most important thing when we were discussing development options was that the apprenticeship we put in front of Barry was a good package - it was exactly what Barry was doing within their role. We could see it was going to give them lots of development opportunities and it felt like a good fit.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Customers; 