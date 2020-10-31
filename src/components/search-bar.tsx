import React from 'react';
import InputWrapper from './common/input'

interface SearchBarProps {
  onSearchInputChange: Function;
  value: string;
}


function SearchBar({ onSearchInputChange, value }: SearchBarProps) {
  return (
    <InputWrapper
      onChange={e => onSearchInputChange(e.target.value)}
      value={value}
      placeholder="Search movies..."
    />
  );
}

export default SearchBar;
