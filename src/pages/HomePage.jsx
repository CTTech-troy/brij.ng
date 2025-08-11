import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  TruckIcon,
  PackageIcon,
  RouteIcon,
  ShieldCheckIcon,
  ClockIcon,
  AwardIcon,
  PhoneIcon,
  CheckIcon,
} from 'lucide-react'
import CTAButton from '../components/CTAButton/CTAButton'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import CTAContactForm from '../components/CTAContactForm/CTAContactForm'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a2c5e] text-white" data-aos="fade-up">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Move What Others Can't
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Specialized heavy load logistics solutions for your most
              challenging transportation needs
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <CTAButton text="Get a Quote" to="/contact" className="text-lg" />
              <Link
                to="/services"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-block text-center text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
                WHAT WE DO.
              </h2>
              <p className="text-gray-600 mb-6">
                Our mission is simple yet powerful – to revolutionize dispatch services by leveraging cutting-edge technology, industry best practices, and a dedicated team of professionals. We strive to be at the forefront of innovation, ensuring that our clients can rely on us to deliver their goods with precision, speed, and utmost care.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of seasoned professionals understands the unique
                challenges of heavy load transportation and works diligently to
                ensure your cargo arrives safely and on time, every time.
              </p>
              <Link
                to="/about"
                className="text-[#0a2c5e] font-semibold hover:text-[#76c3ef] inline-flex items-center"
              >
                Learn more about us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://i.pinimg.com/736x/aa/92/c0/aa92c0ed942d86cbbc7e8e4e74cef180.jpg"
                alt="Heavy Load Logistics truck transporting large cargo"
                className="rounded-lg shadow-lg w-full h-120 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive heavy load logistics solutions tailored to
              your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={TruckIcon}
              title="Oversized Cargo"
              description="Specialized transportation for loads that exceed standard dimensions or weight limits, with all necessary permits and safety measures."
            />
            <ServiceCard
              icon={PackageIcon}
              title="Industrial Equipment"
              description="Safe and secure transport of heavy machinery, industrial equipment, and manufacturing components to and from your facility."
            />
            <ServiceCard
              icon={RouteIcon}
              title="Long-Haul Delivery"
              description="Cross-country transportation services with experienced drivers and advanced tracking systems to ensure on-time delivery."
            />
          </div>
          <div className="text-center mt-10">
            <CTAButton text="View All Services" to="/services" />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Why Choose <span className="text-[#e6c200]">BRIJ.NG</span> 
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine experience, specialized equipment, and dedication to
              safety to deliver exceptional heavy load transportation services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Rigorous safety protocols and fully certified drivers to ensure
                your cargo arrives without incident.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <ClockIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                Advanced logistics planning and route optimization to meet your
                deadlines consistently.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <AwardIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Highly trained professionals with years of experience in
                handling complex logistics challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-6">
                Need a Quote for Your Heavy Load?
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out our quick contact form to get started. Our team will
                review your requirements and get back to you with a customized
                quote within 24 hours.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#e6c200]/20 p-1 rounded-full mr-3 mt-1">
                    <CheckIcon
                      className="h-4 w-4 text-[#e6c200]"
                      stroke-width={3}
                    />
                  </div>
                  <span className="text-gray-700">Quick response time</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#e6c200]/20 p-1 rounded-full mr-3 mt-1">
                    <CheckIcon
                      className="h-4 w-4 text-[#e6c200]"
                      stroke-width={3}
                    />
                  </div>
                  <span className="text-gray-700">
                    Customized solutions for your specific needs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#e6c200]/20 p-1 rounded-full mr-3 mt-1">
                    <CheckIcon
                      className="h-4 w-4 text-[#e6c200]"
                      stroke-width={3}
                    />
                  </div>
                  <span className="text-gray-700">
                    Transparent pricing with no hidden fees
                  </span>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-5 w-5 text-[#0a2c5e]" />
                <span className="text-lg font-semibold text-[#0a2c5e]">
                  (+234) 906-0475-561
                </span>
              </div>
            </div>
            <div>
              <CTAContactForm />
            </div>
          </div>
        </div>
      </section>
   
    </div>
  )
}
export default HomePage
