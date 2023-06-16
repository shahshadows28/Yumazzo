import React from "react";

interface Props {
  data: {
    details?: {
      icon?: string;
      difficulty?: string;
      description?: string;
    };
  };
}

const LanguageDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <div className="flex items-center">
          <img src={data?.details?.icon} alt="icon" className="mr-2" />
          <h2>Difficulty: {" "}{data?.details?.difficulty}</h2>
        </div>
        <div>{data?.details?.description}</div>
      </div>
    </div>
  );
};

export default LanguageDetails;
