import React, { useState } from 'react'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    cargoDetails: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      dropoffLocation: '',
      cargoDetails: '',
    })
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-[#0a2c5e] mb-6">
        Get a Quote
      </h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="pickupLocation"
            className="block text-gray-700 font-medium mb-2"
          >
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="dropoffLocation"
            className="block text-gray-700 font-medium mb-2"
          >
            Drop-off Location
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="cargoDetails"
          className="block text-gray-700 font-medium mb-2"
        >
          Cargo Details
        </label>
        <textarea
          id="cargoDetails"
          name="cargoDetails"
          value={formData.cargoDetails}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2c5e]"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#e6c200] hover:bg-[#ffda22] text-[#0a2c5e] font-semibold px-6 py-3 rounded-md transition-colors w-full"
      >
        Submit Quote Request
      </button>
    </form>
  )
}
export default ContactForm
