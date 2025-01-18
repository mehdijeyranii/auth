import React from "react";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-between">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
