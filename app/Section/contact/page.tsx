
export default function Contact() {
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Get In Touch With Us</h1>
      <p className="text-center mb-8">
        For more information about our product and services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!
      </p>

      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name
          </label>
          <textarea
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <textarea
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline- none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
            Subject (Optional)
          </label>
          <textarea
            id="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-[#007580] hover:bg-[#007580] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}