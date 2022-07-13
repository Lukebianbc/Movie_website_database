import React from 'react';

import { ILayoutProps } from '../../frontEndTypes';
import { Main } from './LayoutElements';

const Layout = (props: ILayoutProps): React.ReactElement => {
  return (
    <>
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
