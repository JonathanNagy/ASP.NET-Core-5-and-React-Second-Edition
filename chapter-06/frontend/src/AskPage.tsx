import React from 'react';
import { Page } from './Page';
import { useForm } from 'react-hook-form';
import { FieldContainer, FieldInput, FieldLabel, Fieldset } from './Styles';

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask a question">
      <form>
        <Fieldset>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput id="title" name="title" type="text" ref={register} />
          </FieldContainer>
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;
