import React, { useState, useContext } from 'react';

import { NavbarLink, NavbarLinks, NavLink, MobileNavbar } from './NavElements';
import { IMoviesContext, INavItemProps } from '../../frontEndTypes';
import { MoviesContext } from '../../contexts/MoviesContext';

const NavItems = (props: INavItemProps): React.ReactElement => {
  const { sidebar, closeMenu } = props;
  const {
    user,
    recommendMovies,
    showFavs,
    showRated,
    showReviewed,
    showViewed,
    showFavCasts,
    showRecommend,
  } = useContext(MoviesContext) as IMoviesContext;
  const clickViewHistory = (event: React.FormEvent) => {
    closeMenu();
    showViewed(user.user_id);
  };
  const clickFavMov = (event: React.FormEvent) => {
    closeMenu();
    showFavs(user.user_id);
    showRecommend(user.user_id);
  };
  const clickRatedMov = (event: React.FormEvent) => {
    closeMenu();
    showRated(user.user_id);
  };
  const clickReviewedMov = (event: React.FormEvent) => {
    closeMenu();
    showReviewed(user.user_id);
  };
  const clickFavActor = (event: React.FormEvent) => {
    closeMenu();
    showFavCasts(user.user_id);
  };
  const links = (
    <>
      <NavbarLink onClick={closeMenu}>
        <NavLink exact to="/">
          HOME
        </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/login"> LOGIN </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/register"> REGISTER </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/searchQuery"> Query </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/settings"> Settings </NavLink>
      </NavbarLink>
      <NavbarLink onClick={clickRatedMov}>
        <NavLink to="/rated"> RATED </NavLink>
      </NavbarLink>
      <NavbarLink onClick={clickReviewedMov}>
        <NavLink to="/reviewHistory"> Review </NavLink>
      </NavbarLink>
      <NavbarLink onClick={clickViewHistory}>
        <NavLink to="/viewHistory">View History </NavLink>
      </NavbarLink>
      <NavbarLink onClick={clickFavMov}>
        <NavLink to="/favorites"> FAVORITE Movie </NavLink>
      </NavbarLink>
      <NavbarLink onClick={clickFavActor}>
        <NavLink to="/likeActor"> FAVORITE people </NavLink>
      </NavbarLink>
      <NavbarLink>Login as {user.user_name}</NavbarLink>
    </>
  );

  return <>{sidebar ? <MobileNavbar>{links}</MobileNavbar> : <NavbarLinks>{links}</NavbarLinks>}</>;
};

export default NavItems;
