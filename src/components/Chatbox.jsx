import React, { useState } from 'react';

const Chatbox = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log({ name, email, message }); // Handle the message submission (e.g., send to the backend)

    alert('Message sent successfully!');
    e.target.reset(); // Clear the form
  };

  return (
    <div>
      <button
  onClick={toggleChatbox}
  className="fixed bottom-5 right-5 w-16 h-16 bg-rose-400 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-rose-500 z-50 transition-all"
  aria-label="Toggle Chatbox"
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-8 h-8"
>
  <path d="M12 2C6.486 2 2 6.098 2 11c0 2.252.896 4.316 2.387 5.886L3 21l3.401-.894C8.42 21.692 10.12 22 12 22c5.514 0 10-4.098 10-9S17.514 2 12 2zm0 16c-1.733 0-3.36-.469-4.758-1.286l-1.284-.765-1.96.516.513-1.93-.835-1.04C3.399 12.785 3 11.911 3 11c0-3.859 3.589-7 8-7s8 3.141 8 7-3.589 7-8 7zm3.916-9.586l-3.915 3.267-3.016-1.76-.984 1.755 4.016 2.344 4.915-4.101-.992-1.505z" />
</svg>
</button>


      {isChatboxOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center bg-rose-400 text-white px-4 py-3 rounded-t-lg">
            <span>Send a Message</span>

            <button
              onClick={toggleChatbox}
              className="text-xl font-bold hover:text-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✖
            </button>
            
          </div>
          <form
            id="messageForm"
            onSubmit={handleSubmit}
            className="flex flex-col px-4 py-3 space-y-3"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
