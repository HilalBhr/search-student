import React, { useState } from 'react';
import { STUDENTS } from '../studentList';

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ studentSearch, errorMessage }) {
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [active, setActive] = useState(true);

  const studentFind = () => {
    if (userName && date) {
      const findStudent = STUDENTS.find(
        (item) => item.name.toLowerCase() === userName.toLowerCase()
      );
      if (findStudent) {
        if (checkValidity(date, findStudent.validityDate)) {
          studentSearch(findStudent.name);
          setActive(true);
        } else {
          errorMessage(`Sorry, ${userName} validity has Expired! `);
        }
      } else {
        errorMessage(`Sorry, ${userName} is not a verified student!`);
      }
      setUserName('');
      setDate('');
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className='my-50 layout-row align-items-end justify-content-end'>
      <label htmlFor='studentName'>
        Student Name:
        <div>
          <input
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
            id='studentName'
            data-testid='studentName'
            type='text'
            className={
              'mr-30 mt-10' + (active ? '' : userName ? '' : 'userName')
            }
          />
        </div>
      </label>
      <label htmlFor='joiningDate'>
        Joining Date:
        <div>
          <input
            onChange={(event) => setDate(event.target.value)}
            value={date}
            id='joiningDate'
            data-testid='joiningDate'
            type='date'
            className={'mr-30 mt-10' + (active ? '' : date ? '' : 'date')}
          />
        </div>
      </label>
      <button
        onClick={studentFind}
        type='button'
        data-testid='addBtn'
        className='small mb-0'>
        Add
      </button>
    </div>
  );
}

export default Search;
