import React from 'react'
import { Textarea } from "@/components/ui/textarea"
const CardArea = ({id , placeholder , value , onChange} ) => {
  return (
    <div>
      <Textarea
        rows={5}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent 
      rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 text-neutral-200"
    
      />
    </div>
  );
}

export default CardArea