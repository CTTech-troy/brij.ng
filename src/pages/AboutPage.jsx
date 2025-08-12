import React, { useEffect } from 'react'
import { ShieldCheckIcon, AwardIcon, UsersIcon, TruckIcon } from 'lucide-react'
import CTAButton from '../components/CTAButton/CTAButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a2c5e] text-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-6">
              Partner with us to earn more.
            </p>
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                we understand the critical role that logistics and dispatch play in the success of your business. With years of experience in the industry, we have honed our expertise to provide seamless and efficient dispatch services tailored to meet your unique needs.
              </p>
              <p className="text-gray-600 mb-4">
                Our reputation has been built on reliability, safety, and exceptional customer service. We’ve invested in advanced equipment and developed a skilled team of professionals who excel at handling the unique challenges of transporting oversized and heavy loads.
              </p>
              <p className="text-gray-600">
                Today, we proudly serve clients across diverse industries—including construction, manufacturing, energy, and aerospace—offering customized logistics strategies designed to meet their exact requirements.
              </p>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/53/47/ed/5347ed194843c9137930372ebff8a4c4.jpg"
                alt="Heavy Load Logistics company headquarters"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Values */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by our commitment to excellence, safety, and customer
              satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0a2c5e] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide safe, reliable, and efficient heavy load
                transportation solutions that meet our clients' most challenging
                logistics needs while maintaining the highest standards of
                safety and customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0a2c5e] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the industry leader in specialized heavy load logistics,
                recognized for our innovation, reliability, and commitment to
                exceeding customer expectations in every project we undertake.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                We prioritize the safety of our team, cargo, and everyone on the
                road in every decision we make.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <AwardIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our operations, from
                planning to execution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <UsersIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Teamwork
              </h3>
              <p className="text-gray-600">
                We collaborate effectively within our team and with our clients
                to achieve optimal results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#0a2c5e]/10 p-4 rounded-full mb-4">
                <TruckIcon className="h-8 w-8 text-[#0a2c5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2c5e] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously seek new solutions and technologies to improve
                our services and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Safety and Compliance */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-6">
                Safety & Compliance
              </h2>
              <p className="text-gray-600 mb-4">
                At Brij Logistics, safety isn't just a priority—it's a
                core value embedded in everything we do. We maintain rigorous
                safety protocols that exceed industry standards and regulatory
                requirements.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive safety program includes:
              </p>
              <ul className="space-y-3 mb-6">
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
                  <span>Regular safety training for all drivers and staff</span>
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
                  <span>Compliance with all DOT and FMCSA regulations</span>
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
                  <span>Thorough pre-trip and post-trip inspections</span>
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
                  <span>Advanced vehicle safety technologies</span>
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
                  <span>Specialized cargo securing protocols</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://i.pinimg.com/736x/be/a4/ad/bea4ad501ee3f8a14827c50ed740ca6c.jpg"
                alt="Safety inspection of heavy load truck"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}
export default AboutPage
