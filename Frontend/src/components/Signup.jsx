import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(''); // Reset status message
  
    console.log("Form Data:", formData);  // Log the form data to check it
  
    try {
      const response = await fetch('http://localhost:4007/submit', {  // Correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatusMessage(`Failed to send message: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {statusMessage && (
          <div className={`text-center mt-4 ${statusMessage.includes('success') ? 'text-teal-600' : 'text-red-600'}`}>
            {statusMessage}
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
