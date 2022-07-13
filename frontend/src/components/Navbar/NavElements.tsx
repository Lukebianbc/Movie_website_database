import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  background: transparent;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  color: var(--color-text);
  &:hover,
  &:active {
    border-bottom: 3px solid var(--color-primary);
    color: var(--color-primary);
  }
`;

export const NavImage = styled.img`
  height: 100%;
`;
export const NavbarContainer = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  background: transparent;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
`;
export const NavbarLogo = styled.div`
  display: block;
  height: 90%;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const NavbarToggle = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;

export const NavbarLink = styled.li`
  margin: 0 1rem;
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
  color: var(--color-text);
`;

export const NavbarLinks = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  text-transform: uppercase;
  transition: 0.2s;
  padding: 1rem;
  @media (max-width: 767px) {
    display: none;
    flex-direction: column;
  }
`;

export const MobileNavbar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--color-background);
  list-style-type: none;
  text-transform: uppercase;
  transition: 0.2s;
  padding: 1rem;
`;

export const RedirectToHomeButton = styled.button`
  height: 90%;
  background: transparent;
  outline: none;
  border: none;
`;
