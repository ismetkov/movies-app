import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #e6e6e6;
`

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string;
  type: string;
  placeholder: string;
}

function Input({ onChange, value, placeholder, type }: InputProps) {
  return <InputWrapper onChange={onChange} value={value} type={type} placeholder={placeholder} />;
};

Input.defaultProps = {
  type: 'text',
};

export default Input;