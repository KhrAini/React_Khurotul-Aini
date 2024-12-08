import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: "", email: "", message: "" });
  };

  return (
    <section className="p-8 mt-12 bg-[#F4F4F9] text-[#1A4314]">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-6 rounded shadow-md space-y-6"
        >
          <div>
            <label htmlFor="username" className="block text-lg font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#32CD30]"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#32CD30]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#32CD30]"
              placeholder="Write your message"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1A4314] text-white font-bold py-2 px-4 rounded hover:bg-[#2C5E1A] transition"
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="flex-1 bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Submitted Data</h3>
            <p>
              <span className="font-semibold">Username:</span>{" "}
              {submittedData.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {submittedData.email}
            </p>
            <p>
              <span className="font-semibold">Message:</span>{" "}
              {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactUs;
