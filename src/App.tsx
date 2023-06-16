import { useState } from "react";
import { data } from "./constants";
import LanguageInfo from "./components/LanguageInfo";
import Header from "./components/Header";
import { Language } from "./utils/types";
import SearchInput from "./components/SearchInput";
import LanguageDetails from "./components/LanguageDetails";
import RecipeForm from "./components/AddRecipeForm";

function App() {
  const [lang, setLang] = useState<Language>(data[0]);
  const [showRecipeForm, setShowRecipeForm] = useState<boolean>(false);

  return (
    <div className="container">
      {showRecipeForm ? (
        <RecipeForm setShowRecipeForm={setShowRecipeForm} />
      ) : (
        <>
          <SearchInput languages={data} setLanguage={setLang} />
          <Header data={lang} setShowRecipeForm={setShowRecipeForm} />
          <LanguageDetails data={lang} />
          <div className="detail-wrapper">
            <div className="grid grid-cols-12 gap-x-8 gap-y-4">
              {Object.keys(lang?.info)?.map((info) => (
                <LanguageInfo
                  heading={info}
                  content={lang?.info[info]}
                  key={info}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
