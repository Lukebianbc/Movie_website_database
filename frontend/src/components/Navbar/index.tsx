import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import Icon from '../shared/icon';
import {
  NavImage,
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarToggle,
  RedirectToHomeButton,
} from './NavElements';
import logo from '../../assets/logos/tv.png';
import NavItems from './NavItems';

const Logo = (): React.ReactElement => {
  const history = useHistory();
  const returnHome = () => {
    history.push('/');
  };

  return (
    <RedirectToHomeButton onClick={returnHome}>
      <NavImage as="img" src={logo} alt="A text and logo of the company" />;
    </RedirectToHomeButton>
  );
};

const Navbar = (): React.ReactElement => {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setSidebar(false);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarToggle onClick={handleClick}>
          <Icon size="40px" color="var(--color-text)">
            <AiOutlineMenu />
          </Icon>
        </NavbarToggle>
      </NavbarWrapper>
      <NavItems sidebar={sidebar} closeMenu={closeMobileMenu} />
    </NavbarContainer>
  );
};

export default Navbar;
