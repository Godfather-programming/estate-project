import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const height = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div style={height}> {children} </div>
      <Footer />
    </>
  );
}

export default Layout;
