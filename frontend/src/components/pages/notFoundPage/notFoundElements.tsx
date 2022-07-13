import styled from 'styled-components';

export const Header = styled.h1`
  background: transparent;
  font-size: 10rem;
  color: var(--color-text);
  @media (max-width: 370px) {
    font-size: 5rem;
  } ;
`;
export const Text = styled.h1`
  text-align: justify;
  color: var(--color-text);
  @media (max-width: 370px) {
    font-size: 1rem;
  } ;
`;
export const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
