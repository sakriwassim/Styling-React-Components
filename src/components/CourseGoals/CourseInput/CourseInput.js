import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

import styles from './CourseInput.module.css'

// import styled from 'styled-components'

// const FormControl = styled.div`

// margin: 0.5rem 0;

// & label {
//   color: ${props => (props.invalid ? 'red' : 'black')}
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// /***** incalid class ******/
// &.invalid input {
//   border-color: red;
//   background: rgb(255, 156, 156);
// }


// &.invalid label {
// color: red;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, SetIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      SetIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      SetIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
