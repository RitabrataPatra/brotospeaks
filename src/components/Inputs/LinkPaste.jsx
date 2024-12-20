import { label } from 'framer-motion/client'
import { Link } from 'lucide-react'
import React from 'react'

const LinkPaste = ({handleLinkPaste}) => {
  return (
    <label htmlFor="link-input" className='cursor-pointer'>
        <Link size={20}/>
        <input type="text" id="link-input" onChange={handleLinkPaste} className='hidden'/>
    </label>
  )
}

export default LinkPaste