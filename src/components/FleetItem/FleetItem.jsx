import React from 'react'
/**
 * @typedef {Object} FleetItemProps
 * @property {string} image
 * @property {string} title
 * @property {{ capacity: string, dimensions: string, features: string[] }} specs
 */
const FleetItem = ({ image, title, specs }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#0a2c5e] mb-3">{title}</h3>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Capacity:</span> {specs.capacity}
          </p>
          <p>
            <span className="font-semibold">Dimensions:</span>{' '}
            {specs.dimensions}
          </p>
          <div>
            <span className="font-semibold">Features:</span>
            <ul className="list-disc pl-5 mt-1">
              {specs.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FleetItem
