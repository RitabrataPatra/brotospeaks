import { PaperclipIcon } from 'lucide-react'
import React from 'react'

const FileUpload = ({handleFileUpload} : {handleFileUpload: ()=>void}) => {
  return (
    <label htmlFor="file-upload" className='cursor-pointer'>
        <PaperclipIcon size={24}/>
        <input type="file" id="file-upload" onChange={handleFileUpload} className='hidden'/>
    </label>
  )
}

export default FileUpload