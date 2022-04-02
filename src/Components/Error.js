import React from 'react';

function Error({ message }) {
  return (
    <div data-testid='errorMsg' className='alert error mt-20 slide-up-fade-in'>
      {message}
    </div>
  );
}

export default Error;
