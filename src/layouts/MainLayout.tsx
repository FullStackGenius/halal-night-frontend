import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
