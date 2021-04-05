/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { getQuestion, postAnswer, QuestionData } from './QuestionsData';
import {
  FieldContainer,
  FieldError,
  FieldLabel,
  Fieldset,
  FieldTextArea,
  FormButtonContainer,
  gray3,
  gray6,
  PrimaryButton,
  SubmissionSuccess
} from './Styles';
import { AnswerList } from './AnswerList';
import { DateAndTime } from './DateAndTime';
import { useForm } from 'react-hook-form';

type FormData = {
  content: string;
};

export const QuestionPage = () => {
  const { register, errors, handleSubmit, formState } = useForm<FormData>({
    mode: 'onTouched'
  });
  const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const [questionNotFound, setQuestionNotFound] = React.useState<
    boolean | null
  >(false);
  const [successfullySubmitted, setSuccessfullySubmitted] = React.useState(
    false
  );
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
  const submitForm = async (data: FormData) => {
    const result = await postAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: 'Fred',
      created: new Date()
    });
    setSuccessfullySubmitted(result ? true : false);
  };
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
            <form
              css={css`
                margin-top: 20px;
              `}
              onSubmit={handleSubmit(submitForm)}
            >
              <Fieldset
                disabled={formState.isSubmitting || successfullySubmitted}
              >
                <FieldContainer>
                  <FieldLabel htmlFor="content">Your Answer</FieldLabel>
                  <FieldTextArea
                    id="content"
                    name="content"
                    ref={register({
                      required: true,
                      minLength: 50
                    })}
                  />
                  {errors.content && errors.content.type === 'required' && (
                    <FieldError>You must enter the answer</FieldError>
                  )}
                  {errors.content && errors.content.type === 'minLength' && (
                    <FieldError>
                      The answer must be at least 50 characters
                    </FieldError>
                  )}
                </FieldContainer>
                <FormButtonContainer>
                  <PrimaryButton type="submit">
                    Submit Your Answer
                  </PrimaryButton>
                </FormButtonContainer>
                {successfullySubmitted && (
                  <SubmissionSuccess>
                    Your answer was successfully submitted
                  </SubmissionSuccess>
                )}
              </Fieldset>
            </form>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
