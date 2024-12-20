import OpenAI from "openai";
import React, { useEffect, useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
const useTranslateComp = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: `translate ${sourceText} into ${selectedLanguage} and do not return any other text.Your task is to just translate the given text into ${selectedLanguage} and do not return any other text.`,
            },
          ],
        });
        const translatedText = response.choices[0].message.content;
        setTargetText(translatedText);
      } catch (error) {
        throw new Error(error, "error in translating ");
      }
    };
    if(sourceText.trim()){
        const timeoutId = setTimeout(() => {
            handleTranslate(sourceText);
        } , 500);

        return () => clearTimeout(timeoutId);

    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslateComp;
