import React, { useEffect } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
import ContactForm from '../components/ContactFrom/ContactFrom'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fix default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const position = [6.6018, 3.3515]; // Lagos, Nigeria coordinates
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a2c5e] text-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-6">
              Get in touch with our team to discuss your heavy load
              transportation needs
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a2c5e] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0a2c5e]/10 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-[#0a2c5e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a2c5e]">
                      Phone
                    </h3>
                    <p className="text-gray-600">(234) 906-0475-561</p>
                    <p className="text-gray-600">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0a2c5e]/10 p-3 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-[#0a2c5e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a2c5e]">
                      Email
                    </h3>
                    <p className="text-gray-600">info@Brij.ng</p>
                    <p className="text-gray-600">
                      We respond within 24 Hours
                      </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0a2c5e]/10 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-[#0a2c5e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a2c5e]">
                      Address
                    </h3>
                    <p className="text-gray-600">5 Tunde Abimbola Street,</p>
                    <p className="text-gray-600">Magodo Phase 2, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#0a2c5e] mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  24/7 emergency support available for existing clients
                </p>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Service Area Map */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2c5e] mb-4">
              Our Service Coverage Area
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide heavy load transportation services across the
              continental United States, with specialized coverage in the
              following regions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <MapContainer
          center={position}
          zoom={6}
          scrollWheelZoom={false}
          className="w-full h-[400px] rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              We operate in this service area. <br /> Click to explore.
            </Popup>
          </Marker>
        </MapContainer>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">
                  Primary Service Areas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Northeast Region
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Southeast Region
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Midwest Region
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">
                  Secondary Service Areas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Southwest Region
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Northwest Region
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Western Region
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">
                  Special Service Areas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Canada (select provinces)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Mexico (northern regions)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-[#e6c200] mr-2"
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
                    Remote/difficult access areas
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't see your location? Contact us anyway - we frequently
                arrange special transportation to areas outside our regular
                service regions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Contact Options */}
      
    </div>
  )
}
export default ContactPage
