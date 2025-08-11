import React from 'react'
import { BoxIcon } from 'lucide-react'

const ServiceCard = ({ icon, title, description }) => {
  const Icon = icon || BoxIcon;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
      <div className="bg-[#0a2c5e]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-[#0a2c5e]" />
      </div>
      <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
export default ServiceCard
