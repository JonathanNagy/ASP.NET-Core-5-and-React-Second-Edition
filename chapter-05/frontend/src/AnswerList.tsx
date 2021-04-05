/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Answer } from './Answer';
import { AnswerData } from './QuestionsData';
import { gray5 } from './Styles';

interface Props {
  data: AnswerData[];
}

export const AnswerList = ({ data }: Props) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    {data.map((answer) => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
        key={answer.answerId}
      >
        <Answer answer={answer} />
      </li>
    ))}
  </ul>
);