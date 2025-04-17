import React from 'react'
import { IconProps } from './types'

const Telegram: React.FC<IconProps> = props => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M21 5L2 12.5L9 13.5M21 5L18.5 20L13.5 15M21 5L13.5 15M9 13.5L13.5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Telegram
