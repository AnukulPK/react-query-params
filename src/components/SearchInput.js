import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (query) {
      params.append('name', query);
    } else {
      params.delete('name');
    }
    history.push({ search: params.toString() });
  }, [query, history]);

  return <input type="text" value={query} onChange={onChange} />;
};

export default SearchInput;
