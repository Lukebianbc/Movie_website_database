import styled from 'styled-components';
import { IErrorProp } from '../../../frontEndTypes';

export const FormControl = styled.input<IErrorProp>`
  width: 100%;
  height: 50px;
  border: none;
  padding: 5px 7px 5px 15px;
  color: #585353;
  font-size: 15px;
  border: 2px solidvar(--color-text);
  background: ${(props) => (props.error ? '#f0958c' : 'var(--color-text)')};
  &:focus {
    border-color: var(--color-primary);
    color: var(--color-background);
  }
  @media (max-width: 600px) {
    width: 80%;
    font-size: 20px;
  }
`;

export const FormContainer = styled.section`
  border-radius: 8px;
  height: 450px;
  background: #3a3535;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 450px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    width: 100%;
    padding: 10rem 0;
    height: 100vh;
  }
`;

export const SettingsFormContainer = styled.section`
  border-radius: 8px;
  height: 250px;
  background: #3a3535;
  position: relative;
  top: 50%;
  left: 10px;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 450px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem 0;
    height: 100vh;
  }
`;

export const Form = styled.form`
  width: 400px;
  margin-top: 16px auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormField = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const FormIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 17px;
  @media (max-width: 600px) {
    right: 60px;
    top: 17px;
  }
`;

export const FormTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: auto;
`;

export const ErrorMsg = styled.p<IErrorProp>`
  display: ${(props) => (props.error ? 'block' : 'none')};
  color: var(--color-danger);
  background: var(--color-text);
  margin: 0.5rem 0;
`;
export const FormText = styled.p`
  color: var(--color-text);
  margin-top: 10px;
`;
export const FormAnchor = styled.span`
  text-decoration: none;
  color: var(--color-text);
  margin: 0 1rem;
  &:hover {
    color: var(--color-primary);
    text-decoration-line: underline;
  }
`;
