import React, { useState } from "react";
import { Language } from "../utils/types";
import { debounce } from "../utils/helpers";

interface SearchInputProps {
  setLanguage: (lang: Language) => void;
  languages: Language[];
}

const SearchInput: React.FC<SearchInputProps> = ({
  languages,
  setLanguage,
}) => {
  const [suggestions, setSuggestions] = useState<Language[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const onSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value?.trim()?.toLowerCase();

    setSuggestions(
      languages?.filter((item: Language) =>
        item?.title?.trim()?.toLowerCase()?.includes(searchValue)
      )
    );
    setShowSuggestions(true);
  }, 1000);

  const onSelectLang = (lang: Language) => {
    setLanguage(lang);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <img src="search.png" alt="search-logo" className="search-icon" />
      <input
        placeholder="Search cuisine"
        className="search"
        onChange={onSearch}
      />
      {suggestions.length > 0 && showSuggestions && (
        <div className="suggestions-container">
          {suggestions?.map((item: Language) => (
            <div
              className="grid grid-cols-12 cursor-pointer my-3 gap-2"
              onClick={() => onSelectLang(item)}
              key={item.title}
            >
              <img src={item?.flag} alt="alt" className="col-span-1" />
              <div className="col-span-6">{item?.title}</div>
              <div className="col-span-3"> {item?.details.difficulty}</div>
              <div className="col-span-2 text-gray-500">{item?.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
