import styled from 'styled-components';

export const MovieInfo = styled.p`
  margin-right: 2rem;
  margin-left: 0.5rem;
`;
export const MovieDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  @media (max-width: 780px) {
    max-width: 100%;
    width: 100%;
    margin: 1rem 0.2rem;
  } ;
`;

export const MovieContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--color-text);
  background-color: var(--color-background);
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
export const Resume = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 400px;
  text-align: justify;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
