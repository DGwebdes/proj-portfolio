import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm(
    "https://formspree.io/f/mnnjeedo"
  );

  return (
    <>
      <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-6 font-medium text-center">
        Contact
      </h2>
      <p className="mb-8 text-gray-300 text-center">
        I would love to hear from you!
      </p>
      <form className="max-w-md mx-auto space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-3 border border-white/10 bg-white/2 rounded-lg focus:bg-white/5 focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600"
            type="text"
            id="name"
            name="name"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-3 border border-white/10 bg-white/2 rounded-lg focus:bg-white/5 focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600"
            type="email"
            id="email"
            name="email"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label
            className="block text-left mb-2 text-sm text-gray-400"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full p-3 border border-white/10 bg-white/2 rounded-lg focus:bg-white/5 focus:border-white/20 focus:outline-none transition-all text-gray-200 placeholder:text-gray-600 resize-none"
            id="message"
            name="message"
            rows={4}
            required
            disabled={state.submitting}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {state.succeeded && (
          <p className="text-green-400 text-sm text-center">
            Message sent successfully! 🎉
          </p>
        )}

        {state.errors && (
          <div className="text-red-400 text-sm text-center space-y-2">
            <p>Something went wrong.</p>
            <button
              onClick={reset}
              className="text-gray-400 hover:text-gray-500 underline underline-offset-2 transition-colors"
            >
              Please try again.
            </button>
          </div>
        )}

        <button
          className="w-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 px-4 py-3 rounded-lg hover:bg-yellow-500/30 hover:border-yellow-500 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};
