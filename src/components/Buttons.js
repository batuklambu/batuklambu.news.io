import React from 'react';
import { useGlobalContext } from '../context';

const Buttons = () => {
  const { isLoading, page, pageSize, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>
        {page + 1} of {pageSize}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  );
};

export default Buttons;
