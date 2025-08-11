import React, { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'
const CTAContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const handleChange = (
    e
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quick contact form submitted:', formData)
    alert('Thank you for your message! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-[#0a2c5e] mb-6">
        Get a Quick Quote
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="quick-name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="quick-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="quick-phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="quick-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="quick-email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="quick-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="quick-message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="quick-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your transportation needs"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#0a2c5e] hover:bg-[#76c3ef] text-[#ffff] font-semibold px-6 py-3 rounded-md transition-colors w-full flex items-center justify-center"
        >
          <span>Request a Quote</span>
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
export default CTAContactForm
