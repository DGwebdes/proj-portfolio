import React from "react";
import type { ReactNode } from "react";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-between px-5">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
