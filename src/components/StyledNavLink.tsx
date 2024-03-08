import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface StyledNavLinkProps extends NavLinkProps {
  language: string;
  isDarkMode: boolean;
}

const StyledNavLink: React.FC<StyledNavLinkProps> = ({ language, isDarkMode, ...props }) => {
  const letterSpacing = language === 'ar' ? '0' : '0.2em';
  const fontFamily = language === 'ar' ? '$fontStackArabic' : '$fontStack';
  const shadow = isDarkMode ? '1px 1px 1px rgba(0, 0, 0, 0.25)' : 'none';

  return (
    <NavLink {...props} style={{ letterSpacing: letterSpacing, fontFamily: fontFamily, textShadow: shadow }} />
  );
};

export default StyledNavLink;