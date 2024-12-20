import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {Mic} from 'lucide-react'
const SpeechRecognitionComponent = ({setSourceText} : {setSourceText: React.Dispatch<React.SetStateAction<string>>}) => {

    const {
        transcript,
        listening,
        // resetTranscript,
      } = useSpeechRecognition();
    
      useEffect(()=>{
        setSourceText(transcript)
      }, [transcript , setSourceText])

      const handleVoiceRecording = () => {
        if(listening){
            SpeechRecognition.stopListening()
        }else{
            SpeechRecognition.startListening()
        }
      }

  return (
    <div>
        <Mic size={22} onClick={handleVoiceRecording} className='text-gray-400'/>
    </div>
  )
}

export default SpeechRecognitionComponent

