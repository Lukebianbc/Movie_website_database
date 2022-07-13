import styled from 'styled-components';

export const ScrollHorizontally = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  flex-wrap: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
