import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '../../Button/Button';
import { SearchInput, Form } from './Search.style';

const Search = ({ history }) => {
  return (
    <Form>
      <SearchInput type="search" placeholder="qidirish..." />
      <Button wd="30px" style={{ borderRadius: '0 4px 4px 0' }}>
        <FiSearch style={{ color: 'black' }} />
      </Button>
    </Form>
  );
};

export default Search;
