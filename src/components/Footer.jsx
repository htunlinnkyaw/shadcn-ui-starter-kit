import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-zinc-800 text-center text-white mt-auto font-serif p-3">
      <Container>
        <p className="">&copy; {date} Mario. All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
