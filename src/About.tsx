import { Card, CardContent } from '@/components/ui/card';

function About() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="max-w-2xl mx-auto flex-1">
        <Card className="mb-6 border-zinc-200 bg-white">
          <CardContent className="p-4">
            <p className="text-lg text-zinc-900">
              Baltic Apprenticeships is dedicated to empowering the next generation of tech and business professionals. We provide high-quality apprenticeship programmes that combine real-world experience with expert training, helping individuals and businesses grow together.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Our Mission</h2>
              <p className="text-zinc-800">To inspire, develop, and support apprentices and employers, creating opportunities for growth and success in the digital age.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Our Values</h2>
              <ul className="list-disc pl-5 text-zinc-800">
                <li>Innovation in learning</li>
                <li>Commitment to quality</li>
                <li>Supportive community</li>
                <li>Integrity and respect</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Meet the Team</h2>
              <p className="text-zinc-800">Our passionate team of trainers, mentors, and support staff are dedicated to helping every apprentice reach their full potential.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About; 