import React from "react";

export const ContactForm = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-6">I would love to hear from you!</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="message"
            name="message"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
