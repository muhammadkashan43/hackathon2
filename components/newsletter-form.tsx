'use client'

const NewsletterForm = () => {

  return (
    <div>
      <form className="flex gap-2 mt-4 items-center flex-col sm:flex-row">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none hover:border-[#0df2c2]"
          required
        />
        <button
          type="submit"
          className="px-40 sm:px-6 h-12 mt-2 rounded-lg bg-black text-white text-sm lg:text-base hover:text-black hover:bg-[#0df2c2] transition-all hover:transition-all"
        >
          Subscribe
        </button>
      </form>
      <div className="mr-9 mt-2 text-[13px] sm:text-[14px]">
        By subscribing you agree to with our <u>Privacy policy</u>
      </div>
    </div>
  )
}

export default NewsletterForm

