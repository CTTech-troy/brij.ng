import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({
  text,
  to,
  className = '',
  fullWidth = false,
}) => {
  return (
    <Link
      to={to}
      className={`
        bg-[#e6c200] 
        hover:bg-[#ffda22] 
        text-[#0a2c5e] 
        font-semibold 
        px-6 
        py-3 
        rounded-md 
        transition-colors 
        inline-block
        text-center
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {text}
    </Link>
  )
}
export default CTAButton
