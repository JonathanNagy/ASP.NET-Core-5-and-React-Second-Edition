/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { getQuestion, QuestionData } from './QuestionsData';
import { gray3, gray6 } from './Styles';
import { AnswerList } from './AnswerList';
import { DateAndTime } from './DateAndTime';

export const QuestionPage = () => {
  const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const [questionNotFound, setQuestionNotFound] = React.useState<
    boolean | null
  >(false);
  const { questionId } = useParams();
  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
      setQuestionNotFound(!foundQuestion);
    };
    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);
  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0 5px;
          `}
        >
          {questionNotFound ? (
            `Question not found`
          ) : !question ? (
            <div>Loading...</div>
          ) : (
            question.title
          )}
        </div>
        {question !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Asked by ${question.userName} on `}
              <DateAndTime data={question.created}></DateAndTime>
            </div>
            <AnswerList data={question.answers} />
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
