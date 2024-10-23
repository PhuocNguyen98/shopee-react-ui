import React from 'react';
import './BaseStyle.module.scss';

type Props = {
  children: React.ReactNode;
};

function GlobalStyle({ children }: Props) {
  return <>{children}</>;
}

export default GlobalStyle;
