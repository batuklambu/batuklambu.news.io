import React from 'react';
import { useGlobalContext } from '../context';

const Stories = () => {
  const { isLoading } = useGlobalContext();
  console.log(isLoading);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return <div>Stories</div>;
};

export default Stories;
