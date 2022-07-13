import React from 'react';

import {
  FooterContainer,
  Anchor,
  FooterLine,
  FooterWrapper,
  FollowMeWrapper,
  LogoWrapper,
} from './FooterElements';
import Icon from '../shared/icon';
import tv from '../../assets/logos/tv2.png';
import { followMeData } from '../../data/anchor_data';
import { IFollowMeData, IFollowMeDataProps } from '../../frontEndTypes';

const FollowMe = ({ data }: IFollowMeData) => (
  <Anchor href={data.link} target="_blank" rel="noopener">
    <Icon size="50px" color="white">
      {data.icon}
    </Icon>
  </Anchor>
);

const followMeLogos = followMeData.map((data: IFollowMeDataProps) => (
  <FollowMe key={data.id} data={data} />
));

const Footer = (): React.ReactElement => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FollowMeWrapper>
          <h1>Contact Us:</h1>
          <LogoWrapper> {followMeLogos}</LogoWrapper>
        </FollowMeWrapper>
      </FooterWrapper>
      {/* <FooterLine>
        <p> Copyright {new Date().getFullYear()} | The movie app </p>
      </FooterLine> */}
    </FooterContainer>
  );
};

export default Footer;
