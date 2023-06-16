import React from "react";

interface Props {
  data: {
    title?: string,
  };
}

const Header: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-flow-col w-full grid-cols-12">
      <img src="flag.png" alt="flag" className="col-span-1" />
      <h1 className="col-span-8">{data?.title}</h1>
      <div className="flex items-center col-span-3">
        <img src="social4.png" alt="4" />
        <img src="social1.png" alt="1" />
        <img src="social2.png" alt="2" />
        <img src="social3.png" alt="3" />
      </div>
    </div>
  );
};

export default Header;
