export const ContactForm = () => {
  return (
    <div>
      <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-6 font-medium text-center">
        Contact
      </h2>
      <p className="mb-8 text-gray-300 text-center">
        I would love to hear from you!
      </p>
      <form className="max-w-md mx-auto space-y-5">
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-3 border border-white/10 bg-white/[0.02] rounded-lg focus:bg-white/[0.05] focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-3 border border-white/10 bg-white/[0.02] rounded-lg focus:bg-white/[0.05] focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full p-3 border border-white/10 bg-white/[0.02] rounded-lg focus:bg-white/[0.05] focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600 resize-none"
            id="message"
            name="message"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-yellow-500 text-black px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
