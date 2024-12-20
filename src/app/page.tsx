"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
// import {
//   IconCopy,
//   IconStar,
//   IconThumbDown,
//   IconThumbUp,
//   IconVolume,
// } from "@tabler/icons-react";
// // import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import CardArea from "@/components/Inputs/CardArea";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import { Volume2 } from "lucide-react";
import CategoryLinks from "@/components/categoryLinks";
// // import FileUpload from "@/components/Inputs/FileUpload";
// // import LinkPaste from "@/components/Inputs/LinkPaste";
// // import LanguageSelector from "@/components/Inputs/LanguageSelector";
// // import useTranslate from "@/hooks/useTranslate";
// // import { rtfToText } from "@/utils/rtfToText";

// // import SvgDecorations from "@/components/SvgDecorations";
// // import CategoryLinks from "@/components/categoryLinks";

const languages = ["English", "Spanish"];

const Home: React.FC = () => {

  const [sourceText, setSourceText] = useState<string>("");
  const[selectedLanguage, setSelectedLanguage] = useState<string>("English")

  const handleAudioPlayback = (text : string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }
  return (
    <div>
      <BackgroundLines className="flex justify-center flex-col px-4 h-screen bg-black">
        <div className="text-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-8 relative z-20 font-bold tracking-tight ">
            Broto<span className="text-indigo-600">Speaks</span>
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
            BrotoSpeaks: Break Language Barriers, Speak the World!
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
                <CardArea
                  id="source-language"
                  value={sourceText}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setSourceText(e.target.value)
                  }
                  placeholder="Source Language"
                />
                <div className="flex flex-row justify-between w-full items-center mt-4">
                  <span className="cursor-pointer flex space-x-2 flex-row text-neutral-500 items-center">
                    <SpeechRecognitionComponent setSourceText={setSourceText} />
                    <Volume2 size={24} onClick={() => handleAudioPlayback(sourceText)}/>

                  </span>
                  <span className="text-sm text-neutral-500">
                    {sourceText.length} / 2000
                  </span>
                </div>
              </BackgroundGradient>

              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
                <CardArea
                  id="target-language"
                  value={"targetText"}
                  onChange={() => {}}
                  placeholder="Target Language"
                />
                <div className="flex flex-row justify-between w-full">
                  <span className="cursor-pointer flex items-center space-x-2 flex-row text-neutral-500 mt-1">
                    <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} languages={languages}/>
                    <Volume2 size={24} onClick={() => handleAudioPlayback(sourceText)}/>
                  </span>
                </div>
              </BackgroundGradient>
            </div>

          </div>
          <CategoryLinks/>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Home;
