import React from "react"

const CONVERT_KIT_ID = 1696734

const SignUpForm = () => {
  const form = {
    id: CONVERT_KIT_ID,
    title: "Join My Newsletter",
    subTitle: `If you are interested in following my stories,
      please subscribe to receive articles straight to your inbox.`,
    buttonText: "Subscribe",
  }
  const baseURL = `https://app.convertkit.com/forms/${form.id}/subscriptions`

  return (
    <form action={baseURL} method="post">
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-xl" data-element="header">
            {form.title}
          </h2>
          <div>
            <p>{form.subTitle}</p>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="md:flex md:items-center mb-6">
            <input
              className="bg-gray-200 focus:border-color-blue-700 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
              id="inline-email"
              type="email"
              aria-label="Your email address"
              placeholder="Your email address"
              name="email_address"
              required
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <button
            data-element="submit"
            className="shadow bg-gray-800 hover:bg-blue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            <span>{form.buttonText}</span>
          </button>
        </div>

        <div className="mt-2">
          <span className="text-sm">
            I won’t send you spam. Unsubscribe at <em>any</em> time.
          </span>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm
