import React, { useState }  from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const Header = () => {
  const [searchFilter, setSearchFilter] = useState('');
  return (
    <div className="topnav">
      <a className="logo" href="/">Movie Library</a>
    </div>
  );
}

export default Header;
