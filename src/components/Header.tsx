import React from "react";
import { Language } from "../utils/types";

interface Props {
  data: Language;
  setShowRecipeForm: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ data, setShowRecipeForm }) => {
  return (
    <div className="grid grid-flow-col w-full grid-cols-12">
      <img src={data?.flag} alt="flag" className="col-span-1" />
      <h1 className="col-span-5">{data?.title}</h1>
      <div className="flex items-center col-span-6">
        <img src="social4.png" alt="4" />
        <img src="social1.png" alt="1" />
        <img src="social2.png" alt="2" />
        <button
          className="px-4 py-2 text-xs bg-[#171F2F] rounded-lg"
          onClick={() => setShowRecipeForm(true)}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default Header;
