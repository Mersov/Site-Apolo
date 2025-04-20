import React from "react";
import NavBar from "../../../../presentation/components/Nav-bar/nav";

type NavBarFactoryProps = {
  children?: React.ReactNode; // Tornando opcional, caso o NavBar não precise de filhos
};

export default function NavBarFactory({ children }: NavBarFactoryProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
