import React from 'react';
import { IconContext } from 'react-icons';
import { IIconProps } from '../../../frontEndTypes';

const Icon = (props: IIconProps): React.ReactElement => {
  return (
    <IconContext.Provider value={{ style: { fontSize: `${props.size}`, color: `${props.color}` } }}>
      <div>{props.children}</div>
    </IconContext.Provider>
  );
};

export default Icon;
