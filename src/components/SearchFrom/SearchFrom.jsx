import { useState } from 'react';

const SearchFrom = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input value={value} type="text" name="query" onChange={onHandleChange} />
    </form>
  );
};

export default SearchFrom;
