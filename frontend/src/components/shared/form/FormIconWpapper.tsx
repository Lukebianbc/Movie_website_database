import React from 'react';
import { IFormIconProp } from '../../../frontEndTypes';
import Icon from '../icon';
import { FormIcon } from './FormElements';

const FormIconWrapper = ({ children }: IFormIconProp): React.ReactElement => {
  return (
    <FormIcon>
      <Icon size="20px" color="var(--color-background)">
        {children}
      </Icon>
    </FormIcon>
  );
};

export default FormIconWrapper;
