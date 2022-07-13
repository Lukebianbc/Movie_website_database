import styled from 'styled-components';

export const HeroTitle = styled.h1`
  background: transparent;
  margin: 4rem 0 0 3rem;
  font-size: 3.5rem;
  color: var(--color-text);
  @media (max-width: 370px) {
    font-size: 2.5rem;
    margin: 1rem 0 0 1rem;
  } ;
`;

export const HeroParagraph = styled(HeroTitle)`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: auto;
`;
export const HomeCardText = styled.p`
  text-align: justify;
  color: var(--color-text);
`;
export const HomeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border: solid 2px var(--color-primary);
  height: 100%;
  border-radius: 10px;
`;
export const HeroCoverContainer = styled.div`
  height: 80vh;
  margin-bottom: -8rem;
`;

export const InfoCardContainer = styled.div`
  background-color: var(--color-backgrouns);
  margin: 4rem 0;
  border-radius: 10px;
  width: 19rem;
  height: 25rem;
  box-shadow: 0px 0px 10px 10px #1f1d1d;
`;

export const PopularNumber = styled.h1`
  color: white;
  text-shadow: 0 0 3px #95adbe, 0 0 3px #95adbe, 0 0 3px #95adbe, 0 0 3px #95adbe;
`;
export const PopularSpan = styled.span`
  background: black;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  height: 40px;
  width: 40px;
  top: 5px;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
