/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AnswerData } from './QuestionsData';
import { gray3 } from './Styles';
import { DateAndTime } from './DateAndTime';

interface Props {
  answer: AnswerData;
}

export const Answer = ({ answer }: Props) => (
  <div
    css={css`
      padding: 10px 0;
    `}
  >
    <div
      css={css`
        padding: 10px 0;
        font-size: 13px;
      `}
    >
      {answer.content}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${answer.userName} on `}
      <DateAndTime data={answer.created}></DateAndTime>
    </div>
  </div>
);
