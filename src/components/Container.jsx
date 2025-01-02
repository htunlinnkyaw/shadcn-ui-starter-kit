import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`min-w-full  md:w-[100%] lg:w-[100%] xl:w-[90%] md:px-4 px-2 lg:px-2 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
