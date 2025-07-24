
import React, { useState } from 'react';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, apostrophes, and hyphens'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be at most 100 characters'),
  phone: z
    .string()
    .regex(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      'Please enter a valid 10-digit Phone Number (with optional country code)'
    ),
  email: z
    .email('Please enter a valid Email')
    .max(100, 'Email must be at most 100 characters'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message must be at most 1000 characters'),
});

function Contact() {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    phone: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0].message);
      setSuccess(false);
      return;
    }
    setError(null);
    setSuccess(true);
    setForm({ name: '', subject: '', phone: '', email: '', message: '' });
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md border-neutral-200">
        <CardContent className="p-6">
          {error && <div className="mb-4 bg-red-100 text-red-800 p-2 rounded text-center">{error}</div>}
          {success && <div className="mb-4 bg-green-100 text-green-800 p-2 rounded text-center">Your Query will be Solved or Answered Soon!</div>}
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Name"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Message"
              id="message"
              value={form.message}
              onChange={handleChange}
              className="resize-none"
            />
            <Button type="submit" className="w-full">SUBMIT NOW</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact; 