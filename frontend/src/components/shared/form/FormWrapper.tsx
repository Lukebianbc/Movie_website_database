import React from 'react';
import { IPropsChildren } from '../../../frontEndTypes';
import { FormContainer, Form } from './FormElements';

const FormWrapper = ({ children }: IPropsChildren): React.ReactElement => {
  return (
    <FormContainer>
      <Form>{children}</Form>
    </FormContainer>
  );
};

export default FormWrapper;
