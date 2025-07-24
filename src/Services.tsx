import { Card, CardContent } from '@/components/ui/card';

function Services() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="max-w-2xl mx-auto flex-1">
        <div className="space-y-4">
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">IT Infrastructure</h2>
              <p className="text-zinc-800">IT is a progressive and ever changing industry, if you’re interested in working at the forefront of technology and innovation, a career in IT will bring out the best in you.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Digital Marketing</h2>
              <p className="text-zinc-800">Digital marketing is a job role that is constantly evolving, and as social media is a relatively new marketing tool, it makes sense that the generation that have grown up around tech are the ones taking the lead.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Software Development</h2>
              <p className="text-zinc-800">Software developers are the creative minds behind the innovative computer programs, apps and websites we use today. Every business and organisation relies on software to function, so there is more demand than ever for talented developers.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1">Data</h2>
              <p className="text-zinc-800">Data is used to help drive innovation, develop new products and services, and help an organisation better understand how it’s using its resources – whether that’s hospital beds, taxis, or even jet fighters – and work out how to operate more effectively.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Services; 