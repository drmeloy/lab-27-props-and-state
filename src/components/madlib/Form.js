import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit }) => (
  <form className={styles.Form} onSubmit={onSubmit}>
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="verb, past tense" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="verb" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="verb, past tense" />
    <input type="text" placeholder="adjective" />
    <button className={styles.submit}>Create Madlib</button>
    <button type='reset' className={styles.reset}>Clear Form</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
