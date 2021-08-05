import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #eee;
  border: 1px solid #746e6e;
  box-sizing: border-box;
  border-radius: 3.5px;
  padding: 8px 16px;
  font-size: 16px;
  border: 0px;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export const StyledInputLabel = styled.label`
  font-size: 16px;
  display: flex;
  margin-bottom: 4px;
  color: #746e6e;
`;
