import React, { useEffect } from 'react'
import FleetItem from '../components/FleetItem/FleetItem'
import CTAButton from '../components/CTAButton/CTAButton'
import CTAContactForm from '../components/CTAContactForm/CTAContactForm'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FleetPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);
  const fleetData = [
    {
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Heavy Duty Flatbed',
      specs: {
        capacity: 'Up to 50,000 lbs',
        dimensions: "48' x 8'6\"",
        features: [
          'Reinforced steel frame',
          'Multiple tie-down points',
          'Extendable options available',
        ],
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1563411544518-4976b7091efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      title: 'Lowboy Trailer',
      specs: {
        capacity: 'Up to 80,000 lbs',
        dimensions: '53\' x 8\'6" with 18" deck height',
        features: [
          'Hydraulic detachable gooseneck',
          'Rear load capability',
          "Extendable up to 65'",
        ],
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1605922610404-df3238689e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Multi-Axle Trailer',
      specs: {
        capacity: 'Up to 150,000 lbs',
        dimensions: "65' x 10' expandable width",
        features: [
          '8-13 axle configurations',
          'Hydraulic steering',
          'Specialized load distribution',
        ],
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1593359863503-f598684c806f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Heavy Haul Truck',
      specs: {
        capacity: 'Up to 120,000 lbs towing capacity',
        dimensions: 'Standard semi dimensions',
        features: [
          '600+ HP engine',
          '18-speed transmission',
          'Advanced GPS and safety systems',
        ],
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Specialized Container Trailer',
      specs: {
        capacity: 'Up to 45,000 lbs',
        dimensions: "40' - 53' length options",
        features: [
          'Secure container locking',
          'Reinforced chassis',
          'Adjustable height options',
        ],
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1600320515808-2ecc16c6a414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      title: 'Heavy Duty Bus',
      specs: {
        capacity: 'Up to 60 passengers or custom cargo',
        dimensions: '45\' length, 102" width, 137" height',
        features: [
          'Configurable interior for cargo or passengers',
          'Air-ride suspension',
          'Climate controlled cargo area',
        ],
      },
    },
  ]
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a2c5e] text-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl mb-6">
              Specialized vehicles and equipment designed to handle your most
              challenging transportation needs
            </p>
          </div>
        </div>
      </section>
      {/* Fleet Overview */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Our Specialized Equipment
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain a diverse fleet of specialized vehicles and trailers
              equipped to handle loads of all sizes and weights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((item, index) => (
              <FleetItem
                key={index}
                image={item.image}
                title={item.title}
                specs={item.specs}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Fleet Features */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Fleet Features & Maintenance
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our fleet is meticulously maintained and equipped with the latest
              technology to ensure safe and efficient transport
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0a2c5e] mb-4">
                Fleet Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    GPS tracking on all vehicles for real-time location updates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Advanced safety systems including lane departure warnings
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Specialized securing equipment for various cargo types
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Fuel-efficient engines to minimize environmental impact
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Customizable trailer configurations for unique loads
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0a2c5e] mb-4">
                Maintenance Program
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Regular preventative maintenance exceeding industry
                    standards
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Comprehensive inspections before and after each delivery
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    In-house certified mechanics for quick repairs and service
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Digital maintenance records and scheduling system</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#e6c200] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Backup vehicles available to prevent delivery delays
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Need Specific Equipment?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to inquire about our fleet options and
              availability
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <CTAContactForm />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      
    </div>
  )
}
export default FleetPage
