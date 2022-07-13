import React from 'react';
import { IPropsChildren } from '../../../frontEndTypes';
import { SettingsFormContainer, Form } from './FormElements';

const SettingsFormWrapper = ({ children }: IPropsChildren): React.ReactElement => {
  return (
    <SettingsFormContainer>
      <Form>{children}</Form>
    </SettingsFormContainer>
  );
};

export default SettingsFormWrapper;
