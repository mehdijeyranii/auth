import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className="w-11/12 mx-auto my-4">{children}</section>;
};

export default Container;
