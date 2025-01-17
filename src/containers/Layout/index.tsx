import React from 'react';
import { StyledLayout } from './style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
