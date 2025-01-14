import React from 'react';
import { UserIcon } from './Icons';

export const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('TODO - handle search input changed', e.currentTarget.value);
  };
  return (
    <div>
      <a href="./">Q &amp; A</a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
