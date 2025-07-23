import React, { useState } from 'react';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    phone: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function validate() {
    if (form.name.length < 4) {
      setError('Please Enter valid Name');
      return false;
    }
    if (form.subject.length < 10) {
      setError('Please Enter Correct Subject');
      return false;
    }
    if (isNaN(Number(form.phone)) || form.phone.length !== 10) {
      setError('Please Enter valid Phone Number');
      return false;
    }
    if (!form.email.includes('@') || form.email.length < 6) {
      setError('Please Enter valid Email');
      return false;
    }
    if (form.message.length <= 20) {
      setError('Please Enter More Than 20 Characters');
      return false;
    }
    setError('');
    return true;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm({ name: '', subject: '', phone: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow border-t-8 border-yellow-400">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">Contact us</h2>
        {error && <div className="mb-4 bg-red-200 text-red-800 p-2 rounded text-center">{error}</div>}
        {success && <div className="mb-4 bg-green-200 text-green-800 p-2 rounded text-center">Your Query will be Solved or Answered Soon!</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Message"
              id="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-2 rounded h-24"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded hover:bg-yellow-300 transition"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs; 