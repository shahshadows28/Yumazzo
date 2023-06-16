import { useState } from "react";
import { data } from "./constants";
import LanguageInfo from "./components/LanguageInfo";
import Header from "./components/Header";
import { Language } from "./utils/types";
import SearchInput from "./components/SearchInput";
import LanguageDetails from "./components/LanguageDetails";

function App() {
  const [lang, setLang] = useState<Language>(data[0]);

  return (
    <div className="container">
      {/* Search Input */}
      <SearchInput languages={data} setLanguage={setLang} />

      {/* Language Header Section*/}
      <Header data={lang} />

      {/* Language Details Section*/}
      <LanguageDetails data={lang} />
      {/* Language Info Section */}
      <div className="detail-wrapper">
        <div className="grid grid-cols-12 gap-4">
          {Object.keys(lang?.info)?.map((info) => (
            <LanguageInfo
              heading={info}
              content={lang?.info[info]}
              key={info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
