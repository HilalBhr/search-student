import React from 'react';

function ResidentsList({ user }) {
  return (
    <div className='pa-10 mt-10 w-75'>
      <div className='font-weight-bold text-center'></div>
      <ul className='mt-10 styled w-50 mx-auto' data-testid='residentsNameList'>
        {user.map((item, i) => (
          <li key={i} className='slide-up-fade-in'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
