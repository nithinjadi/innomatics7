import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
    alert('Thank you for reaching out! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have a question about our services or 
        want to work together, feel free to reach out.
      </p>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
