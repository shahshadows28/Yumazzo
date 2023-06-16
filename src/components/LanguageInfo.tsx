import React from "react";

interface Props {
  heading: string;
  content: string;
}

const LanguageInfo: React.FC<Props> = ({ heading, content }) => {
  return (
    <div className="flex flex-col col-span-6">
      <h3>{heading}</h3>
      <div className="flex items-center">
        <span className="bg-gradient-to-r bg-clip-text text-transparent font-bold from-teal-300 to-green-500">
          {content}
        </span>
      </div>
    </div>
  );
};

export default LanguageInfo;
