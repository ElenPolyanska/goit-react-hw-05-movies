import { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const navigate = useNavigate();

  const handleChange = e => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return alert('Необхідно ввести слово для пошуку');
    }
    // setSearchParams({ query: inputValue });
    navigate(`/?query=${inputValue}`);

    // handleSubmit(inputValue);
    // console.log(inputValue);
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input onChange={handleChange} value={inputValue} />
      <SearchBtn>
        <BsSearch />
      </SearchBtn>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  border-radius: 8px;
  border: 1px solid #a09c9c;
  overflow: hidden;
  margin: 14px;
`;

const SearchBtn = styled.button`
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 0;
  background-color: transparent;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 14px;
  padding-right: 8px;

  color: #000000;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
