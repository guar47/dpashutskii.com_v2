import React from "react"

const SignUpForm = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h2 className="text-xl mt-5 mb-2" data-element="header">
          My newsletter
        </h2>
        <div>
          <p className="mb-2 font-headers font-medium">
            If you intereseted in following my journey of building bootstrapped
            products in public and growing YouTube channel, subscribe to my
            newsletter.
          </p>
        </div>
      </div>

      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/dpashutskii/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
          className="font-headers"
        >
          <div className="revue-form-group">
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-2/3">
                <input
                  className="revue-form-field bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
                  id="member_email"
                  type="email"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  name="member[email]"
                  required
                />
              </div>
            </div>
          </div>
          <div className="revue-form-group">
            <div className="md:w-2/3">
              <div className="md:flex md:items-center mb-3">
                <input
                  className="revue-form-field bg-gray-200 focus:border-color-blue-700 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
                  aria-label="Your first name (Optional)"
                  id="member_first_name"
                  name="member[first_name]"
                  placeholder="Your first name (Optional)"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="revue-form-actions">
            <div className="md:w-2/3">
              <input
                className="shadow bg-gray-800 hover:bg-blue-600 focus:ring focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
          </div>
          <div className="mt-1 revue-form-footer">
            <span className="text-sm text-gray-600">
              By subscribing, you agree with Revue’s{" "}
              <a rel="noreferrer" target="_blank" href="https://www.getrevue.co/terms">
                Terms of Service
              </a>{" "}
              and{" "}
              <a rel="noreferrer" target="_blank" href="https://www.getrevue.co/privacy">
                Privacy Policy
              </a>
              .
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
