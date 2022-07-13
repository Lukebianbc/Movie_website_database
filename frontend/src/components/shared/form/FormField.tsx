import React from 'react';
import { IChildren } from '../../../frontEndTypes';
import { FormField } from './FormElements';

export const FormFiled = ({ children }: IChildren): React.ReactElement => {
  return <FormField>{children}</FormField>;
};

export default FormFiled;
