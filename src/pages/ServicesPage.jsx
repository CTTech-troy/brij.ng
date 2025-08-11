import React, { useEffect } from 'react'
import {
  TruckIcon,
  PackageIcon,
  RouteIcon,
} from 'lucide-react'
import CTAButton from '../components/CTAButton/CTAButton'
import CTAContactForm from '../components/CTAContactForm/CTAContactForm'

// Sample data for services
const servicesData = [
  {
    id: 1,
    icon: TruckIcon,
    title: "Expedited Dispatch",
    description:
      " Need urgent delivery? Our team is adept at handling time-sensitive shipments, ensuring your goods reach their destination promptly.",
    points: [
      "Specialized trailers for extra-wide and tall loads",
      "Permit acquisition and route planning",
      "Escort vehicles when required",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2075&q=80",
  },
  {
    id: 2,
    icon: PackageIcon,
    title: "Route Optimization:",
    description:
      "We provide safe and secure transport of heavy machinery, industrial equipment, and manufacturing components to and from your facility, with specialized handling and securing techniques.",
    points: [
      "Machinery transport with specialized securing",
      "Equipment installation coordination",
      "Factory relocations and setup",
    ],
    image:
      "https://i.pinimg.com/736x/9e/2a/93/9e2a93b650bcb25c580e007cd73cfdb3.jpg",
  },
  {
    id: 3,
    icon: RouteIcon,
    title: "Real-Time Tracking:",
    description:
      "Our cross-country transportation services feature experienced drivers and advanced tracking systems to ensure your cargo arrives on time, regardless of distance.",
    points: [
      "Coast-to-coast heavy load transport",
      "Real-time GPS tracking and updates",
      "Team drivers for expedited delivery",
    ],
    image:
      "https://i.pinimg.com/736x/50/9a/ee/509aee7d377af8666e7182e93aa7e673.jpg",
  },
  {
    id: 4,
    icon: RouteIcon,
    title: "Customer Support: ",
    description:
      "Our cross-country transportation services feature experienced drivers and advanced tracking systems to ensure your cargo arrives on time, regardless of distance.",
    points: [
      "Coast-to-coast heavy load transport",
      "Real-time GPS tracking and updates",
      "Team drivers for expedited delivery",
    ],
    image:
      "https://i.pinimg.com/736x/ef/e5/6b/efe56bc0d50e3e4d4d96a9bad6f61da0.jpg",
  },
]

// Sample industries data
const industriesData = [
  {
    title: "Construction",
    description:
      "Transportation of heavy construction equipment, prefabricated structures, and building materials to construction sites.",
  },
  {
    title: "Manufacturing",
    description:
      "Delivery of industrial machinery, production line equipment, and large components for manufacturing facilities.",
  },
  {
    title: "Energy",
    description:
      "Transport of turbines, generators, transformers, and other large equipment for power plants and renewable energy projects.",
  },
  {
    title: "Mining",
    description:
      "Specialized transport of mining equipment, excavators, and large vehicles to remote mining locations.",
  },
  {
    title: "Agriculture",
    description:
      "Moving large agricultural machinery, silos, and irrigation equipment to farms and processing facilities.",
  },
  {
    title: "Aerospace",
    description:
      "Transportation of aircraft components, satellite equipment, and specialized aerospace manufacturing tools.",
  },
]

import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a2c5e] text-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-6">
              Comprehensive heavy load logistics solutions tailored to your
              specific transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {servicesData.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Text */}
                  <div
                    className={
                      index % 2 === 0
                        ? "order-2 md:order-1"
                        : "order-2"
                    }
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-[#e6c200] mr-3" />
                      <h2 className="text-3xl font-bold text-[#0a2c5e]">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-[#e6c200] mt-1 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div
                    className={
                      index % 2 === 0
                        ? "order-1 md:order-2"
                        : "order-1"
                    }
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide specialized heavy load transportation solutions across
              various industries
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Request a Service Quote
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss your specific service
              requirements
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

export default ServicesPage
