import styled from 'styled-components';

export const SearchBox = styled.div`
  width: 20%;
  background: transparent;
  @media (max-width: 767px) {
    width: 80%;
  }
`;
export const SearchInput = styled.input`
  margin-top: 0.5rem;
  font-size: 17px;
  border: none;
  color: black;
  background: whitesmoke;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  border-right: none;
  height: 30px;
  text-align: left;
  width: 100%;
  outline: none;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`;

export const SearchButton = styled.button`
  text-align: center;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 16px;
  background: var(--color-primary);
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 0 5px 5px 0;
  outline: none;
`;

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? 'lightgrey' : 'black')};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
