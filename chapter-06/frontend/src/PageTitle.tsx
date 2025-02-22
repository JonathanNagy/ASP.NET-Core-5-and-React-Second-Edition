/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: Props) => (
  <h2
    css={css`
      font-size: 15px;
      font-weight: bold;
      margin: 10px 0 5px;
      text-align: center;
      text-transform: uppercase;
    `}
  >
    {children}
  </h2>
);

export const PageTitle2 = styled.h2`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0 5px;
  text-align: center;
  text-transform: uppercase;
`;
