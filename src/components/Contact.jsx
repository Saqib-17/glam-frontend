import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f0ded2] py-12">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
      <p className="text-lg text-gray-700">We'd love to hear from you! Choose how you'd like to connect with us:</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
      {/* Connect on Facebook */}
      <a
        href="https://www.facebook.com/glamkey.glam"
        className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.ibb.co.com/dKQz2mx/fb-1.png"
          alt="Facebook"
          className="rounded-lg w-32 h-32 object-contain mb-4"
        />
        <h3 className="font-bold text-gray-800 text-lg mb-2">Connect on Facebook</h3>
        <p className="text-gray-600">Follow us and send us a message.</p>
      </a>

      {/* Connect on WhatsApp */}
      <a
        href="https://wa.me/yourphonenumber"
        className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.ibb.co.com/WnShDnF/watsapp-1.jpg"
          alt="WhatsApp"
          className="rounded-lg w-32 h-32 object-contain mb-4"
        />
        <h3 className="font-bold text-gray-800 text-lg mb-2">Connect on WhatsApp</h3>
        <p className="text-gray-600">Chat with us for quick inquiries.</p>
      </a>

      {/* Book an Appointment */}
      <a
        href="https://calendly.com/your-calendar-link"
        className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.ibb.co.com/h9Nd9N8/book-1.png"
          alt="Book Appointment"
          className="rounded-lg w-32 h-32 object-contain mb-4"
        />
        <h3 className="font-bold text-gray-800 text-lg mb-2">Book an Appointment</h3>
        <p className="text-gray-600">Schedule a personal visit to our store.</p>
      </a>

      {/* Schedule a Video Call */}
      <a
        href="https://zoom.us/your-zoom-link"
        className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.ibb.co.com/TR3gT48/zoom-call.png"
          alt="Video Call"
          className="rounded-lg w-32 h-32 object-contain mb-4"
        />
        <h3 className="font-bold text-gray-800 text-lg mb-2">Schedule a Video Call</h3>
        <p className="text-gray-600">Meet us virtually for a consultation.</p>
      </a>
    </div>
  </section>
  );
};

export default Contact;
