import type { ReactNode } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-content">
        <Sidebar />

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;