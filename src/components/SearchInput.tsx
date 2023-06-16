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
          {suggestions.map((item: Language) => (
            <div
              className="cursor-pointer my-3"
              onClick={() => onSelectLang(item)}
              key={item.title}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
