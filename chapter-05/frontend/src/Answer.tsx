/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AnswerData } from './QuestionsData';
import { gray3 } from './Styles';

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
      {`Answered by ${answer.userName} on 
        ${answer.created.toLocaleDateString()} 
        ${answer.created.toLocaleTimeString()}`}
    </div>
  </div>
);
