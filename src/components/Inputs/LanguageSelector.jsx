import React from "react";
import { LanguagesIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="cursor-pointer rounded-full space-x-1 bg-black flex items-center px-2 flex-row">
        <LanguagesIcon/>

        <Select className="bg-black flex flex-row rounded-full py-1 text-white items-center">
          <SelectTrigger className="w-[100px] border-none">
            <SelectValue
            placeholder={selectedLanguage}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}

            />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 text-neutral-400 border-neutral-600">
            {languages.map((language) => (
              <SelectItem value={language} key={language} className="hover:bg-neutral-700">
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </span>
    </div>
  );
};

export default LanguageSelector;
